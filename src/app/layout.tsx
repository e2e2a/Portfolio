import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { MainNav } from '@/components/shared/nav/MainNav';
import { dashboardConfig } from '@/constant';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import MyAvatar from './components/MyAvatar';
import { GlobalStateProvider } from '@/hooks/global-tabs';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // optional: define weights you plan to use
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Portfolio Website',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} font-roboto antialiased`}>
        <div className="flex flex-col">
          <GlobalStateProvider>
            <NextThemesProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <header className="sticky top-0 z-40 border-b bg-background">
                <MainNav items={dashboardConfig.mainNav} />
              </header>
              <div className="flex flex-col lg:flex-row gap-x-3 gap-y-5 px-8 lg:px-[8%] items-center lg:items-start justify-center w-full py-10 bg-white dark:bg-black h-auto">
                <MyAvatar />
                {children}
              </div>
            </NextThemesProvider>
          </GlobalStateProvider>
        </div>
      </body>
    </html>
  );
}
