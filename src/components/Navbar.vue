<template>
  <nav class="text-gray-800 shadow-sm p-4">
    <!-- <div class="container mx-auto flex justify-between"> -->
    <div class="flex items-center justify-center gap-4">
      <router-link to="/">
        <span class="text-lg font-bold bg-gray-700 text-white rounded-full p-1 mr-2">UT</span>
        <span class="text-xl font-bold">UDAM TITH</span>
      </router-link>
      
      <!-- <div class="flex space-x-4"> -->
        <!-- <router-link to="/" class="text-gray-600 font-bold hover:text-gray-800">Home</router-link> -->

        <router-link 
          to="/education"
          :class="{
            'hover:text-purple-800 text-purple-700': true,
            'text-purple-100 bg-purple-600': $route.path.startsWith('/education')
          }"
          class="px-3 py-1 rounded-md font-medium transition-colors"
        >
          Education
        </router-link>
        
        <router-link
          to="/skill" 
          :class="{
            'text-gray-600 hover:text-gray-900': true,
            'text-gray-900 bg-gray-200': $route.path.startsWith('/skill')
          }"
          class="px-3 py-1 rounded-md font-medium transition-colors"
        >
          Skill
        </router-link>
        
        <router-link 
          to="/project" 
          class="px-3 py-1 rounded-md font-medium transition-colors"
          :class="{
            'text-gray-600 hover:text-gray-900': true,
            'text-gray-900 bg-gray-200': $route.path.startsWith('/project')
          }"
        >
          Project
        </router-link>

        <router-link 
          to="/experience"
          class="px-3 py-1 rounded-md font-medium transition-colors"
          :class="{
            'text-gray-600 hover:text-gray-900': true,
            'text-gray-900 bg-gray-200': $route.path.startsWith('/experience')
          }"
        >
          Experience
        </router-link>
        
        <router-link 
          to="/about-me" 
          class="px-3 py-1 rounded-md font-medium transition-colors"
          :class="{
            'text-gray-600 hover:text-gray-900': true,
            'text-gray-900 bg-gray-300': $route.path.startsWith('/about-me')
          }"
        >
          About Me
        </router-link>

        <router-link 
          to="/contact" 
          class="px-3 py-1 rounded-md font-medium transition-colors"
          :class="{
            'text-gray-600 hover:text-gray-900': true,
            'text-gray-900 bg-gray-300': $route.path.startsWith('/contact')
          }"
        >
          Contact
        </router-link>
      <!-- </div> -->
    </div>
  </nav>
</template>