import Link from "next/link";

export default function StudentInfo(){
  return (
    <div>
      <h1>Name: Noah Taylor</h1>
      <p>
        Github:{" "} 
        <Link href="https://github.com/NoahwTaylor/cprg306-assignments">
          My Repository
        </Link>
      </p>
    </div>
  );
}
