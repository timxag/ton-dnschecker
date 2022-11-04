export type DHTDataType = {
  idx: number;
  ip: string;
  ip_int: number;
  port: number;
  key: string;
  is_online: string;
};
export type LSDataType = {
  idx: number;
  ip: string;
  ip_int: number;
  port: number;
  key: string;
  is_online: string;
};

export type DHTResolvedType = {
  ip: string | null;
  port: number | null;
};

export type LSResolvedType = {
  adnl: string | null;
};
