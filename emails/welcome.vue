<template>
  <Layout class="p-6 dark:bg-gray-950">
    <Container class="max-w-xl">
      <Section
        class="py-6 px-9 sm:px-6 bg-white dark:bg-gray-900 [border:1px_solid_var(--color-slate-200)] dark:border-gray-700 rounded-lg"
        mso-style="padding: 24px 36px; border: 1px solid #e2e8f0;"
      >
        <Link href="https://maizzle.com">
          <Img
            src="/logo.png"
            dark-src="/logo-gradient.png"
            width="70"
            alt="Maizzle"
          />
        </Link>

        <Spacer height="24px" />

        <Heading level="1" class="mb-6 text-3xl font-semibold text-slate-900 dark:text-gray-300">
          Hello there!
        </Heading>

        <Text class="mb-6 text-slate-600 dark:text-gray-300">
          We're happy to have you on board! Please verify your email address in order to activate your account:
        </Text>

        <Button
          href="https://maizzle.com"
          class="hover:bg-indigo-600"
        >
          Verify email
        </Button>

        <Spacer height="24px" />

        <Text class="m-0 text-slate-600 dark:text-gray-300">
          Thanks,
          <br>
          <Text as="span" class="font-semibold">Maizzle</Text>
        </Text>

        <Divider class="dark:bg-gray-500" />

        <Text class="m-0 text-xs mso-break-all text-slate-600 dark:text-gray-400">
          If you're having trouble clicking the "Verify email" button, copy and paste the following URL into your web browser:
          <Link href="https://maizzle.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0" class="underline text-slate-800 dark:text-gray-400">
            https://maizzle.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0
          </Link>
        </Text>
      </Section>

      <Section class="py-6 px-9 sm:px-6" mso-style="padding: 24px 36px;">
        <Text class="m-0 text-xs text-slate-500">
          &copy; {{ new Date().getFullYear() }} Maizzle. All rights reserved.
        </Text>
      </Section>
    </Container>
  </Layout>
</template>
