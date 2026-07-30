

export default async function({params}:any){
    return <div className="text-3xl text-white font-bold">
        {JSON.stringify((await params).folderids)}
    </div>
}