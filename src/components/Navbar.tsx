import { A } from "@solidjs/router";

function Navbar() {
  return (
    <div class="flex justify-between items-center bg-blue-950 text-white px-6 fixed top-0 min-w-full max-h-16">
      <A class="flex gap-x-2 cursor-pointer w-20" href="/">
        <img class="invert" src="./link-circle.svg" alt="Logo" />
        <p class="font-bold text-center">Link App</p>
      </A>
      <ul class="list-none md:flex gap-x-8 items-center justify-center hidden md:visible">
        <li>
          <A href="/profile" activeClass="font-bold bg-black">
            PROFILE
          </A>
        </li>
        <li>
          <A href="/settings" activeClass="font-bold bg-black">
            SETTINGS
          </A>
        </li>
      </ul>
      <A href="/login" activeClass="hidden" inactiveClass="visible">
        <button class="font-bold px-8 h-fit self-center text-black dark:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black">
          Login
        </button>
      </A>
    </div>
  );
}

export default Navbar;
