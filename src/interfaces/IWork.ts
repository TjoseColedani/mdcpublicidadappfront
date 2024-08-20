import { ICategory } from './ICategory'
import { IWorkField } from './IWorkField'

export interface IWork {
  id: string
  name: string
  description: string
  category: ICategory
  workFields: IWorkField[]
}
