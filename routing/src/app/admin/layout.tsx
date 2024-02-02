import AdminHeade from "@/components/AdminHeade"

const layout = ({ children }: any) => {
    return (
        <section>
            <AdminHeade />
            {children}
        </section>
    )
}

export default layout
