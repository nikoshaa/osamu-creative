<template>
  <footer class="bg-slate-950 text-slate-400 pt-10">
    <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
      
      <!-- BRAND -->
      <div>
        <img
          src="/osamu-logo-horizontal.png"
          alt="Osamu Creative Logo"
          class="h-8 w-auto mb-4"
        />
        <p class="text-sm leading-relaxed text-slate-400 max-w-xs">
          {{ t("footer.brand_desc") }}
        </p>
      </div>

      <!-- MENU -->
      <div>
        <h3 class="text-sm font-semibold text-slate-100 mb-3">
          {{ t("footer.menu_title") }}
        </h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#home" class="hover:text-indigo-400 transition">{{ t("nav.home") }}</a></li>
          <li><a href="#services" class="hover:text-indigo-400 transition">{{ t("nav.services") }}</a></li>
          <li><a href="#process" class="hover:text-indigo-400 transition">{{ t("nav.process") }}</a></li>
          <li><a href="#portfolio" class="hover:text-indigo-400 transition">{{ t("nav.portfolio") }}</a></li>
          <li><a href="#expertise" class="hover:text-indigo-400 transition">{{ t("nav.expertise") }}</a></li>
          <li><a href="#about" class="hover:text-indigo-400 transition">{{ t("nav.about") }}</a></li>
          <li><a href="#contact" class="hover:text-indigo-400 transition">{{ t("nav.contact") }}</a></li>
        </ul>
      </div>

      <!-- CONTACT -->
      <div>
        <h3 class="text-sm font-semibold text-slate-100 mb-3">
          {{ t("footer.contact_title") }}
        </h3>
        <ul class="space-y-2 text-sm">
          <li>{{ t("footer.whatsapp") }}: <span class="text-slate-100">+62 8xx-xxxx-xxxx</span></li>
          <li>
            {{ t("footer.email") }}:
            <span class="text-slate-100">
              {{ `${t('contact.email_placeholder_user')}@${t('contact.email_placeholder_domain')}` }}
            </span>
          </li>
          <li>{{ t("footer.website") }}: <span class="text-slate-100">osamucreative.com</span></li>
        </ul>
      </div>
    </div>

    <!-- COPYRIGHT -->
    <div class="border-t border-slate-800 mt-10 py-5">
      <div
        class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs md:text-sm text-slate-500"
      >
        <p>© {{ year }} Osamu Creative. {{ t("footer.rights") }}</p>
        <p>{{ t("footer.tagline") }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n"
const { t } = useI18n()

const year = new Date().getFullYear()
</script>
