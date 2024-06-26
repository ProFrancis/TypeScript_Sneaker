/* 
Cette dependences ets un outil qui permet de faciliter l'utilisation de redux.
*/
import { configureStore } from "@reduxjs/toolkit";

import Sneakers from "./reducers/sneakers";

/* 
CONFIGUREsTORE PERMET DE CRÉER LE STORE plus simplement contrairement aux version précédentes de redux.

cette methode reçoit un objet en paramètre avec une propriété reducer qui utilise automatiquement combinerReducer.

La fonction configureStore se connecte automatiquement au DevTools

*/

export default configureStore({
  reducer: {
    sneakers: Sneakers,
  },
});
