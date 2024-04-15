import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Sneaker } from "../../interfaces/sneaker";

type PayloadDetail = { 
  sneakerData: Sneaker[],
  idNumber: number
}

type initialSneaker = {
  data: Sneaker[];
  loading: boolean | null;
  error: boolean
}

const initialState: initialSneaker = {
  data: [],
  loading: null,
  error: false
} 

export const Sneakers = createSlice({
  name: "Sneakers",
  initialState,
  /* 
    C'EST ICI QUE LES "REDUCERS" sont définis.
    les "reducers" sont des fonctions qui decrivent comment l'état de l'application change en réponse à des actions.
    Dans ce cas, trois "reducers" sont definis:
    FETCH_START, FETCH_SUCCES et FETCH_FAILURE 
  */
  reducers: {
    FETCH_START: (store: initialSneaker) => {
      store.loading = true
    }, 
    FETCH_SUCCES: (store: initialSneaker, actions: PayloadAction<Sneaker[]> ) => {
      store.loading = false
      store.data = actions.payload
    },
    FETCH_SUCCES_DETAIL:  (store: initialSneaker, actions: PayloadAction<PayloadDetail> ) => {
      store.loading = false      
      store.data = [actions.payload.sneakerData[actions.payload.idNumber]]
    },
    FETCH_FAILURE: (store: initialSneaker) => {
      store.loading = false
      store.error = true
    }
  }
})

export const {
  FETCH_START,
  FETCH_SUCCES,
  FETCH_SUCCES_DETAIL,
  FETCH_FAILURE
} = Sneakers.actions

export default Sneakers.reducer
