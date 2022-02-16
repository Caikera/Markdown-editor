export type DOC = {
  dirName: string;
  id: string;
  isFile: boolean;
  children: DOC[];
  path: string[];
};

export type GetDocsType = DOC[];

export type GetDocType = {
  content: string;
  filePath: string;
};

export type UpdateDocPayload = {
  modifyPath: string;
  newContent: string;
};
