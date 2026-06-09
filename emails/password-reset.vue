<template>
  <Layout class="bg-gray-50 dark:bg-gray-950">
    <Preheader>Reset your [Brand Name] password.</Preheader>

    <Container class="max-w-xl p-0 py-10 sm:p-6">
      <Section class="rounded-t-lg bg-gray-900 px-6 pt-6 pb-11">
        <Row>
          <Column class="w-1/2">
            <Link href="https://maizzle.com">
              <Img src="/logo.png" width="60" alt="Maizzle" />
            </Link>
          </Column>
          <Column class="w-1/2 text-right">
            <Link
              href="https://maizzle.com"
              class="text-sm font-medium text-gray-400"
            >
              My Account
            </Link>
          </Column>
        </Row>

        <Spacer class="h-36" />

        <Heading class="text-[32px]/10 font-bold text-white">
          Reset your password
        </Heading>

        <Text class="m-0 mt-4 text-lg text-gray-300">
          Secure access to your account in one tap.
        </Text>
      </Section>

      <Section class="rounded-b-lg bg-white px-6 py-16 dark:bg-gray-800">
        <Heading level="2" class="mb-6 text-2xl font-bold text-gray-950 dark:text-white">
          Reset your password
        </Heading>

        <Text class="mb-6 text-base text-gray-600 dark:text-gray-300">
          We received a request to reset the password for your [Brand Name] account.
          <br>
          <br>
          Click the button below to choose a new password.
        </Text>

        <Button
          href="https://maizzle.com"
          class="rounded-lg bg-gray-900 px-7 py-3 text-sm font-bold text-white dark:bg-white dark:text-gray-900"
        >
          Reset password
        </Button>

        <Text class="mt-6 text-sm leading-5 text-gray-600 dark:text-gray-400">
          <Text as="span" class="text-sm font-semibold leading-5">This link will expire in 15 minutes.</Text>
          <br>
          If you did not request a password reset, you can safely ignore this email.
        </Text>

        <Hr />

        <Text class="text-xs/5 text-gray-600 break-all">
          <Text as="span" class="[word-break:break-word]">If you're having trouble clicking the "Reset password" button, copy and paste the following URL into your web browser:</Text>
          <a href="https://maizzle.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0" class="text-gray-800 underline">https://maizzle.com/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0</a>
        </Text>
      </Section>

      <Section class="px-6 py-11">
        <Img src="/logo-footer.png" dark-src="/logo-footer-dark.png" width="106" alt="Maizzle" />

        <Spacer class="h-9" />

        <Text class="m-0 text-xs/4.5 text-gray-400">
          &copy; {{ new Date().getFullYear() }} [Brand Name]. All rights reserved.
        </Text>
      </Section>
    </Container>
  </Layout>
</template>
