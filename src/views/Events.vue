<template>
<div>
  <div class="mx-auto pt-12 pb-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-24">
    <h2 class="text-center lg:text-left text-3xl font-extrabold text-gray-900 sm:text-5xl  lg:text-6xl font-serif tracking-normal">Events</h2>

  <div class="mt-12 space-y-12 lg:space-y-0 grid grid-cols-1 gap-5 lg:gap-x-8">
      <div v-for="event in events" :key="event.title" class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
        <div v-if="event.upcoming" class="absolute font-serif tracking-normal font-semibold top-0 right-0 bg-yellow-300 text-black px-4 py-2 rounded-bl-lg rounded-tr-lg">
          Upcoming Event
        </div>
        <div class="flex flex-wrap">
          <img class="md:h-96 mb-5 md:mb-0 mr-0 md:mr-10" :src="event.image"/>
          <div class="mt-5 md:mt-0">
            <h3 class="text-3xl font-semibold text-gray-900 font-serif tracking-normal">{{ event.title }}</h3>
            <div class="mt-4 flex flex-wrap items-centeritems-center text-xl font-serif tracking-normal">
              <h4 class="mr-4 font-semibold text-yellow-300">{{ event.date }}</h4>
              <h4 class="text-gray-500">@{{ event.venue }}</h4>
            </div>
            <div class="mt-8">
              <p
                v-for="description in event.description" :key="description"
                class="mt-2 text-gray-500"
              >
                {{ description }}
              </p>
            </div>
            <div class="mt-5 text-xs flex flex-wrap space-x-2">
              <span
                v-for="tag in event.tags" :key="tag"
                class="p-1 rounded bg-gray-300 text-black"
              >
                {{ tag }}
              </span>
            </div>
            <div v-if="event.upcoming" class="mt-8">
              <a href="/beauty_and_the_beast/Audition_Pack.pdf" class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                Download Audition Pack
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Testimonials :id="0" />
  <CTA/>
</div>
</template>

<script>
import Testimonials from '../components/Testimonials.vue'
import CTA from '../components/CTA.vue'

const events = [
  {
    title: 'Beauty and the Beast Jr.',
    date: '15th June 2025',
    venue: 'TBC',
    image: '/images/beauty-and-the-beast-jr.png',
    tags: [
      'Titans',
      'Troubadours'
    ],
    description: [
      'We\'re excited to announce our summer 2025 production of Beauty and the Beast Jr.!',
      'Conact us for more information on joining this amazing show and becoming part of the TTB family.',
      'Auditions and rehersals starting this September.'
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
      'Troubadours'
    ],
    description: [
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
    ],
  },
  {
    title: 'Madagascar Jr.',
    date: 'June 2023',
    venue: 'The Paget Rooms',
    image: '/images/madagascar-jr.png',
    tags: [
      'Titans',
      'Troubadours',
      'Tip-Toes',
    ],
    description: [
    ],
  },
  {
    title: 'Moana Jr.',
    date: 'June 2022',
    venue: 'The Paget Rooms',
    image: '/images/moana-jr.png',
    tags: [
      'Titans',
      'Troubadours',
      'Tip-Toes',
    ],
    description: [
    ],
  },
]

export default {
  components: {
    Testimonials,
    CTA,
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