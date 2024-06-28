<template>
<div class="mt-12">
  <h1>Events</h1>

  <div class="mt-12 space-y-12 lg:space-y-0 grid grid-cols-1 gap-5 lg:gap-x-8">
      <div v-for="event in events" :key="event.title" class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-gray-900 font-serif tracking-normal">{{ event.title }}</h3>
          <p class="mt-4 flex items-baseline text-gray-900">
          </p>
          <p
            v-for="description in event.description" :key="description"
            class="mt-2 text-gray-500"
          >
            {{ description }}
          </p>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import Testimonials from '../components/Testimonials.vue'

const events = [
  {
    title: 'Tip-Toe treaders',
    description: [
      'Wednesday 4pm - 5pm',
      'Margaret Alexander Centre, Barry',
    ],
  },
  {
    title: 'Troubadours',
    description: [
      'Tuesday 4pm - 5:30pm',
      'St Francis Millennium Centre, Barry',
    ],
  },
  {
    title: 'Titans',
    description: [
      'Tuesday 4pm - 5:30pm',
      'St Francis Millennium Centre, Barry',
    ],
  },
]

export default {
  components: {
    Testimonials,
  },
  setup() {
    return {
      events,
    }
  },
}
</script>

<style>
</style>