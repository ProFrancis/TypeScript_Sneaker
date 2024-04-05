import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// - Actions
import * as ACTIONS from "../redux/reducers/sneakers.ts"

// - Interface & Type 
import { Sneaker, RootState } from '../interfaces/sneaker.ts'

// - Service 
import { allSneakers } from '../service/slector/sneaker.selector.ts'

// - Data
import Data from '../data.json'

function Home() {

  const dispatch = useDispatch();  
  const sneakerData = Data as Sneaker[]
  const store: Sneaker[] = useSelector((state: RootState) => allSneakers(state))

  useEffect(() => {
    dispatch(ACTIONS.FETCH_START());    
    const fetchSneakers = async (): Promise<void> => {
      try{
        // const data = await axios.get(URL DE L API) //
        dispatch(ACTIONS.FETCH_SUCCES(sneakerData))
      }catch(e){
        console.log(e);
        dispatch(ACTIONS.FETCH_FAILURE())
      }
    } 
    fetchSneakers()
  }, [])

  return (
    <div>
        {store.map((sneaker: Sneaker, index: number) => (
          <div key={index}>
            <h2>{sneaker.name}</h2>
            <img 
              src={sneaker.picture[0].pic1}   
              width={400}
            />
            <p>{sneaker.price} €</p>
          </div>
        ))}
    </div>
  )
}

export default Home