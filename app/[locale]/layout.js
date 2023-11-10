import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}




export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'}];
}


export default async function LocaleLayout({ children, params: { locale } }) {

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}