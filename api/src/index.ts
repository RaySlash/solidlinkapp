import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { Logestic } from "logestic";
import * as Routes from "./routes";
import cors from "@elysiajs/cors";

const PORT = 3003;

const app = new Elysia({ prefix: `/api` })
  .onBeforeHandle({ as: "global" }, () => {})

  // Routes
  .use(Routes.login)
  .use(Routes.signup)
  .use(Routes.posts)

  // Plugins
  .use(cors())
  .use(
    swagger({
      path: "/docs",
    }),
  )

  .use(Logestic.preset("common"))

  .onError(({ code }) => {
    if (code === "NOT_FOUND") {
      return "Route Not Found\n";
    }
  })

  // $ curl -X GET http://localhost:3000/api/health
  //            => I am alive!
  .get("/health", () => "I am alive!\n")

  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
