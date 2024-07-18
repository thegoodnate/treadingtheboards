<template>
<div class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
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
</template>

<script>

const event = {
  title: 'Beauty and the Beast Jr.',
  date: '15th June 2025',
  venue: 'Wales Millenium Centre\'s Dance House',
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
}

export default {
  setup() {
    return {
      event,
    }
  },
}
</script>