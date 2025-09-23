import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="week-2" className="mr-2">
        Go to Week 2
      </Link>
      <Link href="week-3" className="mr-2">
        → Go to Week 3 
      </Link>
    </div>
  );
}
