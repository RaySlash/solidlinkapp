import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Navbar />
          <div class="m-auto px-10 mt-20 max-w-3xl">
            <Suspense>{props.children}</Suspense>
          </div>
          <Footer />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
