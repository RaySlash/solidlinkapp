import { FaSolidPlus } from "solid-icons/fa";
import Post from "../components/Post";

export default function Home() {
  return (
    <div class="flex-col max-w-full mt-10">
      <HomeBar />
      <div class="mt-5 flex-1 justify-center items-center">
        <Post
          title="Deadly"
          desc="Kakeguri"
          date={Date().substring(0, 15)}
          username="Shane"
        />
      </div>
    </div>
  );
}

function HomeBar() {
  return (
    <div class="flex justify-between bg-slate-200 px-6 py-2 rounded-full items-center">
      <p class="text-2xl">Feed</p>
      <button class="p-2">
        <FaSolidPlus />
      </button>
    </div>
  );
}
