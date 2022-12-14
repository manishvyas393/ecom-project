import {
      BackgroundImage,
      Body,
      DirectoryItemContainer,
} from "./directoryitem.styles"
import React from 'react'
import { Link } from "react-router-dom"

const DirectoryItem = ({ category }) => {
      const { id, title, imageUrl } = category
      return (

            <DirectoryItemContainer key={id}>
                  <BackgroundImage imageUrl={imageUrl} />
                  <Body>
                        <Link to={`/shop/${title}`}>
                              <h2>{title}</h2>
                              <p>Shop Now</p>
                        </Link>
                  </Body>
            </DirectoryItemContainer >

      )
}

export default DirectoryItem