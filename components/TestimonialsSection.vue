<template>
  <section
    id="testimonials"
    class="bg-slate-950 scroll-mt-24"
  >
    <div class="max-w-6xl mx-auto px-4 py-14 md:py-16">
      <div class="text-center mb-10 space-y-2">
        <h2 class="text-2xl md:text-3xl font-semibold text-slate-50">
          {{ t("testimonials.title") }}
        </h2>
        <p class="text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
          {{ t("testimonials.subtitle") }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 text-sm">
        <!-- TESTI 1 -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm flex flex-col gap-3"
        >
          <p
            class="text-indigo-400 text-xs font-semibold uppercase tracking-[0.16em]"
          >
            {{ t("testimonials.t1_category") }}
          </p>
          <p class="text-sm md:text-[15px] text-slate-200">
            “{{ t("testimonials.t1_quote") }}”
          </p>

          <div class="mt-2">
            <p class="text-sm font-semibold text-slate-50">
              {{ t("testimonials.t1_author") }}
            </p>
            <p class="text-xs text-slate-500">
              {{ t("testimonials.anonymous_note") }}
            </p>
          </div>
        </div>

        <!-- TESTI 2 -->
        <div
          class="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-sm flex flex-col gap-3"
        >
          <p
            class="text-indigo-400 text-xs font-semibold uppercase tracking-[0.16em]"
          >
            {{ t("testimonials.t2_category") }}
          </p>
          <p class="text-sm md:text-[15px] text-slate-200">
            “{{ t("testimonials.t2_quote") }}”
          </p>

          <div class="mt-2">
            <p class="text-sm font-semibold text-slate-50">
              {{ t("testimonials.t2_author") }}
            </p>
            <p class="text-xs text-slate-500">
              {{ t("testimonials.anonymous_note") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
const { t } = useI18n()
</script>
