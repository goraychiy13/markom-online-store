export type TypeLoginPage = {
  pageTitle: string;
  inputNames: {
    type: string;
    name: string;
  }[];
  buttons: {
    type: string;
    path: string;
    name: string;
  }[];
};

export type TypeSelectOptions = {
  type: string;
  value: string;
};
