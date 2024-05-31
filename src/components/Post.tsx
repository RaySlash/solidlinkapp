import { FaSolidAngleDown, FaSolidUser } from "solid-icons/fa";

function Post(props: {
  username: string;
  date: string;
  title: string;
  desc: string;
}) {
  return (
    <div class="flex-col w-full bg-gray-200 px-8 py-4 rounded-xl items-center">
      <div class="flex justify-between items-center p-2">
        <div class="flex items-center">
          <FaSolidUser class="text-black text-xl" />
          <a href="#">{props.username}</a>
        </div>
        <FaSolidAngleDown class="text-black text-xl" />
      </div>
      <div class=" flex items-center justify-center self-center bg-gray-100 rounded-xl p-3">
        <img src="/post-anime.jpeg" alt="anime" class="h-96 rounded-xl" />
      </div>
      <div class="flex-col items-center">
        <h1>{props.title}</h1>
        <p class="text-sm">{props.date}</p>
      </div>
      <p class="mt-6">{props.desc}</p>
    </div>
  );
}

export default Post;
