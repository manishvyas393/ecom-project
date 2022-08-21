import { takeLatest, call, put, all } from "redux-saga/effects"
import USER_ACTION_TYPE from "./user.types"
import { signInSuccess, signInFailed,signOutSuccess,signOutFailed,signUpSuccess,signUpFailed} from "./user.action"
import {
      getCurrentUser,
      createUserDocumentFromAuth,
      signInWithGoogle,
      signInAuthWithEmailAndPassword,
      signOutUser,
      createAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase"


export function* getSnapShotFromUserAuth(userAuth, additionalDetails) {
      try {
            const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
            yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
      } catch (error) {
            yield put(signInFailed(error))
      }
}

export function* isAutheticated() {
      try {
            const userAuth = yield call(getCurrentUser)
            if (!userAuth) return;
            yield call(getSnapShotFromUserAuth, userAuth)
      } catch (error) {
            yield put(signInFailed(error))
      }
}

export function* signInWithGogs() {
      try {
            const { user } = yield call(signInWithGoogle);
            yield call(getSnapShotFromUserAuth, user);
      } catch (error) {
            yield put(signInFailed(error));
      }
}

export function* signUp({ payload: { email, password, displayName } }) {
      try {
            const { user } = yield call(
                  createAuthUserWithEmailAndPassword,
                  email,
                  password
            );
            yield put(signUpSuccess(user, { displayName }));
      } catch (error) {
            yield put(signUpFailed(error));
      }
}


export function* signInWithEmail({ payload: { email, password } }) {
      try {
            const { user } = yield call(
                  signInAuthWithEmailAndPassword,
                  email,
                  password
            );
            yield call(getSnapShotFromUserAuth, user);
      } catch (error) {
            yield put(signInFailed(error));
      }
}
export function* signOut() {
      try {
            yield call(signOutUser);
            yield put(signOutSuccess());
      } catch (error) {
            yield put(signOutFailed(error));
      }
}
export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
      yield call(getSnapShotFromUserAuth, user, additionalDetails);
}
export function* onGoogleSignInStart() {
      yield takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START, signInWithGogs);
}

export function* onCheckUserSession() {
      yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isAutheticated)
}

export function* onEmailSignInStart() {
      yield takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
      yield takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
      yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
      yield takeLatest(USER_ACTION_TYPE.SIGN_OUT_START, signOut);
}

export function* userSaga() {
      yield all([
            call(onCheckUserSession),
            call(onGoogleSignInStart),
            call(onEmailSignInStart),
            call(onSignOutStart),
            call(onSignUpStart),
            call(onSignUpSuccess)
      ])
}