import { ICategory } from './ICategory'

export interface IField {
  id: string
  name: string
  category?: ICategory
}
