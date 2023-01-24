import { Navbar } from '../components/navbar/Navbar';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className='bg-bkg'>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  )
}
