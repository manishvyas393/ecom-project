import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";
export const CategoriesContext = createContext({
      categories: []
})
export const CategoriesProvider = ({ children }) => {
      const [categories, setCategories] = useState({})
      useEffect(() => {
            const getProducts = async () => {
                  const categoriesMap = await getCategoriesAndDocuments()
                  setCategories(categoriesMap)
            }
            getProducts()
      }, [])
      const value = { categories }
      return (
            <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
      )
}