<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />
    
    <main class="container mx-auto py-12 px-4">
      <div class="education-section bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-purple-800 mb-8 text-center">Education & Experience</h2>
        
        <div class="relative">
          <!-- Timeline -->
          <div class="absolute left-4 md:left-1/2 h-full w-1 bg-purple-200 transform -translate-x-1/2"></div>
          
          <!-- Timeline Items -->
          <div v-for="(item, index) in timeline" :key="index" 
               :class="['mb-8 flex flex-col md:flex-row items-center', index % 2 === 0 ? 'md:flex-row-reverse' : '']">
            <div class="md:w-1/2"></div>
            <div class="z-10 flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full">
              <div class="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div :class="['md:w-1/2 p-6 rounded-xl shadow-md', index % 2 === 0 ? 'md:pr-8' : 'md:pl-8']">
              <span class="text-purple-600 font-semibold">{{ item.period }}</span>
              <h3 class="text-xl font-bold text-gray-800 mt-2">{{ item.title }}</h3>
              <p class="text-purple-700 font-medium">{{ item.institution }}</p>
              <p class="text-gray-600 mt-2">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';

const timeline = [
  {
    period: "2020 - Present",
    title: "Senior Web Developer",
    institution: "Tech Innovations Inc.",
    description: "Leading frontend development team and implementing modern web solutions."
  },
  {
    period: "2018 - 2020",
    title: "Web Developer",
    institution: "Digital Solutions Co.",
    description: "Developed and maintained client websites and web applications."
  },
  {
    period: "2014 - 2018",
    title: "Bachelor in Computer Science",
    institution: "University of Technology",
    description: "Graduated with honors. Specialized in web technologies and software engineering."
  }
]
</script>