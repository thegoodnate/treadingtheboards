<template>
<div>
  <div class="mx-auto pt-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-24">
    <h2 class="text-center lg:text-left text-3xl font-extrabold text-gray-900 sm:text-5xl  lg:text-6xl font-serif tracking-normal">Classes</h2>
    <p class="text-center lg:text-left mt-6 max-w-2xl text-xl text-gray-500">Our current classes are available for children age 4 to 18 years</p>

    <!-- Tiers -->
    <div class="mt-12 space-y-12 lg:space-y-0 grid md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-x-8">
      <div v-for="tier in pricing.tiers" :key="tier.title" class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-gray-900 font-serif tracking-normal">{{ tier.title }}</h3>
          <p v-if="tier.mostPopular" class="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">Most popular</p>
          <p class="mt-4 flex items-baseline text-gray-900">
            <span class="text-5xl font-extrabold">£{{ tier.price }}</span>
            <span class="ml-1 text-xl font-semibold mb-6">{{ tier.frequency }}</span>
          </p>
          <p
            v-for="description in tier.description" :key="description"
            class="mt-2 text-gray-500"
          >
            {{ description }}
          </p>

          <!-- Feature list -->
          <ul role="list" class="mt-6 space-y-6">
            <li v-for="feature in tier.features" :key="feature" class="flex">
              <CheckIcon class="flex-shrink-0 w-6 h-6 text-indigo-500" aria-hidden="true" />
              <span class="ml-3 text-gray-500">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="text-gray-500 mt-8">
      <b>*</b> Fees are collected per helf-term
    </p>
  </div>
  <Banner/>
  <Testimonials :id="2" />
  <CTA />
</div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/outline'
import Testimonials from '../components/Testimonials.vue'
import CTA from '../components/CTA.vue'
import Banner from '../components/Banner.vue'

const pricing = {
  tiers: [
    {
      title: 'Tip-Toe treaders',
      price: 7,
      frequency: '/session*',
      description: [
        'Wednesday 4pm - 5pm',
        'Margaret Alexander Centre, Barry',
      ],
      features: [
        'Age 4+',
        'Confidence building',
        'Creative expression',
        'Social devleopment',
        'Games',
        'Fun through drama',
        'Summer show',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
    {
      title: 'Troubadours',
      price: 8,
      frequency: '/session*',
      description: [
        'Tuesday 4pm - 5:30pm',
        'St Francis Millennium Centre, Barry',
      ],
      features: [
        'Age 9+',
        'LAMDA study',
        'Mental wellbeing',
        'Confidence building',
        'Individual and group performance',
        'Tailored development',
        'Summer show',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
    {
      title: 'Titans',
      price: 8,
      frequency: '/session*',
      description: [
        'Tuesday 4pm - 5:30pm',
        'St Francis Millennium Centre, Barry',
      ],
      features: [
        'Age 12+',
        'LAMDA study',
        'Mental wellbeing',
        'Confidence building',
        'Individual and group performance',
        'Tailored development',
        'Summer show',
      ],
      cta: 'Monthly billing',
      mostPopular: false,
    },
  ],
}

export default {
  components: {
    CheckIcon,
    Testimonials,
    CTA,
    Banner,
  },
  setup() {
    return {
      pricing,
    }
  },
}
</script>
