import Axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

export const baseApi = setupCache(
  Axios.create({ baseURL: import.meta.env.VITE_API_URL })
)
