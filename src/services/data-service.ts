import { ICategory } from '@/interfaces/ICategory'
import axios, { AxiosResponse } from 'axios'

export class DataService {
  private apiUrl = 'http://localhost:3001'
  // Implement methods to fetch data from your API
  async getCategories(): Promise<ICategory[]> {
    try {
      const response: AxiosResponse<any[]> = await axios.get(`${this.apiUrl}/categories`)
      return response.data
    } catch (error) {
      console.error('Error fetching categories:', error)
      throw error
    }
  }
}
