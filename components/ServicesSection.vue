<template>
  <section
    id="services"
    class="bg-slate-950 scroll-mt-24"
  >
    <div class="max-w-6xl mx-auto px-4 py-14 md:py-16">
      <div class="text-center mb-10">
        <h2 class="text-2xl md:text-3xl font-semibold text-slate-50 mb-2">
          {{ t('services.title') }}
        </h2>
        <p class="text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-5 text-sm">
        <!-- Web App -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm shadow-indigo-500/10 h-full flex flex-col gap-3"
        >
          <p
            class="text-[11px] font-semibold text-indigo-400 tracking-[0.16em] uppercase"
          >
            {{ t('services.webapps_badge') }}
          </p>
          <h3 class="font-semibold text-slate-50 text-sm md:text-base">
            {{ t('services.webapps_title') }}
          </h3>
          <p class="text-slate-400 text-xs md:text-sm">
            {{ t('services.webapps_desc') }}
          </p>
          <ul class="mt-2 space-y-1.5 text-slate-300 text-xs md:text-sm">
            <li>• {{ t('services.webapps_bullet1') }}</li>
            <li>• {{ t('services.webapps_bullet2') }}</li>
            <li>• {{ t('services.webapps_bullet3') }}</li>
          </ul>
        </div>

        <!-- Mobile App -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm shadow-indigo-500/10 h-full flex flex-col gap-3"
        >
          <p
            class="text-[11px] font-semibold text-indigo-400 tracking-[0.16em] uppercase"
          >
            {{ t('services.mobile_badge') }}
          </p>
          <h3 class="font-semibold text-slate-50 text-sm md:text-base">
            {{ t('services.mobile_title') }}
          </h3>
          <p class="text-slate-400 text-xs md:text-sm">
            {{ t('services.mobile_desc') }}
          </p>
          <ul class="mt-2 space-y-1.5 text-slate-300 text-xs md:text-sm">
            <li>• {{ t('services.mobile_bullet1') }}</li>
            <li>• {{ t('services.mobile_bullet2') }}</li>
            <li>• {{ t('services.mobile_bullet3') }}</li>
          </ul>
        </div>

        <!-- UI/UX & Product -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm shadow-indigo-500/10 h-full flex flex-col gap-3"
        >
          <p
            class="text-[11px] font-semibold text-indigo-400 tracking-[0.16em] uppercase"
          >
            {{ t('services.ux_badge') }}
          </p>
          <h3 class="font-semibold text-slate-50 text-sm md:text-base">
            {{ t('services.ux_title') }}
          </h3>
          <p class="text-slate-400 text-xs md:text-sm">
            {{ t('services.ux_desc') }}
          </p>
          <ul class="mt-2 space-y-1.5 text-slate-300 text-xs md:text-sm">
            <li>• {{ t('services.ux_bullet1') }}</li>
            <li>• {{ t('services.ux_bullet2') }}</li>
            <li>• {{ t('services.ux_bullet3') }}</li>
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
