<template>
  <div class="px-6 lg:pt-16 space-y-6 md:w-2/5">
    <h1
      class="text-4xl font-semibold leading-tight tracking-tight text-black space-y-2 sm:space-y-0 md:text-5xl"
    >
      The best trips for
      <span class="text-green-dark">remote workers</span>
    </h1>

    <p class="text-lg md:text-xl text-gray-darker">
      Live life to the fullest, work from amazing locations, every day is a new adventure.
    </p>

    <a
      href="https://remote9.com"
      class="inline-block px-8 py-3 font-medium rounded shadow-lg focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-green-dark text-white"
    >
      Apply now!
    </a>

    <p class="text-lg md:text-xl text-gray-darker">
      Are you not ready yet to join? Fill in your email to receive more information and updates on the upcoming trips.
    </p>

    <div class="flex flex-row md:text-base text-gray-darker space-x-3">
        <input class="flex-grow block px-4 py-3 text-base appearance-none border border-gray-dark shadow-none bg-white rounded placeholder-gray focus:outline-none focus:shadow-outline-blue focus:border-green-dark" id="email" x-model="email" type="email" placeholder="Enter your email" autofocus>
        <button class="px-4 py-3 font-medium rounded shadow-lg focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-green-dark text-white">Confirm</button>
    </div>



  </div>
</template>

<script>
export default {
  name: 'MainText',
}
</script>