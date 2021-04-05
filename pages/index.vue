<template>
  <main class="flex-grow space-y-16">
    <!-- HERO -->
    <section class="flex flex-col max-w-6xl mx-auto lg:flex-row lg:pt-10 space-y-10 mb-5">
      <MainText />
      <Hero />
    </section>

    <section class="flex flex-col max-w-6xl mx-auto space-y-5 p-6 bg-gradient-to-r from-green-dark to-blue lg:rounded-md">
      <h2
        class="bg-clip-text text-transparent bg-gradient-to-r from-white to-green md:to-blue text-2xl font-semibold leading-tight tracking-tight space-y-2 sm:space-y-0 md:text-3xl"
      >
      What is included?
      </h2>

      <div class="flex flex-col lg:flex-row text-gray-dark mt-5 md:mt-0">
        <div class="flex flex-shrink flex-col w-full bg-white rounded-b-md md:rounded-b-none md:rounded-t-md lg:rounded-l-md space-y-5 p-3 order-2 md:order-1 items-start">
          <div class="flex w-full flex-col md:flex-row">
            <ul class="w-full md:w-1/2 list-none space-y-1 text-base md:text-lg font-medium px-2 mt-reset md:w-auto">
              <li>16 days of all-inclusive travel</li>
              <li>4 different locations</li>
              <li>Stays in private villas</li>
              <li>Private minivan</li>
              <li>Breakfast, lunch and dinner</li>
              <li>Inspiring mastermind sessions</li>
              <li>Incredible skillshare sessions</li>
              <li>Group connection workshops</li>
              <li>Outdoor exploring</li>
            </ul>
            <ul class="w-full md:w-1/2 list-none space-y-1 text-base md:text-lg font-medium px-2 mt-reset">
              <li>Co-working </li>
              <li>Cooking together </li>
              <li>Movie and BBQ nights</li>
              <li>Stunning scenery</li>
              <li>Wifi connection anywhere we go</li>
              <li>A group of like-minded people</li>
              <li>Adventurous activities</li>
            </ul>
          </div>
          <span class="px-2 text-green-dark font-semibold text-xl">and so much more...</span>
        </div>
        <div class="w-full md:relative order-1 md:order-2">
          <img src="/home/luca/Developer/remote9/assets/jpg/trip/_1244660.jpg" class="object-scale-down w-full rounded-t-md md:rounded-t-none md:rounded-b-md lg:rounded-r-md md:shadow-lg"/>
        </div>
      </div>
      <div class="flex flex-col space-y-1 inline-block p-4 w-full rounded-md bg-gradient-to-r from-blue to-green-dark items-center m-auto">
          <span class="font-normal text-lg text-white">Price for 16 days/nights</span>
          <span class="font-semibold text-xl text-white">1950 €</span>
          <a
            href="https://tinyurl.com/6h93r85c"
            class="inline-block px-8 py-3 font-semibold rounded shadow-lg focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-white text-blue"
          >
            Apply now!
          </a>                
      </div>
        
    </section>
  </main>
</template>

<script>
export default {
  name: 'Index',
}
</script>