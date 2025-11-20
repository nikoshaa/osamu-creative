<template>
  <section
    id="expertise"
    class="bg-slate-950 scroll-mt-24"
  >
    <div class="max-w-6xl mx-auto px-4 py-14 md:py-16">
      <div class="text-center mb-10 space-y-2">
        <h2 class="text-2xl md:text-3xl font-semibold text-slate-50">
          {{ t('expertise.title') }}
        </h2>
        <p class="text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
          {{ t('expertise.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-5 text-sm">
        <!-- FRONTEND -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm space-y-2"
        >
          <p class="text-[11px] uppercase tracking-[0.16em] text-indigo-400">
            {{ t('expertise.frontend_label') }}
          </p>
          <ul class="space-y-1.5 text-slate-300 text-xs md:text-sm">
            <li>• {{ t('expertise.frontend_item1') }}</li>
            <li>• {{ t('expertise.frontend_item2') }}</li>
            <li>• {{ t('expertise.frontend_item3') }}</li>
          </ul>
        </div>

        <!-- BACKEND -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm space-y-2"
        >
          <p class="text-[11px] uppercase tracking-[0.16em] text-indigo-400">
            {{ t('expertise.backend_label') }}
          </p>
          <ul class="space-y-1.5 text-slate-300 text-xs md:text-sm">
            <li>• {{ t('expertise.backend_item1') }}</li>
            <li>• {{ t('expertise.backend_item2') }}</li>
            <li>• {{ t('expertise.backend_item3') }}</li>
          </ul>
        </div>

        <!-- DEVOPS -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm space-y-2"
        >
          <p class="text-[11px] uppercase tracking-[0.16em] text-indigo-400">
            {{ t('expertise.ops_label') }}
          </p>
          <ul class="space-y-1.5 text-slate-300 text-xs md:text-sm">
            <li>• {{ t('expertise.ops_item1') }}</li>
            <li>• {{ t('expertise.ops_item2') }}</li>
            <li>• {{ t('expertise.ops_item3') }}</li>
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
