<template>
  <section
    id="clients"
    class="bg-slate-950 scroll-mt-24"
  >
    <div class="max-w-6xl mx-auto px-4 py-14 md:py-20">
      <p
        class="text-[12px] md:text-[13px] uppercase tracking-[0.22em] text-indigo-300/70 text-center mb-8"
      >
        {{ t('clients.subtitle') }}
      </p>

      <div
        class="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm md:text-base text-slate-300/80 font-medium"
      >
        <span class="uppercase tracking-[0.22em] hover:text-indigo-300 transition">
          {{ t('clients.healthcare') }}
        </span>
        <span class="uppercase tracking-[0.22em] hover:text-indigo-300 transition">
          {{ t('clients.fmcg') }}
        </span>
        <span class="uppercase tracking-[0.22em] hover:text-indigo-300 transition">
          {{ t('clients.saas_b2b') }}
        </span>
        <span class="uppercase tracking-[0.22em] hover:text-indigo-300 transition">
          {{ t('clients.edutech') }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
