export default function page(){
    return <div className="text-center flex flex-col h-screen w-[50%] text-4xl font-bold">
        <div className="text-center">Signin page</div>
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password"/>
        <button>Submit</button>
    </div>
}