import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from '../../components/category/category'
import CategoryPreview from "../category-preview/CategoryPreview"
import { fetchCategoriesStart} from '../../store/categories/category.action'
import "./shop.scss"
import { useDispatch } from 'react-redux'
const Shop = () => {
      const dispatch = useDispatch()
      useEffect(() => {
            dispatch(fetchCategoriesStart())
      }, [dispatch])
      return (
            <Routes>
                  <Route index element={<CategoryPreview />} />
                  <Route path=':category' element={<Category />} />
            </Routes>
      )
}

export default Shop