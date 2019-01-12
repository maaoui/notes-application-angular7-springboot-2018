import { INotes } from './inotes';

export interface INotebook {
  id: string;
  name: string;
  notes: INotes[];
}
