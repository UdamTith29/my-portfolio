<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />
    
    <main class="container mx-auto py-12 px-4">
      <h1 class="text-6xl text-gray-800 font-bold mb-6">WEB DEVELOPER</h1>
      
      <div class="sm:flex sm:space-y-5">
        <div>
          <p class="text-xl text-gray-600 mb-8">A passionate web developer building modern website and apps.</p>
        
          <div class="space-x-2">
            <router-link to="" class="bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-gray-700">
              Download CV
            </router-link>
      
            <router-link to="/contact" class="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
              My Contact
            </router-link>
          </div>
        </div>

        <div class="bg-green-300 p-4 rounded-full">
          <div class="bg-red-300 p-8 rounded-full"></div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'

</script>