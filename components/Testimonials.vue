<template>
  <div class="w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    <div
      v-for="(testimonial, index) in testimonials" :key="index"
      class="flex flex-col p-6 space-y-5 items-center bg-gray shadow-md rounded-md text-center"
    >
      <img :src="`~/assets/png/${testimonial.picture}`" class="h-32 rounded-full"/>
      <span class="text-lg font-bold text-gray-darker">{{testimonial.name}}</span>
      <span class="text-xl font-semibold text-green-dark italic">“{{testimonial.quote}}”</span>
      <p class="text-sm text-gray-dark">{{testimonial.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainText',

  data() {

    return {
      testimonials: [
        {
          name: "Iana",
          picture: "Iana_Circle.png",
          quote: "WOW what an amazing experience I have been part of!",
          text: "Imagine co-living for a week with a group of smart professionals, exchanging ideas, skillshares, taking part in masterminds and connection sessions. Words cannot describe how transformative the week has been for me! It has certainly raised my standards for how I want my future holidays to look like, and cannot wait to join the next one thank you Andreas Machado for curating it.",
        },
        {
          name: "Kurt",
          picture: "Kurt_Circle.png",
          quote: "Highly recommend!",
          text: "Had the pleasure to be with Andreas and his team on a remote trip and was an absolute blast of an experience full of adventure, knowledge sharing and great new connections and friends. Highly recommend anyone interested in delving into the remote world to join in the fun!",
        },
        {
          name: "Joanna",
          picture: "Joanna.png",
          quote: "Don't think about it twice, just go for it.",
          text: "Andreas - the Founder of Remote9 is a guy with a dream, actually he has two dreams: He wants to create the best trips in the world and the best job in the world for himself. His passion for travelling and putting together amazing, ambitious people is visible in all he does... I have participated in one of the trips hosted by Andreas before and it was definitely an extraordinary experience that I will never forget. Don't think about it twice, just go for it and sign up for the next trip with Remote 9. You will get the best experience ever, get all the inspiration you need and meet friends for life. Highly recommended!",
        },
        {
          name: "Laura",
          picture: "Laura2_Circle.png",
          quote: "You can’t even describe it. You have to experience it!",
          text: "In my opinion, the best way to connect with these people is to live or travel together. You will get deeper connections and more meaningful relationships. You travel with a small group of people who are carefully picked to the group. You will have more meaningful relationships thanks to that small group of 9 people! I remember hiking and canyoning where we couldn't bring our cameras and phones since we had to swim and jump into deep water. We just enjoyed the moment in nature while still brainstorming business ideas with a group of smart people!",
        },
      ]
    }
  }
}
</script>