<template>
  <Layout class="bg-gray-50 dark:bg-gray-950">
    <Preheader>Your order is confirmed — thank you for your purchase.</Preheader>

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
          Your order is confirmed
        </Heading>

        <Text class="m-0 mt-4 text-lg text-gray-300">
          Thank you for your purchase.
        </Text>
      </Section>

      <Section class="rounded-b-lg bg-white px-6 py-16 dark:bg-gray-800">
        <Heading level="2" class="text-2xl font-bold text-gray-950 dark:text-white">
          Order confirmed
        </Heading>

        <Text class="mt-6 text-base text-gray-600 dark:text-gray-300">
          We&rsquo;ve received your order and it&rsquo;s now being processed.
          <br>
          <Text as="span" class="font-bold">Order #</Text>: <Raw>{{ order_number }}</Raw>
        </Text>

        <Hr class="my-6 bg-gray-300 dark:bg-gray-700" />

        <Row>
          <Column class="w-1/2">
            <Text class="m-0 text-base font-semibold text-gray-950 dark:text-white">Stark Graphic T</Text>
          </Column>
          <Column class="w-1/2 text-right">
            <Text class="m-0 text-base font-semibold text-gray-950 dark:text-white">$44.99</Text>
          </Column>
        </Row>

        <Text class="mt-4 text-base text-gray-500 dark:text-gray-400">
          Black, White, Gray +5 more | S,M,L,XL
        </Text>

        <Hr class="my-6 bg-gray-300 dark:bg-gray-700" />

        <Row>
          <Column class="w-1/2">
            <Text class="m-0 text-base font-medium text-gray-600 dark:text-gray-300">Subtotal</Text>
          </Column>
          <Column class="w-1/2 text-right">
            <Text class="m-0 text-base font-medium text-gray-600 dark:text-gray-300">$49.99</Text>
          </Column>
        </Row>

        <Row class="mt-4">
          <Column class="w-1/2">
            <Text class="m-0 text-base font-medium text-gray-600 dark:text-gray-300">Tax</Text>
          </Column>
          <Column class="w-1/2 text-right">
            <Text class="m-0 text-base font-medium text-gray-600 dark:text-gray-300">$5.99</Text>
          </Column>
        </Row>

        <Row class="mt-4">
          <Column class="w-1/2">
            <Text class="m-0 text-base font-medium text-gray-600 dark:text-gray-300">Shipping</Text>
          </Column>
          <Column class="w-1/2 text-right">
            <Text class="m-0 text-base font-medium text-gray-600 dark:text-gray-300">FREE</Text>
          </Column>
        </Row>

        <Hr class="my-4 bg-gray-300 dark:bg-gray-700" />

        <Row>
          <Column class="w-1/2">
            <Text class="m-0 text-2xl font-semibold text-gray-950 dark:text-white">Order total</Text>
          </Column>
          <Column class="w-1/2 text-right">
            <Text class="m-0 text-2xl font-semibold text-gray-950 dark:text-white">$55.98</Text>
          </Column>
        </Row>

        <Spacer class="h-6" />

        <Button
          href="https://maizzle.com"
          class="rounded-lg bg-gray-900 px-7 py-3 text-sm font-bold text-white dark:bg-white dark:text-gray-900"
        >
          View order
        </Button>

        <Text class="mt-6 text-sm font-semibold text-gray-600 dark:text-gray-400">
          If you have any questions regarding your order,
          <br class="xs:hidden">
          please contact our support team.
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
