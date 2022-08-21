import React from 'react'
import { useSelector } from 'react-redux'
import CategoryPreview from '../../components/category-preview/CategoryPreview'
import Spinner from '../../components/spinner/spinner'
import { categoriesSelector, selectCategoriesIsLoading } from '../../store/categories/category.selectors'
const CategoryPreviews = () => {
      const categories = useSelector(categoriesSelector)
      const isLoading=useSelector(selectCategoriesIsLoading)
      return (
            <>
                  {
                        isLoading?<Spinner/>:
                        Object.keys(categories).map(title => {
                              const products = categories[title]
                              return <CategoryPreview key={title} title={title} products={products} />
                        })
                  }
            </>

      )
}
export default CategoryPreviews