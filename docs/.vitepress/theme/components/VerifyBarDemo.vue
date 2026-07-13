<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";

let verifyBar: { destroy?: () => void } | null = null;

onMounted(async () => {
  const { DGAVerifyBar } = await import("@ds/index.js");
  verifyBar = new DGAVerifyBar();
});

onBeforeUnmount(() => {
  verifyBar?.destroy?.();
});
</script>

<template>
  <div dir="rtl" class="dga-verify-bar-demo">
    <div id="dga-verify-bar" class="dga-bg-gray-100 closed">
      <div class="dga-container dga-py-2">
        <div id="dga-verify-bar_bar" class="dga-row">
          <div class="dga-col">
            <div class="dga-d-flex dga-align-items-center dga-gap-2">
              <span>
                <img src="/assets/dga/saudiFlag.svg" alt="" />
              </span>
              <span class="dga-text-sm">
                موقع حكومي رسمي تابع لحكومة المملكة العربية السعودية
              </span>
              <span>
                <button
                  id="dga-verifyBtn"
                  class="dga-btn dga-btn-subtle dga-text-primary-500"
                >
                  كيف تتحقق
                </button>
              </span>
            </div>
          </div>
        </div>

        <div id="dga-verify-bar_content" class="dga-row dga-pt-10 dga-pb-8">
          <div class="dga-col-md-6 dga-pb-8">
            <div class="dga-d-flex dga-gap-4">
              <div><img src="/assets/dga/link-icon.svg" alt="" /></div>
              <div class="dga-w-full dga-d-flex dga-flex-col dga-gap-2">
                <h3 class="dga-text-xl dga-fw-bold">
                  روابط المواقع الالكترونية الرسمية السعودية تنتهي بـ
                  <span class="dga-text-primary-500">.edu.sa</span>
                </h3>
                <p>
                  جميع روابط المواقع الرسمية التابعة للجهات الحكومية في المملكة
                  العربية السعودية تنتهي بـ .edu.sa
                </p>
              </div>
            </div>
          </div>

          <div class="dga-col-md-6 dga-pb-8">
            <div class="dga-d-flex dga-gap-4">
              <div><img src="/assets/dga/square-lock-password.svg" alt="" /></div>
              <div class="dga-w-full dga-d-flex dga-flex-col dga-gap-2">
                <h3 class="dga-text-xl dga-fw-bold">
                  المواقع الالكترونية الحكومية تستخدم بروتوكول
                  <span class="dga-text-primary-500">HTTPS</span> للتشفير و الأمان.
                </h3>
                <p>
                  المواقع الالكترونية الآمنة في المملكة العربية السعودية تستخدم
                  بروتوكول HTTPS للتشفير.
                </p>
              </div>
            </div>
          </div>

          <div class="dga-col-12">
            <div
              class="dga-d-flex dga-align-items-center dga-gap-3 dga-bg-white dga-text-md dga-rounded-md dga-py-2 dga-px-7"
            >
              <img src="/assets/dga/DGA-logo-icon.svg" alt="" />
              مسجل لدى هيئة الحكومة الرقمية برقم :
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
