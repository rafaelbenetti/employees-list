export interface Employee {
  id?: string; 
  name: string;
  surname: string;
  workPosition: WorkPositionType;
  birthDate: Date;
}

export enum WorkPositionType {
  FullStackDeveloper = 'full-stack developer',
  FrontEndDeveloper = 'front-end developer',
  SwAdmin = 'sw admin',
  HelpDesk = 'help desk',
  ScrumMaster = 'scrum master',
  ProductManager = 'product manager'
}