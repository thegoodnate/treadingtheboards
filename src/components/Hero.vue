<template>
  <div class="relative bg-white overflow-hidden">
    <div class="mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main class="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 lg:pt-20 lg:px-8 xl:pt-28">
          <div class="text-center lg:text-left">
            <h1 class="text-4xl text-gray-900 sm:text-5xl md:text-6xl mb-8">
              <div class="font-serif flex flex-row -ml-2 lg:-ml-4 items-center justify-center lg:justify-start">
                <div class="flex flex-col justify-center lg:items-start lg:justify-start tracking-tight md:tracking-tighter">
                  <span class="text-gray-900">Treading</span>
                  <div>
                    <span class="text-gray-900">the</span>
                    <span class="ml-3 text-yellow-300">Boards</span>
                  </div>
                </div>
              </div>
            </h1>
            <p class="mt-3 text-base text-gray-500 mt-5 sm:text-lg max-w-xl mx-auto md:text-xl lg:mx-0">
              Welcome to Treading the Boards!
            </p>
            <p class="mt-3 text-base text-gray-500 mt-5 sm:text-lg max-w-xl mx-auto md:text-xl lg:mx-0">
              We are a performing arts school for children of all ages based in the Vale of Glamorgan
            </p>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/xmas_cracker.png" alt="Treading the boards cristmas cracker" />
    </div>
  </div>
  <div class="text-center mb-5">
    <a href="https://www.ticketsource.co.uk/treading-the-boards-theatre-company/t-jzdaxod" target="_blank"
      class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
      Book Tickets
    </a>
  </div>
</template>

<script>
import { ChatAltIcon, ChevronDownIcon, } from '@heroicons/vue/outline'

export default {
  components: {
    ChatAltIcon,
    ChevronDownIcon,
  },
  setup() {
    return {
    }
  },
}
</script>