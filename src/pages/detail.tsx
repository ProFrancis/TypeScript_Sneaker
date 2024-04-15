// Importation des modules et hooks nécessaires depuis React et Redux
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

// Importation des actions depuis les réducteurs Redux
import * as ACTIONS from "../redux/reducers/sneakers"

// Importation de l'interface et du type pour les baskets
import { RootState, Sneaker } from '../interfaces/sneaker'

// Importation du service pour obtenir les données des baskets
import { oneSneaker } from '../service/slector/sneaker.selector'

// Importation du fichier de données
import Data from '../data.json'

// Définition du composant Détail
const Detail = () => {

  // Utilisation des hooks pour dispatcher des actions et obtenir les paramètres du routeur
  const dispatch = useDispatch();
  const { id } = useParams<{id: string}>();
  const idNumber = Number(id)

  // Conversion des données en tant que tableau de baskets
  const sneakerData = Data as Sneaker[]
  // Utilisation du hook useSelector pour sélectionner les données des baskets depuis l'état du redux
  const store: Sneaker[] = useSelector((state: RootState) => oneSneaker(state))

  // Utilisation du hook useEffect pour dispatcher l'action au chargement du composant
  useEffect(() => {
    dispatch(ACTIONS.FETCH_START());
    const fetchSneakers = async (): Promise<void> => {
      try{
        // L'appel API est commenté car l'URL de l'API n'est pas fournie
        // const data = await axios.get(URL DE L API) //
        dispatch(ACTIONS.FETCH_SUCCES_DETAIL({sneakerData, idNumber}))
      }catch(e){
        console.log(e);
        dispatch(ACTIONS.FETCH_FAILURE())
      }
    }
    fetchSneakers()
  }, [])

  // Retour du JSX pour le rendu du composant
  return (
    <div>
      Détail
{/* short-circuit evaluation Le store?.[0] vérifie déjà si store est défini et si le premier élément de store existe */}
      {store?.[0] &&
        <>
          <h2>{store[0].name}</h2>
            <img
              src={store[0].picture[0].pic1}
              width={400}
            />
            <p>{store[0].price} €</p>
        </>
      }

    </div>
  )
}

// Exportation du composant par défaut
export default Detail
