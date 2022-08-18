import "./categoryPreview.scss"
import React from 'react'
import ProductCard from "../product-card/ProductCard"
import { Link } from "react-router-dom"

const CategoryPreview = ({ title, products }) => {
      return (
            <div className="category-preview-container">
                  <h2>
                        
                        <span className="title">
                              <Link to={`/shop/${title}`}>
                                    {title.toUpperCase()}
                              </Link>
                              </span>
                  </h2>
                  <div className="preview">
                        {
                              products.filter((_, idx) => idx < 4)
                                    .map((product) => (

                                          < ProductCard key={product.id} title={title} product={product} />
                                    ))
                        }
                  </div>
            </div>
      )
}

export default CategoryPreview