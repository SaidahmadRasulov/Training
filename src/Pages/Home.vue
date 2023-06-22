<script setup >
import { defineProps } from 'vue';

const props = defineProps({
  state: {
    type: Array,
    required: true
  }
});

console.log(props)
</script>

<template>
  <div class="sections flex justify-between">
    <section class="py-4 left__section w-[20%] border-gray border-r-2 h-[100vh] sm:hidden lg:block">
      <div class="container">
        <h1 class="uppercase text-gray font-bold text-center mb-4">Main</h1>
        <ul class="text-gray h-[250px] mx-auto w-4/5 pl-32">
          <li class="text-gray-500 mb-4 text-lg">Articles</li>
          <li class="text-gray-500 mb-4 text-lg">Jobs Board</li>
          <li class="text-gray-500 mb-4 text-lg">Courses</li>
          <li class="text-gray-500 mb-4 text-lg">Experts</li>
          <li class="text-gray-500 text-lg">Events</li>
        </ul>
        <h1 class="uppercase text-gray font-bold text-center mb-3">Companies</h1>
        <ul class="flex flex-col items-center justify-center gap-4">
          <li class="flex items-center justify-center gap-4">
            <img src="../assets/logotip-1.png" class="w-30" alt="">
            Wrike
          </li>
          <li class="flex items-center justify-center gap-4">
            <img src="../assets/logotip-2.png" class="w-30" alt="">
            Miro
          </li>
        </ul>
      </div>
      <div class="footer w-4/12 mx-auto mt-10">
        <div class="footer__title uppercase font-bold text-gray">
          <h1>Contacts</h1>
        </div>
        <ul>
          <li>info@dgtlcast.com</li>
          <ul class="flex items-center gap-2 w-full my-5">
            <li class="uppercase p-1 border-2 rounded-md border-gray font-bold text-gray">fb</li>
            <li class="p-1 border-2 rounded-md border-gray">
              <i class="bx bxl-instagram"></i>
            </li>
            <li class="p-1 border-2 rounded-md border-gray">
              <i class="bx bxl-twitter"></i>
            </li>
            <li class="p-1 border-2 rounded-md border-gray">
              <i class="bx bxl-linkedin"></i>
            </li>
          </ul>
          <li>Privacy policy</li>
          <li>© Dgtlcast, 2022</li>
        </ul>
      </div>
    </section>
    <section class="main__section lg:w-[60%]">
      <div class="border-b-2 border-gray sm:hidden md:block">
        <ul class="main__nav md:flex mx-4 md:items-center md:gap-5 md:py-4 text-lg font-bold text-lightGray">
          <li class="main__nav_item">Articles</li>
          <li class="main__nav_item">Jobs</li>
          <li class="main__nav_item relative text-orange">
            Courses
            <div class="wall bg-orange w-[100%] bottom-[-18px] h-[3px] absolute left-0"></div>
          </li>
          
        </ul>
      </div>
      <div class="media__title w-[80%] mx-auto sm:block lg:hidden">
        <h1 class="text-[26px] font-bold">Courses</h1>
        <p class="text-lightGray">Upgrade your skills, learn new ones, and stay on top of IT industry trends. Choose a course among current topics: product, marketing, development, analytics, strategy, AI, and more.</p>
      </div>
      <div class="main__content p-5">
        <div class="cards flex flex-wrap gap-12 justify-center">
          <div class="card bg-white h-80 sm:w-[100%] md:w-[45%]" v-for="item in props.state" :key="item.id">
            <div class="card__header bg-cover bg-no-repeat relative">
              <img src="../assets/item.png" class="w-full" alt="">
              <img src="../assets/soon.png" alt="" class="absolute right-4 top-2">
            </div>
            
            <div class="card__body px-2">
              <div class="body__intro">
                <div class="flex justify-between">
                  <p class="text-lightGray">{{ item.title }}</p>
                  <div class="text-lightGray flex gap-5">
                    <p>{{ item.level }}</p>
                    <p>{{ item.date }}</p>
                  </div>
                </div>
              </div>
              <div class="body__title font-[600] mb-4">
                <h1 class="text-lg">Tech/Digital transformation</h1>
                <p class="text-md">{{ item.desc }}</p>
              </div>
            </div>
            <div class="card__footer px-4">
              <div class="flex justify-between">
                <div class="button w-3/4">
                  <button class="w-full text-white rounded-md bg-indigo">Enroll</button>
                </div>
                <div class="flex gap-5 w-20">
                  <img class="w-1/2 object-cover" src="../assets/share.png" alt="">
                  <img class="w-1/2 object-cover" src="../assets/bookmark-2.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="py-4 h-[100vh] border-gray border-l-2 w-[20%] px-5 sm:hidden lg:block">
      <ul class="general__groups">
        <li class="uppercase font-bold">Companies</li>
        <ul class="general__group my-4">
          <li class="flex items-center gap-4 mb-4">
            <img src="../assets/logotip-1.png" alt="">
            <span class="text-lg">Wrike</span>
          </li>
          <li class="flex items-center gap-4">
            <img src="../assets/logotip-2.png" alt="">
            <span class="text-lg">Miro</span>
          </li>
        </ul>
        <li class="uppercase font-bold">Network</li>
        <ul class="general__group my-4">
          <li class="flex items-center gap-4 mb-4">
            <img src="../assets/user.png" alt="">
            <span class="text-lg">Muhamad Abdula Djon</span>
          </li>
          <li class="flex items-center gap-4">
            <img src="../assets/user.png" alt="">
            <span class="text-lg">Muhamad Abdula Djon</span>
          </li>
        </ul>
        <li class="uppercase font-bold">speakers</li>
        <ul class="general__group my-4">
          <li class="flex items-center gap-4 mb-4">
            <img src="../assets/user.png" alt="">
            <span class="text-lg">Muhamad Abdula Djon</span>
          </li>
          <li class="flex items-center gap-4">
            <img src="../assets/user.png" alt="">
            <span class="text-lg">Muhamad Abdula Djon</span>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
}
</script>
<style>
    
</style>