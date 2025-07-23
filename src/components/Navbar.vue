<template>
  <nav class="text-gray-800 shadow-sm p-4">
    <div class="container mx-auto flex justify-between">
      <router-link to="/">
        <span class="text-lg font-bold bg-gray-700 text-white rounded-full p-1 mr-2">UT</span>
        <span class="text-xl font-bold">UDAM TITH</span>
      </router-link>
      
      <div class="flex space-x-4">
        <router-link to="/" class="text-gray-600 font-bold hover:text-gray-800">Home</router-link>

        <router-link to="/projects" class="text-gray-600 font-bold hover:text-gray-800">Projects</router-link>
        
        <router-link to="/about" class="text-gray-600 font-bold hover:text-gray-800">About</router-link>
      </div>
    </div>
  </nav>
</template>
