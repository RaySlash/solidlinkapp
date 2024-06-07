function Signup() {
  return (
    <div id="formContainer">
      <h1>Signup</h1>
      <form>
        <input
          type="text"
          placeholder="Full Name"
          class="rounded-full text-center"
        />
        <input
          class="rounded-full text-center"
          type="text"
          placeholder="Username"
        />
        <input
          type="password"
          placeholder="Password"
          class="rounded-full text-center"
        />
        <button
          class="font-bold px-8 h-fit self-center text-black dark:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black "
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
