import React, { useState } from 'react'
import ImageList from './ImageList';

const ImageShow = ({data}) => {

    console.log(data)
    const [dummyData, setDummyData] = useState([1,2,3]);
  return (
    <div>
       { data.map((obj,ind)=>(
            <ImageList key={ind} data={obj}/>
            
        ))}
        data:{data.length}
    </div>
  )
}

export default ImageShow