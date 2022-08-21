import "./category.scss"
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ProductCard from "../product-card/ProductCard"
import Spinner from "../spinner/spinner"
import { categoriesSelector, selectCategoriesIsLoading } from "../../store/categories/category.selectors"
import { useSelector } from "react-redux"
const Category = () => {
      const categories = useSelector(categoriesSelector)
      const isLoading = useSelector(selectCategoriesIsLoading)
      const { category } = useParams()
      const [products, setProducts] = useState(categories[category])
      useEffect(() => {
            setProducts(categories[category])
      }, [category, categories])
      return (
            <>
                  <h2 className="category-title">{category}</h2>
                  {
                        isLoading ? <Spinner /> :
                              <div className="category-container">
                                    {
                                          products && products.map(product => (
                                                <ProductCard product={product} key={product.id} />
                                          ))
                                    }
                              </div>
                  }

            </>

      )
}

export default Category