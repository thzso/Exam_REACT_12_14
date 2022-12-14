



  const getData = async ({searchValue}) => {
    setApiData("");
    const data = await axios(
      `https://demoapi.com/api/vet/clients?search=${searchValue}`
    );
    // setApiData(data.data);
  };

  export default getData
