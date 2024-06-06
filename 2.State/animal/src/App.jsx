import { useState } from 'react'
import { AnimalShow } from './AnimalShow';
import './App.css'

function getRandomAnimal()
{
  const animals = ['bird','cat','cow','dog','gator','horse'];

  return animals[Math.floor(Math.random() * animals.length)]
}



function App() {

  const [animals,setAnimals] = useState([]);

  function handleClick(){
    setAnimals([...animals,getRandomAnimal()]);
  };

  console.log(animals);

  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animalList'>
        {animals.map((ele,ind)=> (<AnimalShow type={ele} key={ind}/>))}
      </div>
    </div>
  )
}

export default App
