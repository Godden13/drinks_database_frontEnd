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

export function getDrinks() {
  return httpClient.get(`drinks`).then(({ data}) => data)
}

export function getIngredients() {
  return httpClient.get('ingredients').then(({ data }) => data)
}

export function getCategories() {
  return httpClient.get('categories').then(({ data }) => data)
}

export function getGlasses() {
  return httpClient.get('glasses').then(({ data }) => data)
}
