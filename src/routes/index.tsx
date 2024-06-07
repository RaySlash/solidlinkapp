import { FaSolidPlus } from "solid-icons/fa";
import { createResource, For, Show, Switch, Match } from "solid-js";
import Post from "../components/Post";

const apiUrl = "http://localhost:3003/api";

export default function Home() {
  const fetchPosts = async () => {
    const response = await fetch(apiUrl + "/posts");
    return response.json();
  };
  const [posts] = createResource(fetchPosts);
  return (
    <div class="flex-col max-w-full">
      <HomeBar />
      <div class="flex-col justify-center items-center">
        <Show when={posts.loading}>
          <p>Loading...</p>
        </Show>
        <Switch>
          <Match when={posts.error}>
            <p>Error: {posts.error()}</p>
          </Match>
          <Match when={posts}>
            <For each={posts()}>
              {(p) => (
                <Post
                  title={p.title}
                  desc={p.description}
                  date={p.createdAt}
                  username={p.author.name}
                  image={p.image}
                />
              )}
            </For>
          </Match>
        </Switch>
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
