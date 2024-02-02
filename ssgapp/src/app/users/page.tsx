import Link from "next/link";
import { fetchData } from "../../../service/fetchData"

const page = async () => {
    const respoonce = await fetchData();
    console.log(respoonce)
    return (
        <div>
            <ol>
                {
                    respoonce.map((data: any) => (
                        <li key={data.postId} className="hover:bg-blue-200 p-2 m-2 overflow-hidden">
                            <Link href={`users/${data.id}`}>
                                {data.id}.{data.name}
                            </Link>

                        </li>
                    ))
                }
            </ol>

        </div>
    )
}

export default page
