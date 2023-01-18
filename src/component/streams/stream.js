import React from 'react'

const cards = [
  {
    id: 1,
    imgPath: require('../../images/streamImg.png'),
    gameName: "Fortnite"
  },
  {
    id: 2,
    imgPath: require('../../images/streamImg.png'),
    gameName: "Fortnite"
  },
  {
    id: 3,
    imgPath: require('../../images/streamImg.png'),
    gameName: "Fortnite"
  },
  {
    id: 4,
    imgPath: require('../../images/streamImg.png'),
    gameName: "Fortnite"
  },
]

function Stream() {
  return (
    <div>
      <div>
        <p>Stream</p>
      </div>
      <div className='flex'>
        <p className="mr-2">Live</p>
        <p className="mr-2">upcoming</p>
        <p className="mr-2">most viewed</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card,index)=>{
          return (
            <div className="bg-white rounded-lg overflow-hidden shadow-md" key={index}>
              <img src={card.imgPath} className="object-cover h-48 w-full" alt={card.gameName}/>
              <div className="p-4">{card.gameName}</div>
            </div>
          )
        })}
      </div> 
    </div>
  )
}

export default Stream
