<template>
  <Layout class="bg-gray-50 dark:bg-gray-950">
    <Preheader>Your verification code for signing in.</Preheader>

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
          Your verification code
        </Heading>

        <Text class="m-0 mt-4 text-lg text-white">
          Secure access to your account.
        </Text>

        <Spacer class="h-6" />

        <table>
          <tr>
            <td class="w-16 h-20 xs:w-10 xs:h-14 rounded-lg bg-gray-800 text-center text-3xl sm:text-2xl text-white">6</td>
            <td class="w-4"></td>
            <td class="w-16 h-20 xs:w-10 xs:h-14 rounded-lg bg-gray-800 text-center text-3xl sm:text-2xl text-white">2</td>
            <td class="w-4"></td>
            <td class="w-16 h-20 xs:w-10 xs:h-14 rounded-lg bg-gray-800 text-center text-3xl sm:text-2xl text-white">1</td>
            <td class="w-4"></td>
            <td class="w-16 h-20 xs:w-10 xs:h-14 rounded-lg bg-gray-800 text-center text-3xl sm:text-2xl text-white">7</td>
            <td class="w-4"></td>
            <td class="w-16 h-20 xs:w-10 xs:h-14 rounded-lg bg-gray-800 text-center text-3xl sm:text-2xl text-white">3</td>
            <td class="w-4"></td>
            <td class="w-16 h-20 xs:w-10 xs:h-14 rounded-lg bg-gray-800 text-center text-3xl sm:text-2xl text-white">9</td>
          </tr>
        </table>
      </Section>

      <Section class="rounded-b-lg bg-white px-6 py-16 dark:bg-gray-800">
        <Text class="m-0 text-base text-gray-600 dark:text-gray-300">
          Use the verification code above to complete your sign-in request.
        </Text>

        <Text class="mt-6 text-sm text-gray-600 dark:text-gray-400">
          <Text as="span" class="font-semibold">This code will expire in 10 minutes.</Text>
          <br>
          If you did not request this code, you can safely ignore this email.
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
