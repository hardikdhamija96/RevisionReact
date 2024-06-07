import { useState } from 'react'
import SearchBar from './components/SearchBar'
import searchImage from './api';
import ImageShow from './components/ImageShow';


function App() {

  const [data,setData]=useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImage(term);
    setData(result);
  }

  return (
    <div>
      <SearchBar onSubmit = {handleSubmit}/>
      <ImageShow data={data}/>
    </div>
  )
}

export default App
