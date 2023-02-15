import React, { useState, useEffect } from 'react'


const Home = () => {

  useEffect(() => {
    fetchdata();
  }, [])
  const [Dummydata, setDummydata] = useState([]);
  
  const fetchdata = () => {
    fetch("/")
    .then( (res)=> res.json() )
    .then((response) => {
      setDummydata(response.products)
  
    })
    .catch((err) => {
      console.log(err.message)
    })
 
  }

  return (
<div>
    {Dummydata.map((e, i) => {
      return (
        <div key={i}>
          <img src={e.thumbnail} />
        </div>
      )
    })}
    </div>
  )
}

export default Home