import { IUser } from './iuser';
import { IProject } from './iprojects';

export interface ITask {
  id: string;
  title: string;
  name: string;
  type: IUser[];
  project: IProject;
}
