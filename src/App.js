import './styles/style.css';
import Home from "./home/home";

function App() {

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

/*

TODO:
- Smooth transitions: https://stackoverflow.com/questions/41030959/react-smooth-transition-between-different-states-in-a-component
- Correct color in style.css
- Hosting
- Put stuff on DB/Cloud (Cloud function et cie pour caller la DB)
- CD/CI
- Check home.js and add performance

Hosting:
- Cloud Run -> container qui contient le code. Voir les tuto et détails containers. Checker pour domain name et cie (voir Cloud Domains).
- Variable d'environnement = API key
- Enlever les informations personnelles du domain name pour pas me lier directement avec.
- Checker si ça marche en ligne.
- Firebase config, init l'app (voir tuto et cie). Paramètre du projet. Après voir comment je peux utiliser avec axios.
- Commencer par faire le test avec email.

 */
