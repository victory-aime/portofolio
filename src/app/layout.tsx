import React from 'react';
import type { Metadata } from 'next';
import { Bricolage_Grotesque } from 'next/font/google';
import { CustomProvider } from '_/provider/provider';
import I18nProvider from '_/locales/i18n.provider';

const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MyPortofolio',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={bricolage.variable} suppressHydrationWarning>
      <body>
        <CustomProvider>
          <I18nProvider>{children}</I18nProvider>
        </CustomProvider>
      </body>
    </html>
  );
}
