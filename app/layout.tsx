import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ishit Vasoya — Full-Stack Developer & ML Engineer',
  description:
    'Portfolio of Ishit Vasoya. Full-stack developer and ML engineer based in Denver, CO. MS Computer Science, University of Colorado Denver.',
  keywords: [
    'Full Stack Developer',
    'ML Engineer',
    'Python',
    'JavaScript',
    'React',
    'Node.js',
    'Denver',
    'Portfolio',
  ],
  openGraph: {
    title: 'Ishit Vasoya — Full-Stack Developer & ML Engineer',
    description:
      'Full-stack developer and ML engineer based in Denver, CO.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
