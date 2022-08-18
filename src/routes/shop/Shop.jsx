import { Route, Routes } from 'react-router-dom'
import Category from '../../components/category/category'
import CategoryPreview from "../category-preview/CategoryPreview"
import "./shop.scss"
const Shop = () => {
      return (
            <Routes>
                  <Route index element={<CategoryPreview />} />
                  <Route path=':category' element={<Category />} />
            </Routes>
      )
}

export default Shop