import { takeLatest, all, call, put } from "redux-saga/effects"
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase"
import { fetchCategoriesSuccess,fetchCategoriesFailed } from "./category.action"
import CATEGORIES_TYPES from "./category.types"
export function* fetchCategoriesAsync(){
            try {
                  const categories = yield call(getCategoriesAndDocuments,"categories")
                 yield put(fetchCategoriesSuccess(categories))
            } catch (error) {
                  yield put(fetchCategoriesFailed(error))
            }
}
export function* onfetchCategories() {
      yield takeLatest(CATEGORIES_TYPES.FETCH_CATEGORIES_START,fetchCategoriesAsync)
}
export function* categoriesSaga() {
      yield all([call(onfetchCategories)])
}