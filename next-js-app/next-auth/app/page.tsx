
import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut } from "next-auth/react";




export default async function Home() {
    const session = await getServerSession();
  return (
    <div>
      {JSON.stringify(session)}
    </div>
  );
}

interface buttonProps{
    onClick: ()=>void;
    text: string;
    user?: string;
    

}

function Button({onClick,text,user}:buttonProps){
  return <div className="h-screen text-2xl flex flex-col gap-4 items-center justify-center font-bold">
    {
      text == "Logout" && <div>Welcome,{user}</div>
    }
  <button onClick={onClick} className="px-4 py-2 border rounded-2xl cursor-pointer hover:scale-105 transition-all duration-150" >{text}</button>
    </div>
}
