<template>
  <section id="about" class="bg-slate-950 scroll-mt-24">
    <div
      class="max-w-6xl mx-auto px-4 py-14 md:py-16 grid md:grid-cols-2 gap-10 items-start"
    >
      <div>
        <h2 class="text-2xl md:text-3xl font-semibold text-slate-50 mb-3">
          {{ t('about.title') }}
        </h2>
        <div class="space-y-3 text-sm md:text-base text-slate-300">
          <p>
            {{ t('about.paragraph1') }}
          </p>
          <p>
            {{ t('about.paragraph2') }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 text-xs md:text-sm">
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-sm shadow-slate-900"
        >
          <p
            class="text-slate-400 mb-2 text-[11px] uppercase tracking-[0.16em] font-semibold"
          >
            {{ t('about.how_we_work_title') }}
          </p>
          <ul class="space-y-1 text-slate-200">
            <li>• {{ t('about.how_we_work_item1') }}</li>
            <li>• {{ t('about.how_we_work_item2') }}</li>
            <li>• {{ t('about.how_we_work_item3') }}</li>
            <li>• {{ t('about.how_we_work_item4') }}</li>
          </ul>
        </div>

        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-sm shadow-slate-900"
        >
          <p
            class="text-slate-400 mb-2 text-[11px] uppercase tracking-[0.16em] font-semibold"
          >
            {{ t('about.suited_for_title') }}
          </p>
          <ul class="space-y-1 text-slate-200">
            <li>• {{ t('about.suited_for_item1') }}</li>
            <li>• {{ t('about.suited_for_item2') }}</li>
            <li>• {{ t('about.suited_for_item3') }}</li>
            <li>• {{ t('about.suited_for_item4') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
