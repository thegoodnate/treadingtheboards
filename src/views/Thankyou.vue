<template>
<div>
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24 text-center">
    <h2 class="text-3xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-serif tracking-normal">Thank you!</h2>
    <p class="mt-6 text-xl text-gray-500">
      Your message has been sent to the TTB team and they will respond to your enquiry as soon as possible
    </p>
  </div>
  <Testimonials :id="2" />
  <CTA/>
</div>
</template>

<script>
import Testimonials from '../components/Testimonials.vue'
import CTA from '../components/CTA.vue'

export default {
  components: {
    Testimonials,
    CTA,
  },
}
</script>