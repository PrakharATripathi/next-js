import Adduser from "@/components/adduser";
import DisplayUser from "@/components/displayuser";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Adduser/>
    <hr />
    <DisplayUser/>
   </> 
  );
}
