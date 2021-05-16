export type TypeInputNames = {
  type: string;
  name: string;
};

export type TypeButtons = {
  type: string;
  path: string;
  name: string;
};

export type TypeAuthPage = {
  pageTitle: string;
  inputNames: TypeInputNames[];
  buttons: TypeButtons[];
};

export type TypeSelectOptions = {
  type: string;
  value: string;
};
