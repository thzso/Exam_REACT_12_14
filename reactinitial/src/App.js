import React, { useEffect, useState } from "react"
// import getData from "./api/getData"
import axios from "axios"
import Client from "./components/Client"

const App = () => {

  const[searchValue, setSearchValue] = useState("")
  const[responseData, setResponseData] =useState(null)
  
console.log(searchValue)


const handleClick= ()=>{
 


const getData = async () => {
 
  const data = await axios(
    `https://demoapi.com/api/vet/clients?search=${searchValue}`
  );
  setResponseData(data.data)
  console.log(data.data.name)

 console.log(responseData)
};
getData()

}





  return (
    <div>
      <h1>Veterinarian admin - client</h1>

    <input
    onChange={(e)=> setSearchValue(e.target.value)}
    value={searchValue}
    >

    </input>

    <button
    onClick={handleClick}
    >Search
    </button>


    {responseData && responseData.map((data)=>{
      return <Client data={data} />
    })}
    

   





    </div>

  
  )
}

export default App
