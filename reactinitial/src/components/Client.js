


const Client = ({data})=>{

console.log(data)
  return(

    <>
<h1>{data.name}</h1>
{data.pets.map(pet=> <p>{pet.name}</p>)}

    </>
  )
}

export default Client


    // <h1>{responseData.name}</h1>
    // {responseData.pets.map(pet => <p>pet.name</p>)}
    