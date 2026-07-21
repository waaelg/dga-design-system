<script setup lang="ts">
import { ref } from "vue";

// English/LTR counterpart to VerifyBarDemo.vue — same reasoning applies:
// toggle state natively in Vue, scoped to this component, no dependency on
// the real `DGAVerifyBar` class's document-wide getElementById lookups.
const isOpen = ref(false);
</script>

<template>
  <div class="dga-verify-bar-demo">
    <div id="dga-verify-bar" dir="ltr" class="dga-bg-gray-100" :class="isOpen ? 'opend' : 'closed'">
      <div class="dga-container dga-py-2">
        <div id="dga-verify-bar_bar" class="dga-row">
          <div class="dga-col">
            <div class="dga-d-flex dga-align-items-center dga-gap-2">
              <span>
                <img src="/assets/dga/saudiFlag.svg" alt="" />
              </span>
              <span class="dga-text-sm">
                This is an official government website of the Kingdom of Saudi Arabia
              </span>
              <span>
                <button
                  id="dga-verifyBtn"
                  class="dga-btn dga-btn-subtle dga-text-primary-500"
                  :aria-expanded="isOpen"
                  @click="isOpen = !isOpen"
                >
                  How to verify
                </button>
              </span>
            </div>
          </div>
        </div>

        <div
          id="dga-verify-bar_content"
          class="dga-row dga-pt-10 dga-pb-8"
          :style="{ display: isOpen ? 'flex' : 'none' }"
        >
          <div class="dga-col-md-6 dga-pb-8">
            <div class="dga-d-flex dga-gap-4">
              <div><img src="/assets/dga/link-icon.svg" alt="" /></div>
              <div class="dga-w-full dga-d-flex dga-flex-col dga-gap-2">
                <h3 class="dga-text-xl dga-fw-bold">
                  Official Saudi government website links end with
                  <span class="dga-text-primary-500">.edu.sa</span>
                </h3>
                <p>
                  All official website links belonging to government entities in the
                  Kingdom of Saudi Arabia end with .edu.sa
                </p>
              </div>
            </div>
          </div>

          <div class="dga-col-md-6 dga-pb-8">
            <div class="dga-d-flex dga-gap-4">
              <div><img src="/assets/dga/square-lock-password.svg" alt="" /></div>
              <div class="dga-w-full dga-d-flex dga-flex-col dga-gap-2">
                <h3 class="dga-text-xl dga-fw-bold">
                  Government websites use the
                  <span class="dga-text-primary-500">HTTPS</span> protocol for encryption and security.
                </h3>
                <p>
                  Secure websites in the Kingdom of Saudi Arabia use the HTTPS protocol
                  for encryption.
                </p>
              </div>
            </div>
          </div>

          <div class="dga-col-12">
            <div
              class="dga-d-flex dga-align-items-center dga-gap-3 dga-bg-white dga-text-md dga-rounded-md dga-py-2 dga-px-7"
            >
              <img src="/assets/dga/DGA-logo-icon.svg" alt="" />
              Registered with the Digital Government Authority under number:
              <a
                href="https://raqmi.dga.gov.sa/platforms/platforms/9ebc5e60-9081-4653-bfb9-08dd2a2f8633/platform-license"
                class="dga-link"
              >
                20250105758
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
