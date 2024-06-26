<template>
<div>
  <div class="relative bg-white mb-24">
    <div class="lg:absolute lg:inset-0">
      <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
        <img class="h-56 w-full object-cover lg:absolute lg:h-full filter grayscale" src="/images/about.png" alt="" />
      </div>
    </div>
    <div class="relative pt-12 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
      <div class="lg:col-start-2 lg:pl-8">
        <div class="text-center md:text-left text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
          <h2 class="leading-6 font-semibold font-serif tracking-normal text-4xl">About us</h2>
          <div class="text-lg text-gray-500 flex flex-col gap-8">
            <p class="mt-8">
              Treading the Boards is an independent performing arts school based in the Vale of Glamorgan.
            </p>
            <p>
              Since its establishment in 2016 our TTB family and has gone from strength to strength.
              We’re here to provide a fun, nurturing and educational environment for young people in the disciplines of Drama, Dance and Singing.
            </p>
            <p>
              We believe the performing arts are for everybody and it’s our mission to ensure our students
              find their place within them, and as such, we don’t audition to become part of the school.
            </p>
            <p>
              We understand the variation of skills, confidence and learning capacity in different children
              and hope that each individual thrives within our school.
            </p>
            <p>
              <router-link class="text-indigo-500 hover:text-indigo-700" to="/team">Meet the team</router-link> to learn a bit about the friendly faces you'll see at Treading the Boards.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Testimonials :id="1" />
  <CTA/>
</div>
</template>

<script setup>
import CTA from '../components/CTA.vue'
import Testimonials from '../components/Testimonials.vue'
</script>

<style>
</style>