<script setup lang="ts">
  defineProps({
    /**
     * Classes to add to the `<html>` tag.
     */
    htmlClass: {
      type: String,
      default: ''
    },
    /**
     * Classes to add to the `<body>` tag.
     */
    bodyClass: {
      type: String,
      default: ''
    }
  })
</script>

<template>
  <html lang="en" dir="ltr" :class="htmlClass" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta charset="utf-8">
      <meta name="x-apple-disable-message-reformatting">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
      <meta name="color-scheme" content="light dark">
      <meta name="supported-color-schemes" content="light dark">
      <!--[if mso]>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings xmlns:o="urn:schemas-microsoft-com:office:office">
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
      <style>
        td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
        .mso-break-all {word-break: break-all;}
      </style>
      <![endif]-->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" media="screen">
      <style>
        @import "@maizzle/tailwindcss";

        img {
          @apply max-w-full align-middle;
        }
      </style>
    </head>
    <body xml:lang="en" :class="['m-0 p-0 w-full [word-break:break-word] [-webkit-font-smoothing:antialiased]', bodyClass]">
      <slot />
    </body>
  </html>
</template>
