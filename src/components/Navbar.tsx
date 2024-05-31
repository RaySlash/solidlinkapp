import { useLocation } from "@solidjs/router";

function Navbar() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <div class="flex justify-between">
      <a class="flex gap-x-2 cursor-pointer w-20">
        <img src="./link-circle.svg" alt="Logo" />
        <p class="font-bold text-center">Link App</p>
      </a>
      <ul class="list-none md:flex gap-x-8 items-center justify-center hidden md:visible">
        <li class={`${active("/")}`}>
          <a href="/">Home</a>
        </li>
        <li class={`${active("/profile")}`}>
          <a href="/profile">Profile</a>
        </li>
        <li class={`${active("/settings")}`}>
          <a href="/settings">Settings</a>
        </li>
      </ul>
      <button class="font-bold px-8 h-fit self-center dark:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black ">
        Login
      </button>
    </div>
  );
}

export default Navbar;
