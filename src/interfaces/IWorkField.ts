import { IField } from "./IField";
import { IWork } from "./IWork";

export interface IWorkField {
  id: string
  value: string;
  work: IWork
  field: IField
}
