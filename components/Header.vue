<template>
  <header class="w-full mx-auto lg:max-w-screen-xl">
    <div class="flex items-center justify-between px-6 py-5">
      <a
        href="https://www.remote9.com"
        class="flex items-center text-green-dark focus:outline-none focus:shadow-outline"
      >
        <Logo labelledby="remote9" :size="40" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>