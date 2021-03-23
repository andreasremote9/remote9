
<template>
  <footer class="w-full px-6">
    <section
      class="mx-auto text-lg text-green-dark sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl space-y-5 divide-y"
    >
      <div class="flex items-center space-x-2">
        <Logo labelledby="tagline" :size="56" />
        <p id="tagline">remote9, the best trip for remote workers.</p>
      </div>

      <p class="pt-5">© 2021 remote9</p>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>