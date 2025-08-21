<template>
  <div 
    ref="bubbleRef"
    :class="[
      bubbleClasses,
      hoverEffect ? 'hover:scale-105 hover:shadow-xl' : '',
      clickable ? 'cursor-pointer' : '',
      pulseAnimation ? 'animate-pulse' : ''
    ]"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: bgColor,
      color: textColor,
      border: `${borderWidth}px solid ${borderColor}`,
      ...customStyles
    }"
    class="relative rounded-full flex items-center justify-center overflow-hidden transition-all duration-300"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <!-- Image Content -->
    <img 
      v-if="imageSrc"
      :src="imageSrc"
      :alt="altText"
      :class="imageClasses"
      class="w-full h-full object-cover"
    />
    
    <!-- Text Content -->
    <div 
      v-else-if="text"
      :class="{
        'font-bold': boldText,
        'italic': italicText,
        'uppercase': uppercaseText
      }"
      class="text-center p-4"
    >
      {{ text }}
    </div>
    
    <!-- Icon Content -->
    <div 
      v-else-if="icon"
      :class="icon"
      class="text-3xl"
    />
    
    <!-- Default Slot Content -->
    <slot v-else />
    
    <!-- Hover Overlay -->
    <div 
      v-if="showOverlay && isHovered"
      :class="overlayClasses"
      class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white"
    >
      <slot name="hover-content">
        <span v-if="hoverText">{{ hoverText }}</span>
      </slot>
    </div>
    
    <!-- Badge -->
    <div 
      v-if="badgeText && showBadge"
      class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
    >
      {{ badgeText }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  // Content props
  text?: string
  imageSrc?: string
  icon?: string
  altText?: string
  
  // Appearance props
  size?: number
  bgColor?: string
  textColor?: string
  borderColor?: string
  borderWidth?: number
  boldText?: boolean
  italicText?: boolean
  uppercaseText?: boolean
  bubbleClasses?: string
  imageClasses?: string
  overlayClasses?: string
  customStyles?: Record<string, string>
  
  // Behavior props
  hoverEffect?: boolean
  showOverlay?: boolean
  hoverText?: string
  clickable?: boolean
  pulseAnimation?: boolean
  
  // Badge props
  badgeText?: string
  showBadge?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  altText: 'Bubble image',
  size: 120,
  bgColor: '#ffffff',
  textColor: '#000000',
  borderColor: '#ffffff',
  borderWidth: 4,
  bubbleClasses: 'shadow-lg',
  hoverEffect: true,
  showBadge: true
})

const emit = defineEmits<{
  (e: 'click'): void
  (e: 'hover', state: boolean): void
}>()

const bubbleRef = ref<HTMLElement | null>(null)
const isHovered = ref(false)

const handleMouseEnter = () => {
  isHovered.value = true
  emit('hover', true)
}

const handleMouseLeave = () => {
  isHovered.value = false
  emit('hover', false)
}

const handleClick = () => {
  if (props.clickable) {
    emit('click')
  }
}

// Expose bubble element reference if needed
defineExpose({
  bubbleRef
})
</script>