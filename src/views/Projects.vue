<template>
  <div class="min-h-fit bg-gray-100">
    <!-- <Navbar /> -->

    <div class="container mx-auto py-12 px-4">
      <h2 class="text-3xl font-bold mb-8">My Projects</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="project in projects" :key="project.id" class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 mb-4">{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="text-blue-600 hover:underline">View Project</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'

const projects = [
  {
    id: 1,
    title: "E-Commerce App",
    description: "Built with Vue 3 + Firebase.",
    link: "https://example.com"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "This very site!",
    link: "#"
  }
]
</script>