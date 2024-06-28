<template>
<div>
  <div class="mx-auto pt-12 pb-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-24">
    <h2 class="text-center lg:text-left text-3xl font-extrabold text-gray-900 sm:text-5xl  lg:text-6xl font-serif tracking-normal">Events</h2>

  <div class="mt-12 space-y-12 lg:space-y-0 grid grid-cols-1 gap-5 lg:gap-x-8">
      <div v-for="event in events" :key="event.title" class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
        <div v-if="event.upcoming" class="absolute font-serif tracking-normal font-semibold top-0 right-0 bg-green-500 text-white px-4 py-2 rounded-bl-lg rounded-tr-lg">
          Upcoming Event
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <img class="h-full md:h-96" :src="event.image"/>
          <div class="mt-5 md:mt-0">
            <h3 class="text-3xl font-semibold text-gray-900 font-serif tracking-normal">{{ event.title }}</h3>
            <div class="mt-4 flex flex-wrap items-centeritems-center text-xl font-serif tracking-normal">
              <h4 class="mr-4 font-semibold text-yellow-300">{{ event.date }}</h4>
              <h4 class="text-gray-500">@{{ event.venue }}</h4>
            </div>
            <div class="mt-8">
              <p
                v-for="description in event.description" :key="description"
                class="mt-1 text-gray-500"
              >
                {{ description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Testimonials :id="2" />
</div>
</template>

<script>
import Testimonials from '../components/Testimonials.vue'

const events = [
  {
    title: 'Beauty and the Beast Jr.',
    date: 'June 2025',
    venue: 'TBC',
    image: '/images/beauty-and-the-beast-jr.png',
    tags: [
      'Titans',
      'Troubadors'
    ],
    description: [
      'We\' excited to announce our summer 2025 production of Beauty and the Beast Jr!',
      'Conact us for more information on joining this amazing show and becoming part of the TTB family!',
      'Rehersals and auditions staring this September!'
    ],
    upcoming: true
  },
  {
    title: 'Legally Blonde Jr.',
    date: 'June 2024',
    venue: 'St Cyres School',
    image: '/images/legally-blonde-jr.png',
    tags: [
      'Titans',
      'Troubadors'
    ],
    description: [
      'Tuesday 4pm - 5:30pm',
      'St Francis Millennium Centre, Barry',
    ],
  },
  {
    title: 'Aristocats Kids',
    date: 'April 2024',
    venue: 'Memo Arts Centre',
    image: '/images/aristocats-kids.png',
    tags: [
      'Tip-Toes',
    ],
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