import { A } from "@solidjs/router";
import { FaSolidChevronDown } from "solid-icons/fa";

function Login() {
  return (
    <div id="formContainer">
      <h1>Login</h1>
      <form>
        <input
          class="rounded-full text-center"
          type="text"
          placeholder="Username"
        />
        <input
          type="password"
          placeholder="Password"
          class="rounded-full text-center"
        />
        <button
          class="font-bold px-8 h-fit self-center text-black dark:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black "
          type="submit"
        >
          Login
        </button>
      </form>
      <p class="flex justify-center items-center font-light text-xs">
        Don't have an account?
        <A href="/signup" class="text-purple-700">
          Sign Up
        </A>
      </p>
    </div>
  );
}

export default Login;
