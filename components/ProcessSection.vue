<template>
  <section
    id="process"
    class="bg-slate-950 scroll-mt-24"
  >
    <div class="max-w-6xl mx-auto px-4 py-14 md:py-16">
      <div
        class="mb-10 flex flex-col md:flex-row md:justify-between md:items-end gap-4"
      >
        <div>
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-50 mb-2">
            {{ t('process.title') }}
          </h2>
          <p class="text-sm md:text-base text-slate-400 max-w-xl">
            {{ t('process.subtitle') }}
          </p>
        </div>

        <p class="text-xs text-slate-500">
          {{ t('process.note') }}
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-4 text-sm">
        <!-- STEP 1 -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-sm h-full"
        >
          <p
            class="text-[11px] text-indigo-400 uppercase tracking-[0.16em] mb-1 font-semibold"
          >
            {{ t('process.phase1_badge') }}
          </p>
          <h3 class="font-semibold text-slate-50 mb-1 text-sm md:text-base">
            {{ t('process.phase1_title') }}
          </h3>
          <p class="text-xs text-slate-500 mb-2">
            {{ t('process.phase1_duration') }}
          </p>
          <p class="text-xs md:text-sm text-slate-300">
            {{ t('process.phase1_desc') }}
          </p>
        </div>

        <!-- STEP 2 -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-sm h-full"
        >
          <p
            class="text-[11px] text-indigo-400 uppercase tracking-[0.16em] mb-1 font-semibold"
          >
            {{ t('process.phase2_badge') }}
          </p>
          <h3 class="font-semibold text-slate-50 mb-1 text-sm md:text-base">
            {{ t('process.phase2_title') }}
          </h3>
          <p class="text-xs text-slate-500 mb-2">
            {{ t('process.phase2_duration') }}
          </p>
          <p class="text-xs md:text-sm text-slate-300">
            {{ t('process.phase2_desc') }}
          </p>
        </div>

        <!-- STEP 3 -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-sm h-full"
        >
          <p
            class="text-[11px] text-indigo-400 uppercase tracking-[0.16em] mb-1 font-semibold"
          >
            {{ t('process.phase3_badge') }}
          </p>
          <h3 class="font-semibold text-slate-50 mb-1 text-sm md:text-base">
            {{ t('process.phase3_title') }}
          </h3>
          <p class="text-xs text-slate-500 mb-2">
            {{ t('process.phase3_duration') }}
          </p>
          <p class="text-xs md:text-sm text-slate-300">
            {{ t('process.phase3_desc') }}
          </p>
        </div>

        <!-- STEP 4 -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-sm h-full"
        >
          <p
            class="text-[11px] text-indigo-400 uppercase tracking-[0.16em] mb-1 font-semibold"
          >
            {{ t('process.phase4_badge') }}
          </p>
          <h3 class="font-semibold text-slate-50 mb-1 text-sm md:text-base">
            {{ t('process.phase4_title') }}
          </h3>
          <p class="text-xs text-slate-500 mb-2">
            {{ t('process.phase4_duration') }}
          </p>
          <p class="text-xs md:text-sm text-slate-300">
            {{ t('process.phase4_desc') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
