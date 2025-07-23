<template>
  <div class="min-h-fit bg-gray-100">
    <!-- <Navbar /> -->
    
    <main class="container mx-auto p-5 space-y-10">
      <h1 class="text-4xl font-bold text-gray-800 bg-gray-200 p-5">Contact</h1>
      
      <div class="flex gap-4 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  
          class="icon icon-tabler icons-tabler-outline icon-tabler-phone text-gray-700">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
    
        <div class="flex flex-col text-lg">
          <p class="font-medium text-gray-800">+855 888037416</p>
          <p class="text-gray-600">Also available in telegram</p>
        </div>
      </div>

      <div class="flex gap-4 items-center text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-brand-gmail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" /><path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" /><path d="M16 4l-4 4l-4 -4" /><path d="M4 6.5l8 7.5l8 -7.5" /></svg>
        
        <div class="flex flex-col">
          <p>udamtith@gmail.com</p>
          <p>Contact me anytime</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';

</script>