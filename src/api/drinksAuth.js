import { httpClient } from './axios'

export function registerDrinks(drinks) {
  return httpClient.post("drinks ", drinks)
}

export async function getDrinks() {
  return await httpClient.get(`drinks`).then(({ data }) => data)
}

export async function getDrinksById() {
  return await httpClient.get(`drinks`).then(({data}) =>data)
}

export function updateCurrurrentDrink(data) {
  return httpClient.patch(`drinks/${data.id}`, data);
}

export function deleteCurrentDrink(data) {
  return httpClient.delete(`drinks/${data.id}`)
}