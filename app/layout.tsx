import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'EduVerse',
  description: 'EduVerse - Your Ultimate Destination for Digital Education',
  metadataBase: new URL('https://nextjs-dashboard-iota-seven-48.vercel.app/'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="EduVerse - Your Ultimate Destination for Digital Education" />
        <meta name="keywords" content="digital education, online learning, e-learning, education platform" />
        <meta name="author" content="Geet Govind" />
        <title>EduVerse</title>
      </head>
      <body className={`${inter.className} anitialised`}>{children}</body>
      {/* <body className={`${openSans.className} anitialised`}>{children}</body> */}
    </html>
  );
}
