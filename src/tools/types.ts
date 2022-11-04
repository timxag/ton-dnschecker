export type DataType = {
  idx: number;
  ip: string;
  port: number;
  key: string;
  is_online: string;
};

export type ResolvedType = {
  ip: string | null;
  port: number | null;
};
