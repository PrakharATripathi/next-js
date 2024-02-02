 const getData = async() =>{
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const response =  res.json();
        return response;
 }
const DataFestching = async() => {
    const data = await getData();
    console.log(data)
  return (
    <div className=" h-screen w-screen ">
        {
            data.map((data:any, index:number)=>(
                <>
                <li>{data.title}</li>
                </>
                
            ))
        }
     
    </div>
  )
}

export default DataFestching
