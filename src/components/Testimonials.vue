<template>
  <div class="bg-white xl:py-24">
    <div class="pb-16 bg-indigo-600 lg:pb-0 lg:z-10 lg:relative">
      <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
        <div class="relative lg:-my-8">
          <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
          <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
            <div class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">

              <img class="object-cover lg:h-full lg:w-full" :src="testimony.image" alt="" />
            </div>
          </div>
        </div>
        <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
          <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
            <blockquote>
              <div>
                <svg class="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p v-for="item in testimony.message" :key="item" class="text-center md:text-left mt-3 text-xl md:text-2xl font-light italic text-white">
                  {{ item }}
                </p>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  setup() {
    return {
      testimonials: [
        {
          message: [
            "Isabelle loves her sessions with Jo and the team who are all absolutely brilliant.",
            "They have all really helped develop her confidence and skills.",
            "5 ⭐️‘s from us!",
          ],
          image: "/images/class2.jpg"
        },
        {
          message: [
            "My daughter looks forward to going to TTB every week.",
            "She absolutely loves it. The teachers are really friendly & encouraging.",
            "TTB has really boosted her confidence.",
          ],
          image: "/images/moana1.jpg"
        },
        {
          message: [
            "It’s fair to say that Xav has loved every minute of the 5 years they have spent with the Treading the boards family.",
            "From the fun of playing games to the Lamda exams they sit, there is always a smile on their face and excitement at what’s ahead.",
          ],
          image: "/images/madagascar2.jpg"
        },
        {
          message: [
            "I have seen Emily’s confidence grow so much especially when it comes to speaking in front of people which has been lovely to see.",
            "Jo and the team have been amazing and have put in so much hard work and effort producing dances and routines.",
          ],
          image: "/images/maui1.jpg"
        },
        {
          message: [
            "My daughter joined Treading the Boards aged 4, she is now 6.",
            "I asked her \"what do you like about stage school?\"",
            "and her reply was...\"everything\"!",
          ],
          image: "/images/dance1.jpg"
        },
        {
          message: [
            "We're always met with a happy smile and the support and encouragement they receive in blossoming into the theatrical person they've become will always be deeply appreciated.",
          ],
          image: "/images/madagascar1.jpg"
        }
      ]
    }
  },
  computed: {
    testimony() {
      return this.testimonials[this.id]
    }
  }

}
</script>