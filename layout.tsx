import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Baccarat Predictor',
  description: 'ทำนายผลบาคาร่าแบบเรียลไทม์',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
