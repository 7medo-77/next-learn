import Image from "next/image";

export default function Home() {
  return (
    <>

      <div>
        j
      </div>
      <div class="container mx-auto max-w-sm p-4 rounded-lg shadow-md bg-white">
        <h1 class="text-2xl font-bold text-center mb-4">Sign In</h1>
        <form class="space-y-4">
          <div class="flex flex-col">
            <label for="username" class="text-gray-700 mb-2">Username or Email</label>
            <input type="text" id="username" name="username" class="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full" />
          </div>
          <div class="flex flex-col">
            <label for="password" class="text-gray-700 mb-2">Password</label>
            <input type="password" id="password" name="password" class="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full" />
          </div>
          <button type="submit" class="inline-block px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700">Sign In</button>
        </form>
      </div>


    </>
  );
}
