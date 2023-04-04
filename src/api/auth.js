import { httpClient } from './axios'

export function register(user) {
 return httpClient.post("users", user)
}

export function registerDrinks(drinks) {
  return httpClient.post("drinks ", drinks)
}

export function registerCategories(categories) {
  return httpClient.post("categories ", categories)
}

export function registerIngredients(ingredients) {
  return httpClient.post("ingredients ", ingredients)
}

export function login(username, password) {
  return httpClient.post("login", { username, password});
}

export function getCurrentUser() {
  return httpClient.get("current-user").then(({ data }) => data);
}

export function updateCurrentUser(data) {
  return httpClient.patch(`users/${data.id}`, data);
}

export function updateCurrurrentDrink(data) {
  return httpClient.patch(`drinks/${data.id}`, data);
}

export function updateCurrentCategory(data) {
  return httpClient.patch(`categories/${data.id}`, data);
}

export function updateCurrentIngredient(data) {
  return httpClient.patch(`ingredients/${data.id}`, data);
}

export async function getDrinks() {
  return await httpClient.get(`drinks`).then(({ data}) => data)
}

export async function getIngredients() {
  return await httpClient.get('ingredients').then(({ data }) => data)
}

export async function getCategories() {
  return await httpClient.get('categories').then(({ data }) => data)
}

export async function getGlasses() {
  return await httpClient.get('glasses').then(({ data }) => data)
}
