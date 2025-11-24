"use client"
import Link from "next/link";
import { useUserAuth } from "../../contexts/AuthContext";


export default function Page(){
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn()
  {
    try
    {
      await gitHubSignIn();
    }
    catch(error)
    {
      console.log(error);
    }
  }

  async function handleSignOut()
  {
    try
    {
      await firebaseSignOut();
    }
    catch(error)
    {
      console.log(error);
    }
  }

  if (user === null)
  {
    return(
      <div>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-8xl mt-20 font-extrabold">WELCOME!</p>
          <p className="text-4xl mt-20">PLEASE LOG-IN:</p>
          <button className="px-4 bg-blue-500 rounded-md w-md h-20 mt-20 font-bold"onClick={handleSignIn}>GITHUB LOG-IN</button>
        </div>
      </div>
    ) 
  }
  else
  {
    return(
      <div>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-8xl mt-20 font-extrabold">WELCOME!</p>
          <Link href="/week-9/shopping-list">
            <button className="px-4 bg-green-400 rounded-md w-md h-20 mt-20 font-bold">CONTINUE TO APP</button>
          </Link>  
          <button className="px-4 bg-blue-500 rounded-md w-md h-20 mt-5 font-bold"onClick={handleSignOut}>LOGOUT</button>
        </div>
      </div>
    )
  }
}