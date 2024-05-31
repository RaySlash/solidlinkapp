import { FaSolidPlus } from "solid-icons/fa";
import Post from "../components/Post";
import { For } from "solid-js";

export default function Home() {
  return (
    <div class="flex-col max-w-full mt-10">
      <HomeBar />
      <div class="mt-5 flex-col justify-center items-center">
        <For each={post}>
          {(p) => (
            <Post
              title={p.title}
              desc={p.desc}
              date={p.date}
              username={p.username}
              image={p.image}
            />
          )}
        </For>
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
