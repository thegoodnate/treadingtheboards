<template>
<div>
  <div class="relative bg-white mb-24">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img class="h-56 w-full object-cover lg:absolute lg:h-full filter grayscale" src="/images/private-tuition.png" alt="" />
      </div>
    </div>
    <div class="relative pt-12 lg:pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
      <div class="lg:col-start-2 lg:pl-8">
        <div class="text-center md:text-left text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
          <h2 class="leading-6 font-semibold font-serif tracking-normal text-3xl md:text-4xl">Private tuition</h2>
          <p class="mt-8 text-lg text-gray-500">
            We offer private tuition in Verse and Prose, Acting and Musical Theatre and students may work towards taking LAMDA exams. 
          </p>
          <ul role="list" class="mt-6 space-y-6">
            <li v-for="feature in features" :key="feature" class="flex justify-center md:justify-start">
              <CheckIcon class="flex-shrink-0 w-6 h-6 text-indigo-500" aria-hidden="true" />
              <span class="ml-3 text-gray-500">{{ feature }}</span>
            </li>
          </ul>
          <p class="mt-8 text-lg text-gray-500">
            These sessions provide a safe space for children to feel empowered and discover their own abilities.
          </p>
          <p class="mt-8 text-lg text-gray-500">
            Please <router-link class="text-indigo-500 hover:text-indigo-700" to="/contact">contact us</router-link> to learn more about our private tuition or check availability.
          </p>
        </div>
      </div>
    </div>
  </div>
  <Testimonials :id="5" />
  <CTA/>
</div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/outline'
import Testimonials from '../components/Testimonials.vue'
import CTA from '../components/CTA.vue'

const features = [
  "Age 6+",
  "Individual or pair sessions",
  "Confidence building",
  "Performance skills",
  "Knowledge development",
]

export default {
  components: {
    CheckIcon,
    Testimonials,
    CTA,
  },
  setup() {
    return {
      features,
    }
  },
}
</script>