import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { CustomProvider } from '_/provider/provider';
import I18nProvider from '_/locales/i18n.provider';

const poppins = localFont({
  src: [
    { path: './fonts/Poppins-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Poppins-Regular.woff', weight: '400', style: 'normal' },
    { path: './fonts/Poppins-Bold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/Poppins-Bold.woff', weight: '700', style: 'normal' },
    { path: './fonts/Poppins-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/Poppins-SemiBold.woff', weight: '600', style: 'normal' },
    { path: './fonts/Poppins-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Poppins-Medium.woff', weight: '500', style: 'normal' },
    { path: './fonts/Poppins-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/Poppins-Light.woff', weight: '300', style: 'normal' },
    { path: './fonts/Poppins-Thin.woff2', weight: '100', style: 'normal' },
    { path: './fonts/Poppins-Thin.woff', weight: '100', style: 'normal' },
    {
      path: './fonts/Poppins-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    { path: './fonts/Poppins-ExtraLight.woff', weight: '200', style: 'normal' },
  ],
  variable: '--font-poppins',
  weight: '400 700',
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
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.variable}`}>
        <CustomProvider>
          <I18nProvider>{children}</I18nProvider>
        </CustomProvider>
      </body>
    </html>
  );
}
