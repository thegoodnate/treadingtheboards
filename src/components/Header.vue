<template>
  <Popover open="true" class="fixed top-0 w-full h-12 bg-white" style="z-index:9999;">
    <div class="max-w-full mx-auto px-4 sm:px-6 bg-white">
      <div class="flex justify-between items-center border-b border-gray-100 py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-18 sm:h-10" src="/images/logo.png" alt="" />
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup id="mainNav" as="nav" class="hidden md:flex space-x-10">

          <router-link to="/" class="text-base font-medium text-gray-900 hover:text-yellow-400 border-b-4 border-white"
            v-bind:class="{ 'border-yellow-300': $route.path == '/' }">
            Home
          </router-link>
          <router-link to="/about" class="text-base font-medium text-gray-900 hover:text-yellow-400 border-b-4 border-white"
            v-bind:class="{ 'border-yellow-300': $route.path == '/about' }">
            About
          </router-link>
          <router-link to="/team" class="text-base font-medium text-gray-900 hover:text-yellow-400 border-b-4 border-white"
            v-bind:class="{ 'border-yellow-300': $route.path == '/team' }">
            Team
          </router-link>
          <router-link to="/classes" class="text-base font-medium text-gray-900 hover:text-yellow-400 border-b-4 border-white"
            v-bind:class="{ 'border-yellow-300': $route.path == '/classes' }">
            Classes
          </router-link>
          <router-link to="/private" class="text-base font-medium text-gray-900 hover:text-yellow-400 border-b-4 border-white"
            v-bind:class="{ 'border-yellow-300': $route.path == '/private' }">
            Tuition
          </router-link>
          <!-- <router-link to="/showcase" class="text-base font-medium text-gray-900 hover:text-yellow-400 border-b-4 border-white"
            v-bind:class="{ 'border-yellow-300': $route.path == '/showcase' }">
            Showcase
          </router-link> -->

        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <ul class="hidden lg:flex space-x-5" role="list">
              <li>
                <a class="text-gray-400 hover:text-yellow-300" target="_BLANK" href="https://www.instagram.com/treadingtheboardsvog">
                  <span class="sr-only">Instagram</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" aria-hidden="true">
                    <path d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' fill="currentColor" />
                  </svg>
                </a>
              </li>
            </ul>
          <router-link to="/contact" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Contact us
          </router-link>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-end">
              <div class="-mr-2">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <PopoverButton>
                <nav class="grid gap-y-8">
                  <router-link :to="item.href" v-for="item in options" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <component :is="item.icon" class="flex-shrink-0 h-6 w-6" :class="item.color" aria-hidden="true" />
                    <span class="ml-3 text-base font-medium text-gray-900">
                      {{ item.name }}
                    </span>
                  </router-link>
                </nav>
              </PopoverButton>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  CalendarIcon,
  MenuIcon,
  HomeIcon,
  HeartIcon,
  UserGroupIcon,
  XIcon,
  ChatAltIcon,
  PhotographIcon,
  UserAddIcon,
} from '@heroicons/vue/outline'

import { ChevronDownIcon } from '@heroicons/vue/solid'

const options = [
  {
    name: 'Home',
    color: 'text-gray-400',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'About us',
    color: 'text-red-600',
    href: '/about',
    icon: HeartIcon,
  },
  {
    name: 'The TTB team',
    color: 'text-purple-600',
    href: '/team',
    icon: UserGroupIcon,
  },
  { name: 'Classes', href: '/classes', color: 'text-green-400', icon: CalendarIcon },
  { name: 'Private tuition', href: '/private', color: 'text-pink-500', icon: UserAddIcon },
  // {
  //   name: 'Showcase',
  //   color: 'text-blue-500',
  //   href: '/showcase',
  //   icon: PhotographIcon,
  // },
  {
    name: 'Contact us',
    color: 'text-yellow-300',
    href: 'contact',
    icon: ChatAltIcon,
  },
]

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
    ChatAltIcon,
    PhotographIcon,
    UserGroupIcon,
    CalendarIcon,
    HeartIcon,
    HomeIcon,
    UserAddIcon,
  },
  setup() {
    return {
      options,
    }
  },
}
</script>