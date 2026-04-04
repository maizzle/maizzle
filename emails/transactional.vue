<script setup lang="ts">
  defineConfig({
    title: 'Welcome to Maizzle',
  })
</script>

<template>
  <Layout body-class="dark:bg-gray-950">
    <div class="font-inter">
      <table align="center" class="m-0 mx-auto">
        <tr>
          <td class="w-[552px] max-w-full">
            <Spacer size="24px" />

            <table class="w-full">
              <tr>
                <td class="py-6 px-9 sm:p-6 bg-white dark:bg-gray-800 dark:border-gray-500 [border:1px_solid_var(--color-slate-200)] rounded-lg">
                  <a href="https://maizzle.com">
                    <img src="/images/logo.png" width="70" alt="Maizzle">
                  </a>

                  <Spacer size="24px" />

                  <h1 class="m-0 mb-6 text-2xl/8 text-slate-900 dark:text-gray-300 font-semibold">
                    Hello there!
                  </h1>

                  <p class="m-0 mb-6 text-base/6 text-slate-600 dark:text-gray-300">
                    We're happy to have you on board! Please verify your email address in order to activate your account:
                  </p>

                  <Button
                    href="https://maizzle.com"
                    class="bg-indigo-500 hover:bg-slate-800"
                  >
                    Verify email
                  </Button>

                  <Spacer size="24px" />

                  <p class="m-0 text-base/6 text-slate-600 dark:text-gray-300">
                    Thanks,
                    <br>
                    <span class="font-semibold">Maizzle</span>
                  </p>

                  <Divider class="dark:bg-gray-500" />

                  <p class="m-0 text-xs/5 text-slate-600 mso-break-all dark:text-gray-400">
                    If you're having trouble clicking the "Verify email" button, copy and paste the following URL into your web browser:
                    <a href="https://maizzle.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0" class="text-slate-800 dark:text-gray-400 underline">https://maizzle.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0</a>
                  </p>
                </td>
              </tr>
            </table>

            <table class="w-full">
              <tr>
                <td class="py-6 px-9 sm:px-6">
                  <p class="m-0 text-xs text-slate-500">
                    &copy; {{ new Date().getFullYear() }} Maizzle. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </Layout>
</template>
