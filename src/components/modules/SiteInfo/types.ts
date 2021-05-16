export type TypeInfo = {
  id: string;
  text: string;
};

export type TypeContent = {
  id: string;
  tag: string;
  info: TypeInfo[];
};

export type TypeSection = {
  id: string;
  title: string;
  content: TypeContent[];
};

export type TypePage = {
  header: string;
  section: TypeSection[];
};
