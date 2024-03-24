import { nanoid } from "nanoid";
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  START_EDITING_SERVICE,
  UPDATE_SERVICE,
  SET_SEARCH_TERM,
} from "./actionTypes";

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function startEditingService(id) {
  return { type: START_EDITING_SERVICE, payload: { id } };
}

export function updateService(id, name, price) {
  return { type: UPDATE_SERVICE, payload: { id, name, price } };
}

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});
