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
        <div class="m-auto px-10 mt-10 max-w-3xl">
          <Navbar />
          <Suspense>{props.children}</Suspense>
          <Footer />
        </div>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
