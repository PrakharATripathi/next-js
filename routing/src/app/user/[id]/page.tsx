const page = ({params}:any) => {
    console.log(params)
  return (
    <div>
      user id:{params.id}
    </div>
  )
}

export default page
