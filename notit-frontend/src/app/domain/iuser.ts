import { INotes } from './inotes';
import {INotebook} from './inotebooks';

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: String;
  notes: INotes[];
  notebooks: INotebook[];
  token: string;
}
