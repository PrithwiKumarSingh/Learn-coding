import axios from "axios"

export default async function({params}:any){
    const slug = (await params).blogId
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    return(
        <div>
            <div>
                Page {slug}
            </div>
            <div className="text-4xl text-white font-bold">
                {
                    response.data.title
                }
            </div>
            <div className="text-xl font-semibold">
                {
                    response.data.body
                }
            </div>
        </div>
    )
}
