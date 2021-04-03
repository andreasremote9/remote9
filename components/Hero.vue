
<template>
  <div
    class="flex flex-col px-6 space-y-6 md:w-3/5 plyr_wrapper_reset"
  >
    <!-- vimeo iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
    <vue-plyr>
        <div class="plyr__video-embed">
            <iframe
            class="rounded-md overflow-hidden"
            src="https://player.vimeo.com/video/400919156?muted=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;portrait=0&amp;title=0&amp;speed=0&amp;transparent=1&amp;gesture=media&amp;#t=5s"
            allowtransparency
            allow="autoplay"
            ></iframe>
        </div>
    </vue-plyr>
  </div>
</template>

<script>

export default {
  name: 'Hero',
}
</script>