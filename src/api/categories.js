import { httpClient } from './axios'

export function registerCategories(categories) {
  return httpClient.post("categories ", categories)
}

export function updateCurrentCategory(data) {
  return httpClient.patch(`categories/${data.id}`, data);
}

export async function getCategories() {
  return await httpClient.get('categories').then(({ data }) => data)
}

export function deleteCategory(data) {
  return httpClient.delete(`categories/${data.id}`, data)
}
