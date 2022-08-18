import "./category.scss"
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../product-card/ProductCard"
const Category = () => {
      const { categories } = useContext(CategoriesContext)
      const { category } = useParams()
      const [products, setProducts] = useState(categories[category])
      useEffect(() => {
            setProducts(categories[category])
      }, [category, categories])
      return (
            <>
                  <h2 className="category-title">{category}</h2>
                  <div className="category-container">
                        {
                              products && products.map(product => (
                                    <ProductCard product={product} key={product.id} />
                              ))
                        }</div>
            </>

      )
}

export default Category