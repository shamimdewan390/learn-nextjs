import Link from "next/link"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor:"rgb(174, 172, 172)"}}>
          <ul>
            <li>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </header>
        {children}
        
        <footer style={{backgroundColor: "rgb(174, 172, 172)"}}>
          <h1>Footer</h1>
        </footer>
        </body>
    </html>
  )
}
