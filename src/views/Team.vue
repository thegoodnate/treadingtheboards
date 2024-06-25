<template>
<div>
  <div class="bg-white mb-12">
    <div class="text-center md:text-left lg:text-left mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl font-serif tracking-normal">The TTB team</h2>
 
      <div class="space-y-12 lg:grid lg:grid-cols-3 mt-12 lg:gap-8 lg:space-y-0">

        <div class="lg:col-span-4">
          <ul class="space-y-12 sm:grid md:grid-cols-2 xl:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">

            <li>
              <div class="space-y-4">
                <div class="aspect-w-3 aspect-h-2">
                  <img class="object-cover shadow-lg rounded-lg" src="/images/jo.jpg" alt="" />
                </div>
                <div class="text-lg leading-6 font-medium space-y-1 font-serif tracking-normal">
                  <h3 class="text-3xl">Jo Higgins</h3>
                  <p class="text-yellow-300 text-2xl">Founder & Teacher</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">
                    After completing a GCSE in Drama, Jo opted for a National Diploma in Performing Arts: Musical Theatre, where she got a real taste for performing.
                    Opting to follow her passion, Jo took a place at Liverpool Hope University where she gained a BA Honours degree in Creative and Performing Arts.
                  </p>
                  <p class="text-gray-500 mt-5">
                    She has enjoyed many opportunities across the creative industry including playing the roles of Cinderella in pantomime, Viola in Shakespeare's Twelfth Night and Tristan in an all-female production on Kneehigh Theatre's adaptation, Tristan and Yseult as well as singing in bands of various genres.
                  </p>
                  <p class="text-gray-500 mt-5">
                    Jo has also enjoyed singing at weddings, christenings and even during two graduation ceremonies at St David's Cathedral in Pembrokeshire.
                  </p>
                  <p class="text-gray-500 mt-5">
                    Jo particularly enjoys musical theatre singing both personally and to teach. Having worked with young children for many years both in a performing arts environment and mainstream education she enjoys combining her performing arts experience with her passion for teaching.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="space-y-4">
                <div class="aspect-w-3 aspect-h-2">
                  <img class="object-cover shadow-lg rounded-lg" src="/images/shannon.jpg" alt="" />
                </div>
                <div class="text-lg leading-6 font-medium space-y-1 font-serif tracking-normal">
                  <h3 class="text-3xl">Shannon Rees</h3>
                  <p class="text-yellow-300 text-2xl">teacher</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">
                    Shannon first fell in love with dance after starting her career at the age of 5.
                  </p>
                  <p class="text-gray-500 mt-5">
                    She has had the privilege of performing on many stages with her dance company, one being the London Palladium.
                  </p>
                  <p class="text-gray-500 mt-5">
                    Shannon has experiences teaching children as she became her dance schools Dance Captain, where she had the pleasure to choreograph and teach the pupils. She loved watching not just their talent grow but their confidence too.
                  </p>
                  <p class="text-gray-500 mt-5">
                    Shannon received excellent A-Levels for Performing Arts and Dance and then went to complete 1 year at a dance school where her love for dance grew even more.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="space-y-4">
                <div class="aspect-w-3 aspect-h-2">
                  <img class="object-cover shadow-lg rounded-lg" src="/images/ela.jpg" alt="" />
                </div>
                <div class="text-lg leading-6 font-medium space-y-1 font-serif tracking-normal">
                  <h3 class="text-3xl">Ela Denley</h3>
                  <p class="text-yellow-300 text-2xl">Teacher</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">Ela has been teaching at Treading the Boards for a few years and absolutely loves it! She’s loved seeing the change in students and the confidence they gain.</p>
                  <p class="text-gray-500 mt-5">
                    Ela has a BTEC Certificate in Performing Arts and a PCET in Teaching. In her day to day life Ela teaches adults with additional learning needs at Vale Plus in Barry. She also started a drama group for adults with additional learning needs called High Voltage which is based in Barry.
                  </p>
                  <p class="text-gray-500 mt-5">
                    In her spare time she is a member of Billboard Ensemble. She has had various roles including Prince Charming and Mother Superior.
                  </p>
                  <p class="text-gray-500 mt-5">
                    Ela really enjoys spending time with her friends, exercising and getting cuddles from her dog Sadie.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Banner />
  <Testimonials :id="3" />
  <CTA/>
</div>
</template>

<script>
import Banner from '../components/Banner.vue'
import CTA from '../components/CTA.vue'
import Testimonials from '../components/Testimonials.vue'

export default {
  components: { Banner, Testimonials, CTA, }
}
</script>