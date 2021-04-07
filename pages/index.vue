<template>
  <main class="flex-grow space-y-16">
    <!-- HERO -->
    <section class="flex flex-col max-w-6xl mx-auto lg:flex-row lg:pt-10 space-y-10 mb-5">
      <MainText />
      <Hero />
    </section>

    <section class="max-w-6xl mx-auto space-y-5 p-6">
      <div class="flex flex-col md:flex-row text-gray-darker bg-gray-100 rounded-md shadow-lg">
        <div class="w-full md:w-1/4 order-2 md:order-1">
          <img src="~/assets/png/trip-path.png" class="object-scale-down w-full rounded-b-md md:rounded-l-md md:rounded-b-none"/>
        </div>
        <div class="flex flex-col w-full md:w-3/4 p-5 space-y-5 rounded-t-md md:rounded-r-md md:rounded-t-none justify-between order-1 md:order-2">
          <h2
            class="bg-clip-text text-transparent bg-gradient-to-r from-green-dark to-green text-2xl font-semibold leading-tight tracking-tight space-y-2 sm:space-y-0 md:text-3xl"
          >
          Join our next trip!
          </h2>
          <div class="grid grid-cols-3 md:grid-cols-5 gap-y-5">
            <div class="col-span-1 text-lg md:text-xl font-semibold">When:</div>
            <div class="col-span-2 md:col-span-4 text-lg ffont-normal">4<sup>th</sup> June - 20<sup>th</sup> June</div>
            <div class="col-span-1 text-lg md:text-xl font-semibold">Where:</div>
            <div class="col-span-2 md:col-span-4 text-lg font-normal">from the <b>North</b> to the <b>South</b> of stunning <b>Portugal</b>.<br>(Start: Porto, End: Lagos)</div>
            <div class="col-span-1 text-lg md:text-xl font-semibold">Who:</div>
            <div class="col-span-2 md:col-span-4 text-lg ffont-normal">9 inspiring remote professionals, including you!</div>
            <div class="col-span-1 text-lg md:text-xl font-semibold">How:</div>
            <div class="col-span-2 md:col-span-4 text-lg ffont-normal">with our incredible private minivan</div>
          </div>
          <div class="flex w-full place-items-end">
            <a
              href="https://tinyurl.com/6h93r85c"
              class="inline-block px-8 py-3 font-semibold rounded shadow-lg focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-green-dark text-white"
            >
              Join now!
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col max-w-6xl mx-auto space-y-5 p-6 bg-gradient-to-r from-green-dark to-blue lg:rounded-md">
      <h2
        class="bg-clip-text text-transparent bg-gradient-to-r from-white to-green md:to-blue text-2xl font-semibold leading-tight tracking-tight space-y-2 sm:space-y-0 md:text-3xl"
      >
      What is included?
      </h2>

      <div class="flex flex-col lg:flex-row text-gray-darker">
        <div class="flex flex-shrink flex-col w-full bg-white rounded-b-md md:rounded-b-none md:rounded-t-md lg:rounded-t-none lg:rounded-l-md space-y-5 p-3 order-2 md:order-1">
          <div class="flex w-full flex-col md:flex-row">
            <ul class="w-full md:w-1/2 list-inside list-disc space-y-1 text-lg lg:text-base font-medium px-2 mt-reset md:w-auto">
              <li>16 days of all-inclusive travel</li>
              <li>4 different locations</li>
              <li>Stays in private villas</li>
              <li>Private minivan</li>
              <li>Breakfast, lunch and dinner</li>
              <li>Inspiring mastermind sessions</li>
              <li>Incredible skillshare sessions</li>
              <li>Group connection workshops</li>
            </ul>
            <ul class="w-full md:w-1/2 list-inside list-disc space-y-1 text-lg lg:text-base font-medium px-2 mt-reset">
              <li>Outdoor exploring</li>
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
        <div class="w-full order-1 md:order-2">
          <img src="~/assets/jpg/trip/_1244660.jpg" class="object-cover w-full h-full rounded-t-md md:rounded-t-none md:rounded-b-md lg:rounded-b-none lg:rounded-r-md md:shadow-lg"/>
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

    <section class="flex flex-col max-w-6xl mx-auto space-y-10 p-6">
      <h2
        class="bg-clip-text text-transparent bg-gradient-to-r from-blue to-green-dark text-2xl font-semibold leading-tight tracking-tight space-y-2 sm:space-y-0 md:text-3xl"
      >
      Remote 9: a life beyond your laptop.
      </h2>

      <div class="w-full px-6 font-normal text-gray-darker text-xl italic">
        The online world is an exciting and limitless place.
        However, we tend to easily forget to close our laptops and go outside and experience the real world.
        This is the balance that <b>Remote 9</b> wants to create.
      </div>

      <div class="flex flex-col md:flex-row text-gray-darker mt-5 md:mt-0 space-y-5">
        <div class="w-full md:w-1/2 order-1 md:order-2 px-6 font-medium text-xl">
          <b>Remote 9</b> is a curated co-travel program for digital nomads and remote workers, that combines <b>business</b> with <b>adventure</b>. Nine inspiring remote professionals will be selected to hit the road together for 16 days.
          Every four days we will change our location, so we can explore each surrounding to the fullest with our private minivan. We will cook together, co-work, learn from each other and grow in our personal and professional life.
          Besides that, we want to encourage you to <b>put your laptop aside</b> and to go outside and experience life to the fullest. We will go for hikes, canyoning, surfing and will do many other activities.
        </div>
        <div class="w-full md:w-1/2 order-2 md:order-1">
          <img src="~/assets/jpg/trip/250a903d-d0bc-4257-a1fa-9230964e7efe.jpg" class="object-scale-down w-full rounded-md"/>
        </div>
      </div>

      <div class="flex flex-col md:flex-row text-gray-darker mt-5 md:mt-0 space-y-2">
        <div class="w-full md:w-1/2 order-1 px-6 font-medium text-xl">
          What is the best part of the trips? <b>The people!</b> Imagine a group of <b>driven</b> and <b>like-minded people</b> traveling together.
          Everybody brings something to the table and shares it in our skillshare sessions.
          Besides that, our <b>mastermind sessions</b> will elevate your professional life to the next level.
          You will grow in places that were unknown before and gain new skills and knowledge during this journey - all thanks to the amazing group of people. 
          Are you ready to start the trip with strangers but leave with a <b>new family</b>?
        </div>
        <div class="w-full md:w-1/2 order-2">
          <img src="~/assets/jpg/trip/DSCF6534-4d-2.jpg" class="object-scale-down w-full rounded-md"/>
        </div>
      </div>

      <div class="w-full px-6 font-medium text-gray-darker text-xl italic">
        Then join our upcoming trip! <b>Remote 9</b> is here to help you live an adventurous life beyond your laptop.
        Are you ready for that life-changing experience? 
        Live life to the fullest, work from amazing locations and co-travel with a group of like-minded people. We can’t wait to meet you!
      </div>

      <a
        href="https://tinyurl.com/6h93r85c"
        class="inline-block px-8 py-3 font-semibold rounded shadow-lg focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-blue text-white m-auto"
      >
        Apply now!
      </a>

      <div class="flex flex-col md:flex-row text-gray-darker mt-5 md:mt-0 space-x-5 space-y-5">
        <div class="w-full md:w-1/2">
          <img src="~/assets/jpg/trip/IMG_9470-1.jpg" class="object-scale-down w-full rounded-md"/>
        </div>
        <div class="w-full md:w-1/2">
          <img src="~/assets/jpg/trip/IMG-20200530-WA0131.jpg" class="object-scale-down w-full rounded-md"/>
        </div>
      </div>

      <div class="w-full px-6 font-semibold text-gray-darker text-xl text-center">
        Still have questions?
      </div>

      <a
        href="https://tinyurl.com/79sm57a"
        class="inline-block px-8 py-3 font-semibold rounded shadow-lg focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-blue text-white m-auto"
      >
        Contact us!
      </a>

    </section>

    <section class="flex flex-col max-w-6xl mx-auto space-y-10 p-6">
      <h2
        class="bg-clip-text text-transparent bg-gradient-to-r from-blue to-green text-2xl font-semibold leading-tight tracking-tight space-y-2 sm:space-y-0 md:text-3xl"
      >
      Remote 9ers says:
      </h2>

      <Testimonials />
      
    </section>

    <section class="flex flex-col max-w-6xl mx-auto space-y-5 p-6 bg-gradient-to-r from-green-dark to-blue lg:rounded-md">
      <h2
        class="bg-clip-text text-transparent bg-gradient-to-r from-white to-green text-2xl font-semibold leading-tight tracking-tight space-y-2 sm:space-y-0 md:text-3xl"
      >
      Who is your host, the mind behind Remote 9?
      </h2>

      <div class="flex flex-col md:flex-row text-gray-darker">
        <div class="flex flex-shrink flex-col w-full bg-white rounded-b-md md:rounded-b-none md:rounded-l-md space-y-5 p-3 order-2 md:order-1 items-start">
          <div class="flex w-full flex-col space-y-5 text-lg lg:text-xl font-medium content-center">
            <span class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-dark to-green">Andreas Machado</span>
            <p>
              <b>Andreas Machado</b> is an adventure enthusiast. He lives to <b>experience the outside world</b> and is the best when it comes to finding hidden places.
              He is also the <b>former Co-Founder</b> of The Nomad Escape, an amazing <b>videographer</b>, <b>food lover</b> and <b>forever traveller</b>.
            </p>
            <p>
              His passion is to <b>create the best travel experience</b> for remote professionals. 
              This is why he launched <b>Remote 9</b>. To bring driven and like-minded people together, who are looking for more adventure in their life.
              Besides that, he loves to <b>be active outside</b> and you will barely see him going somewhere without his camera. 
            </p>
            <p>
              Oh and we almost forgot to mention: If you <b>bring him a cheese board</b>, you will completely win his heart!
            </p>
          </div>
        </div>
        <div class="w-full md:relative order-1 md:order-2">
          <img src="~/assets/jpg/andreas/IMG_7576.jpg" class="object-scale-down w-full rounded-t-md md:rounded-t-none md:rounded-r-md md:shadow-lg"/>
        </div>
      </div>
      <div class="flex flex-col md:flex-row space-y-3 space-x-3 w-full">
        <img src="~/assets/jpg/andreas/IMG_7389_edited-3.jpg" class="object-scale-down rounded-md w-full md:w-2/5"/>
         <img src="~/assets/jpg/andreas/Andreas-2634 Low Res.jpg" class="object-scale-down rounded-md w-full md:w-1/5"/>
          <img src="~/assets/jpg/andreas/27c13a41-ff2b-4d51-a61d-eaff84f909b6.jpg" class="object-scale-down rounded-md w-full md:w-2/5"/>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Index',
}
</script>