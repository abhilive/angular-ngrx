/* NgRx */
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { UserState } from "./user.reducer";

export const getUserFeatureState = createFeatureSelector<UserState>("users");

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);
