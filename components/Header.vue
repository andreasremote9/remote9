<template>
  <header class="w-full mx-auto lg:max-w-screen-xl">
    <div class="flex items-center justify-between px-6">
      <a
        href="https://www.remote9.com"
        class="flex items-center text-green-dark focus:outline-none focus:shadow-outline"
      >
        <Logo labelledby="remote9" :size="36" />
        <span class="text-xl font-semibold" id="remote9">remote9</span>
      </a>

      <div class="space-x-4">
        <a
          href="https://remote9.com"
          class="px-5 py-2 text-sm rounded focus:shadow-outline focus:outline-none text-green-dark active:text-white active:bg-green-dark active:text-white transition duration-150 hover:bg-green-dark hover:text-white hover:shadow"
        >
          Trips
        </a>

        <a
          href="https://remote9.com"
          class="px-5 py-2 text-sm rounded focus:shadow-outline focus:outline-none text-green-dark active:text-white active:bg-green-dark active:text-white transition duration-150 hover:bg-green-dark hover:text-white hover:shadow"
        >
          About Us
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>