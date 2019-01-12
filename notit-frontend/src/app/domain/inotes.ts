import {INotebook} from './inotebooks';

export interface INotes {
  id: string;
  title: string;
  text: string;
  lastModifiedOn: Date;
  color: string;
  notebook: INotebook;
}
