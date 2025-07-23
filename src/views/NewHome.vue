<template>
  <div class="bg-gradient-to-br from-blue-50 to-purple-50 h-full p-5">
    <OrbitingBubbles
      :center-image="`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`"
      center-hover-text="TITH UDAM"
      :text-bubbles="textBubbles"
      :orbit-radius="220"
      :animation-speed="30"
      :restart-animation-on-click="true"
      @bubble-click="handleBubbleClick"
    />

    <!-- Popup Sections -->
    <!-- <transition
      name="fade"
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showPopup"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div class="text-center relative">
          <button class="absolute top-2 right-3 font-semibold text-gray-600 hover:text-red-500" @click="closePopup">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-
     .004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.
     614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/>
              <path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M9.879 8.464a1 1 0 0 0-1.498 1.32l.084.095l2.12 2.12l-2.12 2.122a1 1 0 0 0 1.32 1.498l.094-.083L12 
     13.414l2.121 2.122a1 1 0 0 0 1.498-1.32l-.083-.095L13.414 12l2.122-2.121a1 1 0 0 0-1.32-1.498l-.095.083L12 10.586z"/></g>
            </svg>
          </button>

          <component 
            v-if="popupComponent"
            :is="popupComponent"
          />

          <div v-else>
            <h2 class="text-xl font-semibold mb-2">{{ selectedBubble?.text }}</h2>
            <p class="text-gray-600">More info about <strong>{{ selectedBubble?.text }}</strong> goes here.</p>
          </div>
        </div>
      </div>
    </transition> -->
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import OrbitingBubbles from '@/components/OrbitingBubble.vue'
import Contact from './Contact.vue'
import Project from './Projects.vue'
import Skill from '@/components/Skills.vue'
import Education from '@/components/Education.vue'

const router = useRouter()

const showPopup = ref(false)
const selectedBubble = ref<{ text: string } | null>(null)

const textBubbles = [
  {
    text: 'About Me',
    icon: 'fas fa-paint-brush',
    color: '#8b5cf6',
    size: 90
  },
  {
    text: 'Skill',
    icon: 'fab fa-vuejs',
    color: '#10b981',
    clickable: true
  },
  {
    text: 'Education',
    icon: 'fas fa-mobile-alt',
    color: '#3b82f6',
    clickable: true
  },
  {
    text: 'Experience',
    icon: 'fas fa-wind',
    color: '#06b6d4',
    size: 100,
    clickable: true
  },
  {
    text: 'Project',
    icon: 'fas fa-film',
    color: '#e2e8f0',
    clickable: true
  },
  {
    text: 'Contact',
    color: '#cbd5e1',
    clickable: true,
  }
]

const handleBubbleClick = (bubble) => {
  selectedBubble.value = bubble
  console.log('Bubble clicked:', bubble.text)
}
const handleBubbleClick1 = (bubble: { text: string }) => {
  switch (bubble.text) {
    case 'Contact':
      router.push('/contact')
      break
    case 'Project':
      router.push('/project')
      break
    case 'Skill':
      router.push('/skill')
      break
    case 'Education':
      router.push('/education')
      break
    default:
      alert(`Clicked: ${bubble.text}`)
  }
}
const closePopup = () => {
  showPopup.value = false
  selectedBubble.value = null
}

const popupComponent = computed(() => {
  if (!selectedBubble.value)  return null

  switch (selectedBubble.value.text) {
    case 'Contact':
      return Contact
    case 'Project':
      return Project
    case 'Skill':
      return Skill
    case 'Education':
      return Education
    default:
      return null
  }
})
</script>