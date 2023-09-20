import React from 'react'
// import image1 from './images/1.jpg'
// import image2 from './images/dye.jpg'
// import image3 from './images/img1.jpg'
import Picture from './Picture'
// const Images = [
//   {
//     id: 1,
//     url: image1,
//   },
//   {
//     id: 2,
//     url: image2,
//   },
//   {
//     id: 3,
//     url: image3,
//   },
// ]
const Images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1691933111771-9ab374269391?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NTE5MDczOA&ixlib=rb-4.0.3&q=80&w=800',
  },
  {
    id: 2,
    url: 'https://plus.unsplash.com/premium_photo-1683309569303-2dfc02db98c6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=601&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NTE5MDc1OQ&ixlib=rb-4.0.3&q=80&w=800',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1692834274887-7f7eef635e77?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=602&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5NTE5MDc3Nw&ixlib=rb-4.0.3&q=80&w=800',
  },
]
function Dnd() {
  return (
    <>
      <div className='pictures'>
        {Images.map((picture) => {
          return <Picture key={picture.id} url={picture.url} id={picture.id} />
        })}
      </div>
      <div className='Board'></div>
    </>
  )
}

export default Dnd
