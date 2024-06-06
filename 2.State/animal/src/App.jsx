import { useState } from 'react'


function App() {

  const [animalCount,setAnimalCount] = useState(0);

  function handleClick(){
    let prevCount = animalCount;
    setAnimalCount(prevCount+1);
  }


  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      <p>Animal to show: {animalCount}</p>
    </>
  )
}

export default App
