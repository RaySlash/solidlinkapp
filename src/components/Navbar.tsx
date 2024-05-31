function Navbar() {
  return (
    <div class="flex justify-between">
      <a class="flex gap-x-2 cursor-pointer w-20">
        <img src="./link-circle.svg" alt="Logo" />
        <p class="font-bold text-center">Link App</p>
      </a>
      <ul class="list-none md:flex gap-x-8 items-center justify-center hidden md:visible">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
      <button class="font-bold px-8 h-fit self-center dark:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black ">
        Login
      </button>
    </div>
  );
}

export default Navbar;
