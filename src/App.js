import logo from './logo.svg';
import './App.css';
import Post from './post';

/*

PROPS: parametri (non vanno tra parentesi ma nel tag messo a caso)...<post autore:gino titolo: non esiste/>
tutte le varibali riconducibili a quella funzione prenderanno quel valore

*/

function App() {    //richiamo della funzion (per passare i valori come parametro basta al suo interno definire le variabili (no parentesi tonde))
  return (
    <>
      <Post autore = "mattia" titolo = "un giro nel mondo" />    
      <Post autore = "daniele" titolo = "scatola nera" />
      <Post autore = "gino" titolo = "libro giallo" />
      <Post autore = "andrea" titolo = "il cassetto nero" />
      <Post autore = "francesco" titolo = "non dirlo" />   
      <Post autore = "simone" titolo = "l tavolo che non si apre" />
    </>
  )
} 

export default App;
