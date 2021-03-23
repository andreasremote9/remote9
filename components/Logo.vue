<template functional>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 512 512"
    :aria-labelledby="props.labelledby"
    role="presentation"
    class="inline-block align-top fill-current"
    :class="[data.class, data.staticClass]"
  >
    <title lang="en">logo icon</title>
    <g>
     <path
        stroke="null"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M331.038 263.711c-25.245 25.779-59.838 37.176-94.79 31.255-51.754-8.746-86.526-50.566-86.526-104.078 0-61.567 44.689-106.256 106.26-106.256 52.756 0 94.649 33.83 104.232 84.178 6.587 34.649-4.038 69.238-29.176 94.901zM255.982.655c-108.45 0-190.233 81.305-190.233 189.11 0 71.445 25.514 120.35 91.234 161.061 18.334 11.359 82.04 33.744 61.994 89.044l-18.48 32.144a24.974 24.974 0 0 0-1.651 25.885 24.967 24.967 0 0 0 22.188 13.447h37.658a25.02 25.02 0 0 0 20.588-10.797l109.363-158.222c49.713-71.538 58.178-105.91 57.58-151.67C444.93 82.34 363.147.655 255.982.655M443.103 463.348c0-26.509-21.489-48.001-47.997-48.001s-47.997 21.492-47.997 48.001c0 26.504 21.489 47.998 47.997 47.998s47.997-21.494 47.997-47.998"
     />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    labelledby: {
      type: String,
      default: 'logo',
    },
    size: {
      type: [Number, String],
      default: 16,
    },
  },
}
</script>
