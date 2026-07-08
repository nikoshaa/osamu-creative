<template>
  <section
    id="home"
    class="relative bg-linear-to-b from-slate-950 via-slate-950 to-slate-900 border-b border-slate-800 scroll-mt-24"
  >
    <div
      class="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center"
    >
      <!-- LEFT -->
      <div>
        <span
          class="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-indigo-500/40 px-3 py-1 text-[11px] font-medium text-indigo-300 shadow-sm mb-4"
        >
          <span class="h-1.5 w-1.5 rounded-full bg-indigo-400 inline-block" />
          {{ t('hero.badge_tagline') }}
        </span>

        <h1
          class="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-slate-50 mb-4"
        >
          {{ t('hero.title_main') }}
          <span class="text-indigo-400">
            {{ t('hero.title_highlight') }}
          </span>
        </h1>

        <p class="text-sm md:text-base text-slate-300 mb-6 max-w-xl">
          {{ t('hero.description') }}
        </p>

        <div class="flex flex-wrap items-center gap-3 mb-7">
          <a
            href="#contact"
            class="inline-flex items-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-indigo-400 transition"
          >
            {{ t('hero.cta_consult') }}
          </a>
          <a
            href="#portfolio"
            class="inline-flex items-center rounded-full border border-slate-600 bg-slate-900 px-5 py-2.5 text-sm text-slate-100 hover:border-indigo-400 hover:text-indigo-300 transition"
          >
            {{ t('hero.cta_portfolio') }}
          </a>
        </div>

        <div class="flex flex-wrap items-center gap-6 text-xs text-slate-400">
          <div>
            <p class="font-semibold text-slate-100 text-sm">
              {{ t('hero.stat1_title') }}
            </p>
            <p>{{ t('hero.stat1_desc') }}</p>
          </div>
          <div class="h-8 w-px bg-slate-700 hidden md:block" />
          <div>
            <p class="font-semibold text-slate-100 text-sm">
              {{ t('hero.stat2_title') }}
            </p>
            <p>{{ t('hero.stat2_desc') }}</p>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="relative md:justify-self-end max-w-[520px] w-full">
        <div
          class="absolute -top-8 -right-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl"
        ></div>
        <div
          class="absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl"
        ></div>

        <div
          class="relative rounded-3xl bg-slate-900 border border-slate-700 shadow-xl shadow-indigo-500/10 p-5 md:p-6"
        >
          <p class="text-xs font-medium text-slate-400 mb-3">
            {{ t('hero.snapshot_title') }}
          </p>

          <div class="grid grid-cols-3 gap-3 mb-4 text-xs">
            <div
              class="rounded-xl bg-slate-800/80 p-3 border border-indigo-500/30"
            >
              <p class="text-slate-400 mb-1">
                {{ t('hero.metric1_label') }}
              </p>
              <p class="text-lg font-semibold text-indigo-300">
                {{ t('hero.metric1_value') }}
              </p>
              <p class="text-[11px] text-indigo-300/80">
                {{ t('hero.metric1_desc') }}
              </p>
            </div>
            <div class="rounded-xl bg-slate-800/80 p-3 border border-slate-700">
              <p class="text-slate-400 mb-1">
                {{ t('hero.metric2_label') }}
              </p>
              <p class="text-lg font-semibold text-slate-50">
                {{ t('hero.metric2_value') }}
              </p>
              <p class="text-[11px] text-slate-400">
                {{ t('hero.metric2_desc') }}
              </p>
            </div>
            <div
              class="rounded-xl bg-slate-800/80 p-3 border border-sky-500/40"
            >
              <p class="text-slate-400 mb-1">
                {{ t('hero.metric3_label') }}
              </p>
              <p class="text-lg font-semibold text-sky-300">
                {{ t('hero.metric3_value') }}
              </p>
              <p class="text-[11px] text-sky-300/80">
                {{ t('hero.metric3_desc') }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 items-start">
            <div
              class="rounded-2xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col gap-2"
            >
              <div class="flex justify-between items-center mb-2">
                <span class="text-[11px] text-slate-400">
                  {{ t('hero.pipeline_label') }}
                </span>
                <span
                  class="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                >
                  {{ t('hero.pipeline_status') }}
                </span>
              </div>
            </div>

            <div
              class="rounded-3xl border border-slate-700 bg-slate-900 px-4 py-4 flex flex-col items-center gap-3 shadow-sm"
            >
              <div
                class="h-40 w-28 rounded-2xl border border-slate-700 bg-slate-800 overflow-hidden flex flex-col text-[10px]"
              >
                <div class="h-4 bg-indigo-500/90"></div>
                <div class="flex-1 p-2 space-y-1.5">
                  <div class="h-3 w-16 bg-slate-600 rounded"></div>
                  <div class="h-2 w-10 bg-slate-500 rounded"></div>
                  <div class="mt-2 space-y-1">
                    <div class="h-4 rounded bg-slate-900 border border-slate-700"></div>
                    <div class="h-4 rounded bg-slate-900 border border-slate-700"></div>
                    <div class="h-4 rounded bg-slate-900 border border-slate-700"></div>
                  </div>
                  <div class="mt-3 h-6 rounded-full bg-indigo-500/90"></div>
                </div>
              </div>
              <p class="text-[11px] text-slate-400 text-center">
                {{ t('hero.mobile_caption_prefix') }}
                <span class="font-semibold text-slate-100">
                  {{ t('hero.mobile_caption_highlight') }}
                </span>
                {{ t('hero.mobile_caption_suffix') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
