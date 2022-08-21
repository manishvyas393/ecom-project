import USER_ACTION_TYPE from "./user.types"
const initial_state = {
      currentUser: null,
      isLoading: false,
      error:null
}
export const userReducer = (state = initial_state, action) => {
      const { type, payload } = action
      console.log(type)
      switch (type) {
            case USER_ACTION_TYPE.SIGN_IN_SUCCESS:
                  return {
                        ...state,
                        currentUser: payload
                  }
            case USER_ACTION_TYPE.SIGN_OUT_SUCCESS:
                  return { ...state, currentUser: null };
            case USER_ACTION_TYPE.SIGN_OUT_FAILED:
            case USER_ACTION_TYPE.SIGN_UP_FAILED:
            case USER_ACTION_TYPE.SIGN_IN_FAILED:
                  return {
                        ...state,
                        error:payload
                  }
            default:
                  return state;
      }
}
