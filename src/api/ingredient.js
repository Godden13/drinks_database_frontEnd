import { httpClient } from './axios'

export async function getIngredients() {
  return await httpClient.get('ingredients').then(({ data }) => data)
}

export function updateCurrentIngredient(data) {
  return httpClient.patch(`ingredients/${data.id}`, data);
}

export function registerIngredient(data) {
  return httpClient.post('ingredients', data)
}

export function deleteingredient(data) {
  return httpClient.delete(`ingredients/${data}`)
}