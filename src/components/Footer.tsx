import { TbBrandSolidjs } from "solid-icons/tb";

function Footer() {
  return (
    <footer class="flex justify-between items-center absolute bottom-0 w-full dark:text-white">
      <div></div>
      <p class="text-gray-500 flex gap-x-2 items-center font-semibold text-lg">
        Powered by <TbBrandSolidjs class="text-sky-700" />
      </p>
      <div></div>
    </footer>
  );
}

export default Footer;
