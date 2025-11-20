<template>
  <section
    id="contact"
    class="bg-linear-to-r from-slate-950 via-slate-950 to-slate-900 border-t border-slate-800 scroll-mt-24"
  >
    <div class="max-w-6xl mx-auto px-4 py-14 md:py-20">
      <div class="grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
        
        <!-- FORM -->
        <div>
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-50 mb-2">
            {{ t("contact.title") }}
          </h2>
          <p class="text-sm md:text-base text-slate-300 mb-6 max-w-xl">
            {{ t("contact.subtitle") }}
          </p>

          <!-- Netlify-ready form -->
          <form
            name="contact-osamu"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            class="space-y-4 text-sm md:text-base"
          >
            <input type="hidden" name="form-name" value="contact-osamu" />

            <p class="hidden">
              <label>
                {{ t("contact.bot_field") }}
                <input name="bot-field" />
              </label>
            </p>

            <div class="grid md:grid-cols-2 gap-4">
              <!-- NAMA -->
              <div>
                <label class="block text-xs text-slate-400 mb-1" for="nama">
                  {{ t("contact.name") }}
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  class="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  :placeholder="t('contact.name_placeholder')"
                  required
                />
              </div>

              <!-- PERUSAHAAN -->
              <div>
                <label class="block text-xs text-slate-400 mb-1" for="perusahaan">
                  {{ t("contact.company") }}
                </label>
                <input
                  id="perusahaan"
                  name="perusahaan"
                  type="text"
                  class="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  :placeholder="t('contact.company_placeholder')"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <!-- EMAIL -->
              <div>
                <label class="block text-xs text-slate-400 mb-1" for="email">
                  {{ t("contact.email") }}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  :placeholder="`${t('contact.email_placeholder_user')}@${t('contact.email_placeholder_domain')}`"
                  required
                />
              </div>

              <!-- TIMING -->
              <div>
                <label class="block text-xs text-slate-400 mb-1" for="timing">
                  {{ t("contact.timing") }}
                </label>
                <input
                  id="timing"
                  name="timing"
                  type="text"
                  class="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  :placeholder="t('contact.timing_placeholder')"
                />
              </div>
            </div>

            <!-- PESAN -->
            <div>
              <label class="block text-xs text-slate-400 mb-1" for="kebutuhan">
                {{ t("contact.message") }}
              </label>
              <textarea
                id="kebutuhan"
                name="kebutuhan"
                rows="4"
                class="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5 text-sm text-slate-50 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                :placeholder="t('contact.message_placeholder')"
              ></textarea>
            </div>

            <button
              type="submit"
              class="inline-flex items-center rounded-full bg-indigo-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-indigo-400 transition"
            >
              {{ t("contact.cta_send") }}
            </button>
          </form>
        </div>

        <!-- CONTACT INFO -->
        <div class="rounded-2xl border border-slate-700 bg-slate-900 p-5 md:p-6 text-sm shadow-sm shadow-indigo-500/20">
          <h3 class="font-semibold text-slate-50 mb-3">
            {{ t("contact.info_title") }}
          </h3>

          <div class="space-y-1 text-slate-200 mb-3">
            <p class="font-medium">Osamu Creative — Software House & Digital Studio</p>
            <p>{{ t("contact.location") }}: (Jakarta / Bekasi / isi kotamu)</p>
          </div>

          <div class="space-y-1 text-slate-200 mb-3">
            <p>
              {{ t("contact.whatsapp") }}:
              <span class="font-semibold">+62 8xx-xxxx-xxxx</span>
            </p>
            <p>
              {{ t("contact.email_label") }}:
              <span class="font-semibold">
                {{ `${t('contact.email_placeholder_user')}@${t('contact.email_placeholder_domain')}` }}
              </span>
            </p>
            <p>
              {{ t("contact.website") }}:
              <span class="font-semibold">osamucreative.com</span>
            </p>
          </div>

          <p class="text-xs text-slate-400 border-t border-slate-800 pt-3 leading-relaxed">
            {{ t("contact.response_note") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
const { t } = useI18n()
</script>
