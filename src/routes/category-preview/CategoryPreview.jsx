import React, { useContext } from 'react'
import CategoryPreview from '../../components/category-preview/CategoryPreview'
import {CategoriesContext} from "../../contexts/categories.context"
const CategoryPreviews = () => {
      const { categories } = useContext(CategoriesContext)
      return (
            <>
                  {
                        Object.keys(categories).map(title => {
                              const products = categories[title]
                              return <CategoryPreview key={title} title={title} products={products} />
                        })
                  }
            </>

      )
}
export default CategoryPreviews