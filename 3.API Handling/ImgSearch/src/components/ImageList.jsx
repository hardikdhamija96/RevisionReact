import React from 'react'

const ImageList = ({data}) => {
  return (
    <div>
        <img src={data.urls.full} alt="" style={{ height:400}}/>
        data: {data.id}
    </div>
  )
}

export default ImageList