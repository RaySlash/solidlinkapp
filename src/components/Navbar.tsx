import { A } from "@solidjs/router";

function Navbar() {
  return (
    <div class="flex justify-between items-center bg-blue-950 text-white px-6">
      <A class="flex gap-x-2 cursor-pointer w-20" href="/">
        <img class="invert" src="./link-circle.svg" alt="Logo" />
        <p class="font-bold text-center">Link App</p>
      </A>
      <ul class="list-none md:flex gap-x-8 items-center justify-center hidden md:visible">
        <li>
          <A href="/">HOME</A>
        </li>
        <li>
          <A href="/profile">PROFILE</A>
        </li>
        <li>
          <A href="/settings">SETTINGS</A>
        </li>
      </ul>
      <button class="font-bold px-8 h-fit self-center text-black dark:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black ">
        Login
      </button>
    </div>
  );
}

export default Navbar;
