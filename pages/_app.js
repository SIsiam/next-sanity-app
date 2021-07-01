import '../styles/globals.css'
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <div className="">
        <Link href="/">
          <a>Coder</a>
        </Link>
      </div> */}
      <main>
      <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
