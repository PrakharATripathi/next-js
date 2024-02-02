import { fetchData } from "../../../../service/fetchData"

const page = async ({ params }: any) => {
    const data = await fetchData()
    const details = data.find((data: any) => Number(data.id) == Number(params.id));

    return (
        <div className="flex justify-center items-center flex-col">
            <div className="block p-2 m-2  ">Name: {details?.name}</div>
            <div className="block p-2 m-2 ">Email:{details?.email}</div>
            <div className="block p-2 m-2 ">Body:{details?.body}</div>
        </div>
    )
}

export default page


export async function generateStaticParams() {   
    const data = await fetchData()
    return data.map((data:any) => ({
        id: data.id.toString()
    }))
}
