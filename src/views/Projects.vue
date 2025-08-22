<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />
    
    <main class="container mx-auto py-12 px-4">
      <div class="projects-section bg-white rounded-2xl shadow-lg p-8 max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-purple-800 mb-8 text-center">Featured Projects</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(project, index) in projects" :key="index" 
               class="project-card bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div class="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative overflow-hidden">
              <div class="absolute inset-0 bg-black bg-opacity-20"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-xl font-bold">{{ project.title }}</h3>
                <p class="text-sm">{{ project.category }}</p>
              </div>
            </div>
            <div class="p-5">
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="(tech, i) in project.technologies" :key="i" 
                      class="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                  {{ tech }}
                </span>
              </div>
              <div class="flex justify-between">
                <a href="#" class="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                  View Project
                  <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-purple-600">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "A full-featured online shopping platform with payment integration.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "Task Management App",
    category: "Productivity Tool",
    description: "Collaborative task management application for teams.",
    technologies: ["React", "Firebase", "Tailwind CSS"]
  },
  {
    title: "Portfolio Website",
    category: "Personal Project",
    description: "Interactive portfolio website with animated elements.",
    technologies: ["Vue.js", "GSAP", "Tailwind CSS"]
  },
]
</script>