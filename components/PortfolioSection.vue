<template>
  <section
    id="portfolio"
    class="bg-slate-950 scroll-mt-24"
  >
    <div class="max-w-6xl mx-auto px-4 py-14 md:py-16">
      <div class="text-center mb-10">
        <h2 class="text-2xl md:text-3xl font-semibold text-slate-50 mb-2">
          {{ t('portfolio.title') }}
        </h2>
        <p class="text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
          {{ t('portfolio.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-5 text-sm">
        <!-- Card 1 -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm flex flex-col gap-3"
        >
          <p class="text-[11px] uppercase tracking-[0.16em] text-slate-400">
            {{ t('portfolio.p1_badge') }}
          </p>
          <h3 class="font-semibold text-slate-50 text-sm md:text-base">
            {{ t('portfolio.p1_title') }}
          </h3>
          <p class="text-xs md:text-sm text-slate-400">
            {{ t('portfolio.p1_desc') }}
          </p>
          <p class="text-[11px] text-slate-500">
            {{ t('portfolio.p1_tech') }}
          </p>
        </div>

        <!-- Card 2 -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm flex flex-col gap-3"
        >
          <p class="text-[11px] uppercase tracking-[0.16em] text-slate-400">
            {{ t('portfolio.p2_badge') }}
          </p>
          <h3 class="font-semibold text-slate-50 text-sm md:text-base">
            {{ t('portfolio.p2_title') }}
          </h3>
          <p class="text-xs md:text-sm text-slate-400">
            {{ t('portfolio.p2_desc') }}
          </p>
          <p class="text-[11px] text-slate-500">
            {{ t('portfolio.p2_tech') }}
          </p>
        </div>

        <!-- Card 3 -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm flex flex-col gap-3"
        >
          <p class="text-[11px] uppercase tracking-[0.16em] text-slate-400">
            {{ t('portfolio.p3_badge') }}
          </p>
          <h3 class="font-semibold text-slate-50 text-sm md:text-base">
            {{ t('portfolio.p3_title') }}
          </h3>
          <p class="text-xs md:text-sm text-slate-400">
            {{ t('portfolio.p3_desc') }}
          </p>
          <p class="text-[11px] text-slate-500">
            {{ t('portfolio.p3_meta') }}
          </p>
        </div>
      </div>

      <div
        class="mt-8 rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-5 text-xs md:text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-3"
      >
        <p class="text-slate-300">
          {{ t('portfolio.cta_text') }}
          <span class="font-semibold">
            {{ t('portfolio.cta_highlight') }}
          </span>
        </p>
        <p class="text-slate-400">
          {{ t('portfolio.cta_hint') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
