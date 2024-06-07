import {
  FaSolidComments,
  FaSolidAngleDown,
  FaSolidUser,
  FaSolidThumbsUp,
} from "solid-icons/fa";

function Post(props: {
  username: string;
  date: string;
  title: string;
  desc: string;
  image: string | undefined;
}) {
  return (
    <div class="my-8 flex-col w-full bg-gray-200 px-8 py-4 rounded-xl items-center">
      <div class="flex justify-between items-center p-2">
        <div class="flex items-center">
          <FaSolidUser class="text-black text-xl" />
          <a href="#">{props.username}</a>
        </div>
        <FaSolidAngleDown class="text-black text-xl" />
      </div>
      <div class=" flex items-center justify-center self-center bg-gray-100 rounded-xl p-3">
        <img src={props.image} alt="anime" class="h-96 rounded-xl" />
      </div>
      <div class="flex justify-between items-center w-full p-2 rounded-xl">
        <div class="flex gap-2">
          <FaSolidThumbsUp class="text-black text-lg" />
          <FaSolidComments class="text-black text-lg" />
        </div>
        <p class="text-sm">{props.date.substring(0, 10)}</p>
      </div>
      <div class="flex-col items-center">
        <p class="text-xl font-bold">{props.title}</p>
      </div>
      <p class="mt-2">{props.desc}</p>
    </div>
  );
}

export default Post;
