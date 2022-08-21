import { createSelector } from "reselect"
const selectCategoryReducer = (state) => state.categories
export const selectCategories = createSelector(
      [selectCategoryReducer],
      (categoriesSlice) => {
            return categoriesSlice.categories
      }
)
export const categoriesSelector = createSelector(
      [selectCategories],
      (categories) => {
            console.log("selector 2 fired")
            return categories.reduce((acc, docSnap) => {
                  const { title, items } = docSnap
                  acc[title.toLowerCase()] = items
                  return acc
            }, {})
      }
) 
export const selectCategoriesIsLoading = createSelector(
      [selectCategoryReducer],
      (categoriesSlice) => {
            return categoriesSlice.isLoading
      }
)