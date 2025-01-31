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
          <img class="md:h-96 mb-5 md:mb-0 mr-0 md:mr-10 shadow-sm" :src="event.image"/>
          <div class="mt-5 md:mt-0 max-w-2xl">
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
    title: 'The Wedding Singer',
    date: '11th - 12th July 2025',
    venue: 'The Paget Rooms',
    image: '/images/wedding-singer.png',
    tags: [
      'Adults'
    ],
    description: [
      'After the roaring success of "Nunsense", our adult theatre companies debut, we\'re proud to anounce our second production!',
      '',
      'The Wedding Singer takes us back to a time when hair was big, greed was good, collars were up and a wedding singer might just be the coolest guy in the room.',
      'Based on the hit Adam Sandler movie, The Wedding Singer\'s sparkling new score does for the \'80s what Hairspray did for the \'60s.',
      'Just say yes to the most romantic musical in twenty years.',
    ],
    upcoming: true
  },
  {
    title: 'Beauty and the Beast Jr.',
    date: '8th June 2025',
    venue: 'The Paget Rooms',
    image: '/images/beauty-and-the-beast-jr.png',
    tags: [
      'Titans',
      'Troubadours'
    ],
    description: [
      'We\'re excited to announce our summer 2025 production of Beauty and the Beast Jr.!',
      'This is a fantastic opportunity for our Titans and Troubadours to take part in a classic tale of love and acceptance.',
      '',
      'Contact us for more information on joining this amazing show and becoming part of the TTB family.',
    ],
    upcoming: true
  },
  {
    title: 'The Bee Musical',
    date: '18th May 2025',
    venue: 'St Cyres School',
    image: '/images/bee-musical.png',
    tags: [
      'Tip-Toes'
    ],
    description: [
      'We are simply buzzing to introduce to you this delightful and educational musical for out Tip-Toe Treaders.',
      'Mr Waxworth and his busy team are eager to do their part in the world, except for one bee – Grumble Bee!',
      'However, as the colonies begin to collapse, Grumble Bee begins to understand and appreciate her value and what she can bring to keep the bees buzzing brightly!',
    ],
    upcoming: true
  },
  {
    title: 'Nunsense: The Mega Musical',
    date: '26th July 2024',
    venue: 'Bridgend Town Hall',
    image: '/images/nunsense.png',
    tags: [
      'Adults'
    ],
    description: [
      'We\'re very proud to anouce the debut of our new adult theatre company will be "Nunsense: The Mega Musical"!',
      '',
      'Nunsense follows the crazy antics of five nuns from the Little Sisters of Hoboken convent.',
      'When their cook accidentally serves up some tainted soup, 52 of the sisters are poisoned and die, leaving only five living nuns who were not at home the day of the toxic meal.',
      'When the convent’s first in charge, Reverend Mother Regina, splurges on a Playstation 5, the sisters find themselves strapped for cash, as they still have four dead nuns to bury (whose bodies are being stored in the kitchen freezer!) The nuns decide to put on a benefit performance of the musical “Grease” in order to raise the rest of the money before the health department discovers their secret.'
    ],
    upcoming: false
  },
  {
    title: 'Legally Blonde Jr.',
    date: '9th June 2024',
    venue: 'St Cyres School',
    image: '/images/legally-blonde-jr.png',
    tags: [
      'Titans',
      'Troubadours'
    ],
    description: [
      'Based on the award-winning Broadway musical and the smash hit motion picture, Legally BlondeThe Musical JR. is a fabulously fun journey of self-empowerment and expanding horizons.',
      'The show\'s instantly recognizable songs are filled with humor, wit and sass — leaving cast members and audiences alike seeing pink!'
    ],
  },
  {
    title: 'Aristocats Kids',
    date: '20th April 2024',
    venue: 'Memo Arts Centre',
    image: '/images/aristocats-kids.png',
    tags: [
      'Tip-Toes',
    ],
    description: [
      'Based on the beloved Disney animated film, and featuring a jazzy, upbeat score, Disney’s The Aristocats KIDS is a non-stop thrill ride of feline fun, complete with unbelievable twists and turns.',
      'In the heart of Paris, a kind and eccentric millionairess wills her entire estate to Duchess, her high-society cat, and her three little kittens. Laughs and adventure ensue as the greedy, bumbling butler pulls off the ultimate catnap caper. Now it\'s up to the rough-and-tumble alley cat, Thomas O\'Malley, and his band of swingin\' jazz cats to save the day.'
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