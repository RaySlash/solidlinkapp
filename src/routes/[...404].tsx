export default function NotFound() {
  return (
    <div class="flex flex-col items-center justify-center min-h-96 bg-white text-center">
      <h1 class="text-6xl font-bold text-black">404</h1>
      <p class="text-2xl text-black mt-4">Page Not Found</p>
      <button
        class="mt-8 px-6 py-3 bg-blue-300 text-white text-lg font-medium rounded-full hover:bg-blue-700 transition duration-300"
        onClick={() => (window.location.href = "/")}
      >
        Go Home
      </button>
    </div>
  );
}
