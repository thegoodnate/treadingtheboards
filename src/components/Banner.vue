<template>
<div>
  <div class="my-12 xl:mt-24">
    <router-link to="/events">
      <img class="w-full" src="/images/show-history.png" alt="Treading the boards shows" />
    </router-link>
  </div>
  <div class="mb-24 lg:mt-16 lg:mb-16 mx-auto max-w-7xl px-4">
    <div class="text-center">
      <h1 class="text-4xl font-serif tracking-normal font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span class="block xl:inline">Ready to join the fun?</span>
        <span class="block text-yellow-300 xl:inline">Book a trial session</span>
      </h1>
      <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        We understand the variation of skills, confidence and learning capacity in different children and hope that each individual thrives within our school
      </p>
      <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div class="inline-flex rounded-md shadow">
          <router-link to="/contact" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Get in touch
          </router-link>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <router-link to="/classes" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
            Class timetable
          </router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
    }
  },
}
</script>