<script setup lang="ts">
import Navbar from './Navbar.vue';

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "Vue.js", percentage: 60, color: "bg-green-500" },
      { name: "React", percentage: 5, color: "bg-blue-500" },
      { name: "JavaScript", percentage: 70, color: "bg-yellow-500" },
      { name: "HTML/CSS", percentage: 80, color: "bg-red-500" }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", percentage: 5, color: "bg-green-600" },
      { name: "Python", percentage: 40, color: "bg-blue-600" },
      { name: "PHP", percentage: 5, color: "bg-purple-600" },
      { name: "Database", percentage: 60, color: "bg-indigo-600" }
    ]
  }
]
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar />
    
    <main class="container mx-auto py-12 px-4">
      <div class="skills-section bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-purple-800 mb-8 text-center">Technical Skills</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(category, index) in skillCategories" :key="index" class="skill-category">
            <h3 class="text-xl font-semibold text-purple-700 mb-4">{{ category.name }}</h3>
            <div class="space-y-4">
              <div v-for="skill in category.skills" :key="skill.name" class="skill-item">
                <div class="flex justify-between mb-1">
                  <span class="text-gray-700">{{ skill.name }}</span>
                  <span class="text-purple-600 font-medium">{{ skill.percentage }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    class="h-2.5 rounded-full" 
                    :class="skill.color"
                    :style="`width: ${skill.percentage}%`"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>