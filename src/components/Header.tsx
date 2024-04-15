// Importation des composants Link et Outlet de 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'

// Déclaration du composant Header
const Header = () => {
  return (
    <>
      {/* // Déclaration de la navigation */}
      <nav>
        {/* // Déclaration de la liste des liens de navigation */}
        <ul>
          {/* // Déclaration d'un élément de la liste */}
          <li>
            {/* // Déclaration d'un lien vers la page d'accueil */}
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      {/* // Déclaration de la section qui affiche le contenu de la page actuelle */}
      <section>
        {/* // Outlet pour afficher le contenu de la page actuelle */}
        <Outlet />
      </section>
    </>
  )
}

// Export du composant Header pour pouvoir l'utiliser dans d'autres fichiers
export default Header
