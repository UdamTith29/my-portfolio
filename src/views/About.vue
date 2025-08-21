<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />
    
    <main class="container mx-auto py-12 px-4">
      <div class="about-section bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="w-48 h-48 flex-shrink-0">
            <img 
              :src="`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`" 
              alt="Tith Udam" 
              class="rounded-full w-full h-full object-cover border-4 border-purple-200 shadow-md"
            >
          </div>

          <div class="flex-1">
            <h1 class="text-4xl font-bold text-purple-800 mb-4">TITH UDAM</h1>
            <h2 class="text-xl text-purple-600 mb-6 font-semibold">Full Stack Developer</h2>
            <p class="text-gray-700 text-lg leading-relaxed">
              Passionate developer with expertise in modern web technologies. 
              I create responsive, user-friendly applications with clean code 
              and intuitive interfaces. Let's build something amazing together.
            </p>
            <div class="mt-6 flex gap-4">
              <button class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all">
                Download CV
              </button>
              <!-- <button class="border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-2 rounded-full transition-all">
                Contact Me
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
</script>