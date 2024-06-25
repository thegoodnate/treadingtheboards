<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50 mt-12">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-center lg:text-left text-3xl font-extrabold text-gray-900 sm:text-4xl font-serif tracking-normal">
        <span class="block">Ready to join the fun?</span>
        <span class="block text-yellow-300">The first class is free!</span>
      </h2>
      <div class="mt-8 flex justify-center lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <router-link to="/contact" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Book now
          </router-link>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <router-link to="/about" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
            Learn more about us
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
