import Link from 'next/link'
export default function Home() {
  return (
    <div><center>
          Hello World
          <br/>
          <Link href="/dashboard">click here to go to dashboard</Link>
          </center></div>
  )
}