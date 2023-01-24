import { Navbar } from '../components/navbar/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  )
}
