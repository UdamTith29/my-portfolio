<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-3xl font-bold text-center mb-8">Vue 3 Smart Bubbles</h1>
    
    <div class="flex flex-wrap justify-center gap-6 items-center">
      <!-- Text Bubble -->
      <SmartBubble
        text="Hello!"
        :size="120"
        bg-color="#4F46E5"
        text-color="#FFFFFF"
        :bold-text="true"
        hover-text="Click me!"
        :show-overlay="true"
        :clickable="true"
        @click="handleBubbleClick('text')"
      />
      
      <!-- Image Bubble -->
      <SmartBubble
        image-src="https://picsum.photos/300/300?random=1"
        :size="150"
        border-color="#EC4899"
        :border-width="3"
        hover-text="Nature Photo"
        :show-overlay="true"
        image-classes="hover:rotate-6 transition-transform duration-500"
      />
      
      <!-- Icon Bubble with Badge -->
      <SmartBubble
        icon="fas fa-bell"
        :size="100"
        bg-color="#F59E0B"
        text-color="#FFFFFF"
        :pulse-animation="true"
        badge-text="3"
      />
      
      <!-- Custom Bubble with Slots -->
      <SmartBubble
        :size="180"
        bg-color="#10B981"
        bubble-classes="shadow-xl hover:rotate-6"
      >
        <div class="text-white text-center p-4">
          <div class="text-2xl font-bold">Custom</div>
          <div class="text-sm">Slot Content</div>
        </div>
        
        <template #hover-content>
          <div class="text-xl font-bold animate-bounce">Hover Content!</div>
        </template>
      </SmartBubble>
      
      <!-- Dynamic Bubble -->
      <SmartBubble
        :text="dynamicText"
        :size="dynamicSize"
        :bg-color="dynamicColor"
        :class="{ 'ring-4 ring-purple-500': isSelected }"
        @click="isSelected = !isSelected"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SmartBubble from '@/components/SmartBubble.vue' 

const handleBubbleClick = (type: string) => {
  alert(`${type} bubble clicked!`)
}

// Dynamic bubble example
const dynamicText = ref('Dynamic')
const dynamicSize = ref(110)
const dynamicColor = ref('#3B82F6')
const isSelected = ref(false)

// Change bubble properties every 2 seconds for demo
setInterval(() => {
  dynamicSize.value = 100 + Math.floor(Math.random() * 80)
  dynamicColor.value = `#${Math.floor(Math.random()*16777215).toString(16)}`
}, 2000)
</script>