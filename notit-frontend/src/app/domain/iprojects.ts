import { IUser } from './iuser';
import { ITask } from './itasks';

export interface IProject {
  id: string;
  title: string;
  name: string;
  users: IUser[];
  tasks: ITask [];
}
