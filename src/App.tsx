import { useState } from 'react';
import './App.css';
import Receita from './Components/Receita/Receita';

export interface IMockReceita {
  ingredients: string[];
  preparations: string[];
  informations: string[];
}

class MockReceita implements IMockReceita {
  constructor(ingred = [""], prepa = [""], infor = [""]) {
    this.ingredients = ingred;
    this.preparations = prepa;
    this.informations = infor;
  }

  ingredients: string[];
  preparations: string[];
  informations: string[];
}

function App() {
  const [recipe, setRecipe] = useState(new MockReceita());

  function newRecipe() {
    setRecipe(new MockReceita(["tomate", "cheiro verde", "carne de porco", "batata", "cebola", "cenoura", "arroz", "macarrão", "feijão", "frango"], ["Ligar a panela e esperar a água ferver.", "Lavar os ingredientes para por na panela.", "Colocar os ingredientes na panela e tampar.", "Colocar sal a gosto.", "Desligar panela e servir as porções."], ["30 minutos"]));
  }

  return (
    <div className="App">
      <Receita recipe={recipe} />

      <button onClick={newRecipe}>nova receita</button>
    </div>
  );
}

export default App;
