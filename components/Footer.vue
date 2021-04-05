
<template>
  <footer class="w-full px-6 pb-6">
    <section
      class="mx-auto text-sm md:text-lg sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl space-y-5 divide-y"
    >
      <div class="flex items-center align-bottom space-x-2 divide-x">
        <Logo labelledby="tagline" :size="36" />
        <p id="tagline" class="align-bottom pl-2" style="height: 36px">The best trips for remote workers.</p>
      </div>

      <p class="pt-5 text-green-dark">© 2021 Remote 9</p>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>