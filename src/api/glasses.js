import { httpClient } from './axios'

export async function getGlasses() {
  return await httpClient.get('glasses').then(({ data }) => data)
}
