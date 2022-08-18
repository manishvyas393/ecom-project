import React from 'react'
import DirectoryItem from '../directory-item/Directorytem'
import "./directory.scss"
const categories = [
      {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
            "id": 4,
            "title": "womens",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
            "id": 5,
            "title": "mens",
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
      }
]
const Directory = () => {
      return (
            <div className="categories-container">
                  {
                        categories.map(category => (
                              <DirectoryItem category={category} />
                        ))
                  }

            </div>
      )
}

export default Directory