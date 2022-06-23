import Link from 'next/link';
import Head from 'next/head';
export default function Home() {
  return (
    <div >
      <Head><title>home</title> </Head>
      <div>
        <div>
          LOGO
        </div>
        <div>
          <ul>
            <li><Link href="/"><a>HOME</a></Link></li>
            <li><Link href="/product"><a>PRODUCT</a></Link></li>
            <li><Link href="/product/tech"><a>TECH</a></Link></li>
            <li><Link href="/css"><a>CSS</a></Link></li>
            <li><Link href="/about"><a>ABOUT</a></Link></li>
          </ul>
        </div>
      </div>
      <h1>wellcom to next Js app</h1>
    </div>
  )
}
