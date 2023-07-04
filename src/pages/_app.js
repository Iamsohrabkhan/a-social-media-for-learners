import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <section className='[&>*]:animate-fade'>
  <Component {...pageProps} />
  </section>
  <Footer/>
  </>
}
