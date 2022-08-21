import CATEGORIES_TYPES from "./category.types";
import { createAction } from "../../utils/reducer/reducer.util"
export const fetchCategoriesStart = () => {
      return createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_START)
}
export const fetchCategoriesSuccess = (categories) => {
      return createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, categories)
}
export const fetchCategoriesFailed = (error) => {
      return createAction(CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, error)
}
// export const fetchCategoriesAsync = () => {
//       return async (dispatch) => {
//             dispatch(fetchCategoriesStart())
//             try {
//                   const categories = await getCategoriesAndDocuments('categories')
//                   console.log(categories)
//                   dispatch(fetchCategoriesSuccess(categories))
//             } catch (error) {
//                   dispatch(fetchCategoriesFailed(error))
//             }
//       }
// }