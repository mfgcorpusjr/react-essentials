export type CoreConcept = {
  image: string;
  title: string;
  description: string;
};

export type Example = {
  title: string;
  description: string;
  code: string;
};

export type Examples = {
  [key: string]: Example;
};
