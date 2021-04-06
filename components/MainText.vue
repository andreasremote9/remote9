<template>
  <div class="px-6 space-y-6 lg:w-2/5">
    <h1
      class="text-4xl font-semibold leading-tight tracking-tight text-black space-y-2 sm:space-y-0 md:text-5xl"
    >
      The best trips for
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-dark to-green">remote workers</span>
    </h1>

    <p class="text-lg md:text-xl text-gray-darker">
      Are you looking for a <b>community</b> to share a <b>crazy adventure</b> with? A group that you can <b>explore</b>, <b>learn</b> and <b>grow</b> together?
      Then you have come to the right place! With <b class="text-green-dark">Remote 9</b> you hit the road for <b>16 days</b> with other remote <b>professionals</b>, <b>entrepreneurs</b> and <b>digital nomads</b>.
    </p>
    <p class="text-lg md:text-xl text-gray-darker"> 
      Together we <b>discover new places</b> and <b>live an adventurous life beyond our laptops</b>. 
      <span class="text-2xl">Sounds good? We bet on it!</span>
    </p>

    <a
      href="https://tinyurl.com/6h93r85c"
      class="inline-block px-3 md:px-8 py-3 font-medium rounded shadow-lg focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-green-dark text-white"
    >
      Apply now!
    </a>

    <a
      href="https://instagram.com/remote_9"
      class="inline-block px-3 md:px-8 py-3 font-medium rounded shadow-lg focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-green-dark text-white"
    >
      <font-awesome-icon :icon="['fab', 'instagram']"/>
      <span>Follow us!</span>
    </a>

  </div>
</template>

<script>
export default {
  name: 'MainText',
}
</script>