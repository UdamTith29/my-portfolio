<template>
  <nav class="navbar bg-white shadow-md py-4 px-6 sticky top-0 z-40">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo/Name -->
      <div class="flex items-center space-x-2">
        <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-400">
          <img
            :src="profileImage"
            alt="Tith Udam"
            class="w-full h-full object-cover"
          >
        </div>
        <span class="text-xl font-bold text-purple-700">TITH UDAM</span>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-8">
        <router-link
          v-for="(item, index) in navItems" 
          :key="index"
          :to="item.path" 
          class="text-gray-700 hover:text-purple-600 font-medium transition-colors"
          :class="{ 'text-purple-600': $route.path === item.path }"
        >
          {{ item.text }}
        </router-link>
      </div>
      
      <!-- Mobile menu button -->
      <button class="md:hidden text-gray-700" @click="toggleMobileMenu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
          />
        </svg>
      </button>
    </div>
    
    <!-- Mobile menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-64"
      leave-from-class="opacity-100 max-h-64"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white px-4 pb-4 pt-2">
        <div class="flex flex-col space-y-3">
          <router-link
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.path"
            class="text-gray-700 hover:text-purple-600 font-medium py-2 transition-colors"
            :class="{ 'text-purple-600': $route.path === item.path }"
            @click="closeMobileMenu"
          >
            {{ item.text }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const profileImage = `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`

const navItems = [
  { text: 'Home', path: '/' },
  { text: 'About Me', path: '/about-me' },
  { text: 'Skills', path: '/skill' },
  { text: 'Education', path: '/education' },
  // { text: 'Experience', path: '/experience' },
  { text: 'Projects', path: '/project' },
  { text: 'Contact', path: '/contact' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.9);
}

.router-link-active {
  @apply text-purple-600;
}
</style>