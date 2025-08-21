<template>
  <div class="relative flex items-center justify-center min-h-[550px]">
    <!-- Central Image Bubble -->
    <div 
      class="absolute z-10 rounded-full border-8 border-white shadow-xl transition-all duration-500 hover:scale-110"
      :style="{
        width: `${centerSize}px`,
        height: `${centerSize}px`,
        backgroundColor: centerBgColor
      }"
      @click="handleCenterClick"
      @mouseenter="centerHovered = true"
      @mouseleave="centerHovered = false"
    >
      <img 
        v-if="centerImage"
        :src="centerImage"
        :alt="centerAltText"
        class="w-full h-full object-cover rounded-full"
      />
      <div 
        v-else
        class="w-full h-full flex items-center justify-center text-white text-2xl font-bold"
      >
        {{ centerText }}
      </div>
      
      <!-- Center Bubble Hover Effect -->
      <div 
        v-if="centerHovered"
        class="absolute inset-0 bg-black bg-opacity-30 rounded-full flex items-center justify-center text-gray-200 font-bold"
      >
        <div class="flex flex-col">
          <span>{{ centerHoverText }}</span>
          <span class="text-right text-xl text-white">{{ hoverDescription }}</span>
        </div>
      </div>
    </div>

    <!-- Orbiting Text Bubbles -->
    <div 
      v-for="(bubble, index) in textBubbles"
      :key="`bubble-${animationKey}-${index}`"
      class="absolute rounded-full bg-white border-2 shadow-lg flex items-center justify-center transition-all duration-1000"
      :class="{
        'hover:scale-125 hover:shadow-xl z-20': true,
        'cursor-pointer': bubble.clickable
      }"
      :style="getBubbleStyle(index)"
      @mouseenter="setActiveBubble(index)"
      @mouseleave="activeBubble = null"
      @click="handleBubbleClick(bubble, index)"
    >
      <div class="p-3 text-center">
        <div v-if="bubble.icon" class="text-xl mb-1" :class="bubble.icon"></div>
        <div class="text-sm font-medium">{{ bubble.text }}</div>
      </div>
      
      <!-- Connecting Line -->
      <div 
        v-if="showConnectorLines"
        class="absolute h-[1px] bg-gray-300 origin-left"
        :style="getConnectorStyle(index)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

interface TextBubble {
  text: string
  icon?: string
  color?: string
  size?: number
  clickable?: boolean
  onClick?: () => void
}

const props = withDefaults(defineProps<{
  centerImage?: string
  centerText?: string
  centerAltText?: string
  centerHoverText?: string
  hoverDescription?: string
  centerSize?: number
  centerBgColor?: string
  textBubbles: TextBubble[]
  minRadius?: number
  maxRadius?: number
  showConnectorLines?: boolean
  pulseSpeed?: number
  rotationSpeed?: number
  centerClickable?: boolean
  onCenterClick?: () => void
}>(), {
  centerText: 'Center',
  centerAltText: 'Central bubble',
  centerHoverText: 'View',
  hoverDescription: 'ITer',
  centerSize: 150,
  centerBgColor: '#3b82f6',
  minRadius: 80,
  maxRadius: 200,
  showConnectorLines: true,
  pulseSpeed: 0.5,
  rotationSpeed: 0.2,
  centerClickable: true
})

const emit = defineEmits<{
  (e: 'bubble-click', bubble: TextBubble): void
  (e: 'center-click'): void
}>()

const centerHovered = ref(false)
const activeBubble = ref<number | null>(null)
const angleOffset = ref(0)
const currentRadius = ref(props.maxRadius)
const isPulsingIn = ref(true)
const animationId = ref<number>()
const animationKey = ref(0)
const isAnimating = ref(true)

const bubbleSizes = computed(() => 
  props.textBubbles.map(b => b.size || 80)
)

const getBubbleStyle = (index: number) => {
  const angle = (index * (360 / props.textBubbles.length) + angleOffset.value) % 360
  const rad = (angle * Math.PI) / 180
  const x = Math.cos(rad) * currentRadius.value
  const y = Math.sin(rad) * currentRadius.value
  
  return {
    width: `${bubbleSizes.value[index]}px`,
    height: `${bubbleSizes.value[index]}px`,
    backgroundColor: props.textBubbles[index].color || '#ffffff',
    borderColor: props.textBubbles[index].color ? `${props.textBubbles[index].color}80` : '#e5e7eb',
    transform: `translate(${x}px, ${y}px)`,
    opacity: activeBubble.value === null || activeBubble.value === index ? 1 : 0.7,
    zIndex: activeBubble.value === index ? 30 : 20
  }
}

const getConnectorStyle = (index: number) => {
  const angle = (index * (360 / props.textBubbles.length) + angleOffset.value) % 360
  const rad = (angle * Math.PI) / 180
  const x = Math.cos(rad) * currentRadius.value / 2
  const y = Math.sin(rad) * currentRadius.value / 2
  const length = Math.sqrt(x * x + y * y)
  const rotation = Math.atan2(y, x) * (180 / Math.PI)
  
  return {
    width: `${length}px`,
    left: `${props.centerSize / 2}px`,
    top: `${props.centerSize / 2}px`,
    transform: `rotate(${rotation}deg)`
  }
}

const setActiveBubble = (index: number) => {
  activeBubble.value = index
}

const updateAnimation = () => {
  // Update pulsing radius
  if (isPulsingIn.value) {
    currentRadius.value -= props.pulseSpeed
    if (currentRadius.value <= props.minRadius) {
      isPulsingIn.value = false
    }
  } else {
    currentRadius.value += props.pulseSpeed
    if (currentRadius.value >= props.maxRadius) {
      isPulsingIn.value = true
    }
  }
  
  // Update rotation
  angleOffset.value = (angleOffset.value + props.rotationSpeed) % 360
  
  if (isAnimating.value) {
    animationId.value = requestAnimationFrame(updateAnimation)
  }
}

const handleBubbleClick = (bubble: TextBubble, index: number) => {
  if (bubble.clickable) {
    emit('bubble-click', bubble)
    bubble.onClick?.()
    
    // Immediately reset to max radius
    currentRadius.value = props.maxRadius
    isPulsingIn.value = true
    animationKey.value++
    
    // Ensure animation continues
    if (!isAnimating.value) {
      isAnimating.value = true
      animationId.value = requestAnimationFrame(updateAnimation)
    }
  }
}

const handleCenterClick = () => {
  if (props.centerClickable) {
    emit('center-click')
    props.onCenterClick?.()

    // currentRadius.value = props.maxRadius
    // isPulsingIn.value = true
    // animationKey.value++
  }
}

onMounted(() => {
  currentRadius.value = props.maxRadius
  animationId.value = requestAnimationFrame(updateAnimation)
})

onBeforeUnmount(() => {
  isAnimating.value = false
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
  }
})
</script>

<style scoped>
/* Add smooth transitions */
.bubble-transition {
  transition: transform 0.5s ease, opacity 0.3s ease;
}
</style>