import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import AOS from "@/components/AOS";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return {
    title: t("meta.title"),

    description: t("meta.description"),
    keywords: t("meta.keywords"),
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: t("meta.title"),
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <AOS />
          <Analytics />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
