import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Sneaker } from "../../interfaces/sneaker";

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
    FETCH_START: (draft: initialSneaker) => {
      draft.loading = true
    }, 
    FETCH_SUCCES: (draft: initialSneaker, actions: PayloadAction<Sneaker[]> ) => {
      draft.loading = false
      draft.data = actions.payload
    },
    FETCH_FAILURE: (draft: initialSneaker) => {
      draft.loading = false
      draft.error = true
    }
  }
})

export const {
  FETCH_START,
  FETCH_SUCCES,
  FETCH_FAILURE
} = Sneakers.actions

export default Sneakers.reducer
