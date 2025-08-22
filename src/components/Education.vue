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
               :class="['mb-8 flex flex-col md:flex-row items-center', !item.experience ? 'md:flex-row-reverse' : '']">
            <div class="md:w-1/2"></div>
            <div class="z-10 flex items-center justify-center w-8 h-8 bg-purple-600 rounded-full">
              <div class="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div :class="['md:w-1/2 p-6 rounded-xl shadow-md', item.experience ? 'md:pr-8' : 'md:pl-8']">
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
    experience: true,
    period: "AUG 2025 - Present",
    title: "Business Development Officer",
    institution: "DRSB Express",
    description: "Supporting sale team to reach the target."
  },
  {
    experience: true,
    period: "JAN 2025 - JUN 2025",
    title: "Web Developer",
    institution: "EZZE Technology",
    description: "Developed and maintained client websites and web applications."
  },
  {
    period: "2020 - 2024",
    title: "Bachelor in Software Engineering",
    institution: "Harbin Institute of Technology (HIT)",
    description: "Graduated with honors. Specialized in web technologies and software engineering."
  },
  {
    period: "2019 - 2020",
    title: "Chinese Language (HSK 4)",
    institution: "Northeast Normal University (NENU)",
    description: "Graduated with honors. Specialized in Mandarin Chinese."
  }
]
</script>