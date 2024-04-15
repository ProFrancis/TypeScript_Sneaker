// Importation des modules React et des hooks nécessaires
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Importation des actions de Redux
import * as ACTIONS from "../redux/reducers/sneakers.ts"

// Importation des interfaces et types
import { Sneaker, RootState } from '../interfaces/sneaker.ts'

// Importation des services
import { allSneakers } from '../service/slector/sneaker.selector.ts'

// Importation des données
import Data from '../data.json'
import { Link } from 'react-router-dom'

// Définition du composant Home
function Home() {

  // Utilisation du hook useDispatch pour gérer les actions de Redux
  const dispatch = useDispatch();

  // Conversion des données du fichier json en tableau de Sneaker
  const sneakerData = Data as Sneaker[]

  // Utilisation du hook useSelector pour sélectionner une partie de l'état de Redux
  const store: Sneaker[] = useSelector((state: RootState) => allSneakers(state))

  // Utilisation du hook useEffect pour gérer les effets de bord
  useEffect(() => {
    // Dispatch de l'action de démarrage de la récupération des données
    dispatch(ACTIONS.FETCH_START());

    // Fonction asynchrone pour récupérer les données des sneakers
    const fetchSneakers = async (): Promise<void> => {
      try{
        // Dispatch de l'action de succès de la récupération des données
        dispatch(ACTIONS.FETCH_SUCCES(sneakerData))
      }catch(e){
        // Affichage de l'erreur en console
        console.log(e);
        // Dispatch de l'action d'échec de la récupération des données
        dispatch(ACTIONS.FETCH_FAILURE())
      }
    }

    // Appel de la fonction pour récupérer les données
    fetchSneakers()
  }, [])

  // Rendu du composant
  return (
    <div>
        {/* Boucle sur les données du store pour afficher chaque sneaker */}
        {store && store.map((sneaker: Sneaker, index: number) => (
          <div key={index}>
            {/* Création d'un lien vers la page de détail de chaque sneaker */}
            <Link to={`/sneaker/detail/${index}`} >
              <h2>{sneaker.name}</h2>
              <img
                src={sneaker.picture[0].pic1}
                width={400}
              />
              <p>{sneaker.price} €</p>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Home
