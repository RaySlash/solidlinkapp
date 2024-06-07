import { createSignal } from "solid-js";

const [username, setUsername] = createSignal("");
const [password, setPassword] = createSignal("");

function LoginScreen() {
  return (
    <div class="flex-col items-center justify-center">
      <h1>Signup / Login</h1>
      <form class="flex justify-center items-center gap-2">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginScreen;
