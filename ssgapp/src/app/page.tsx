import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1>Statoc Site Genration</h1>
      <div className="m-auto p-2">
        <Link href="/users" className=" p-2 bg-blue-500 rounded-lg">Next</Link>
      </div>
    </main>
  )
}
