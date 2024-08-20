import { IField } from "./IField";
import { IWork } from "./IWork";

export interface ICategory {
    id: number;
    name: string;
    fields: IField[];
    works: IWork[]
}