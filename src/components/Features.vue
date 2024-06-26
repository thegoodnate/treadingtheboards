<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div id="features" class="pt-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-normal text-gray-900 sm:text-4xl font-serif">
          Acting, Singing, Dancing and more
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 mx-auto text-center">
          <span class="block">Our classes offer a wide range of development opportunities in performing arts</span>
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-serif tracking-normal text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <img class="w-full my-24" src="/images/show-history.png" alt="Treading the boards shows" />
  </div>
</template>

<script>
import { AcademicCapIcon, SparklesIcon, MusicNoteIcon, MicrophoneIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Acting',
    description:
      'Acting workshops consist of age-appropriate exercises in character development, devising skills and an introduction to technical theatre. Students will also get the opportunity to take the industry recognised LAMDA examinations',
    icon: SparklesIcon,
  },
  {
    name: 'Singing',
    description:
      'We teach a range of vocal exercises helping children warm-up for singing and spoken performance. Our students focus on rhythm, pitch and quality. As they develop they will have the opportunity for solos, group performances and harmony work',
    icon: MusicNoteIcon,
  },
  {
    name: 'Performances',
    description:
      'Performances provide the perfect opportunity to showcase the development of each of our students and they really do get such a buzz from heading out onto the stage. We host a number of different performances throughout the year including, full-blown musical productions, showcases and Christmas concerts',
    icon: MicrophoneIcon,
  },
  {
    name: 'Qualifications',
    description:
      'We really believe in working on fundamentals to develop each student. Working towards LAMDA performance examinations lets each individual identify, explore and improve their own performance ability',
    icon: AcademicCapIcon,
  },
]

export default {
  setup() {
    return {
      features,
    }
  },
}
</script>