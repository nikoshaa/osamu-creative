<template>
  <header
    class="fixed inset-x-0 top-0 z-30 bg-slate-950/80 backdrop-blur border-b border-slate-800"
  >
    <nav
      class="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4"
    >
      <!-- LOGO -->
      <a href="#home" class="flex items-center gap-2 h-full">
        <img
          src="/osamu-logo-horizontal.png"
          alt="Osamu Creative Logo"
          class="h-8 md:h-9 w-auto object-contain"
        />
      </a>

      <!-- MOBILE TOGGLE -->
      <button
        @click="toggleMenu"
        class="md:hidden text-slate-100 text-2xl focus:outline-none"
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <!-- DESKTOP MENU -->
      <div
        class="hidden md:flex items-center gap-7 text-[15px] md:text-[16px] font-medium text-slate-200"
      >
        <a href="#home" class="hover:text-indigo-400 transition">
          {{ t('nav.home') }}
        </a>
        <a href="#services" class="hover:text-indigo-400 transition">
          {{ t('nav.services') }}
        </a>
        <a href="#process" class="hover:text-indigo-400 transition">
          {{ t('nav.process') }}
        </a>
        <a href="#portfolio" class="hover:text-indigo-400 transition">
          {{ t('nav.portfolio') }}
        </a>
        <a href="#expertise" class="hover:text-indigo-400 transition">
          {{ t('nav.expertise') }}
        </a>
        <a href="#about" class="hover:text-indigo-400 transition">
          {{ t('nav.about') }}
        </a>
        <a href="#contact" class="hover:text-indigo-400 transition">
          {{ t('nav.contact') }}
        </a>

        <!-- LANGUAGE SWITCHER -->
        <select
          v-model="localeRef"
          class="bg-slate-900 text-white rounded px-2 py-1 text-sm"
        >
          <option value="en">EN</option>
          <option value="id">ID</option>
        </select>
      </div>

      <!-- CTA DESKTOP -->
      <a
        href="#contact"
        class="hidden md:inline-flex items-center rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-indigo-400 transition"
      >
        {{ t('nav.cta_free_consult') }}
      </a>
    </nav>

    <!-- MOBILE MENU -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden bg-slate-950/95 backdrop-blur border-t border-slate-800 px-4 py-4 space-y-3 text-base font-medium text-slate-100"
      >
        <a @click="closeMenu" href="#home" class="block hover:text-indigo-400">
          {{ t('nav.home') }}
        </a>
        <a @click="closeMenu" href="#services" class="block hover:text-indigo-400">
          {{ t('nav.services') }}
        </a>
        <a @click="closeMenu" href="#process" class="block hover:text-indigo-400">
          {{ t('nav.process') }}
        </a>
        <a @click="closeMenu" href="#portfolio" class="block hover:text-indigo-400">
          {{ t('nav.portfolio') }}
        </a>
        <a @click="closeMenu" href="#expertise" class="block hover:text-indigo-400">
          {{ t('nav.expertise') }}
        </a>
        <a @click="closeMenu" href="#about" class="block hover:text-indigo-400">
          {{ t('nav.about') }}
        </a>
        <a @click="closeMenu" href="#contact" class="block hover:text-indigo-400">
          {{ t('nav.contact') }}
        </a>

        <a
          href="#contact"
          class="block text-center rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-indigo-400 transition"
        >
          {{ t('nav.cta_free_consult') }}
        </a>

        <div class="pt-2">
          <select
            v-model="localeRef"
            class="bg-slate-900 text-white rounded px-2 py-1 text-sm w-full"
          >
            <option value="en">EN</option>
            <option value="id">ID</option>
          </select>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const isOpen = ref(false)

const { t, locale } = useI18n()

const localeRef = computed({
  get: () => locale.value as 'en' | 'id',
  set: (val: 'en' | 'id') => {
    locale.value = val
  }
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
