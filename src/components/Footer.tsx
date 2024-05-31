import { TbBrandSolidjs } from "solid-icons/tb";

function Footer() {
  return (
    <footer class="bg-blue-900 flex justify-between items-center fixed bottom-0 w-full dark:text-white p-1">
      <p class="text-white flex gap-x-2 justify-center items-center text-sm w-full">
        Powered by <TbBrandSolidjs class="text-sky-400" />
      </p>
    </footer>
  );
}

export default Footer;
