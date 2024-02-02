import Link from "next/link"

const LinkPage = () => {
    const id = 2;
    return (
        <>
            <div className="m-2">
                <div className="m-2 p-2">
                    <Link href="/admin/dashboard" className="bg-blue-500 p-2 rounded-md  m-2">
                        Go to Admin Dashboard
                    </Link>
                </div>
                <hr />
                <div className="m-2 p-2">
                    <Link href={`/user/${id}`} className="bg-blue-500 p-2 rounded-md  m-2">
                        user page
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LinkPage
