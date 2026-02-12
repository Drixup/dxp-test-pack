


export type Ref<T extends { id: string }> = Pick<T, 'id'> & Partial<Omit<T, 'id'>>;

export interface SchemaKey_I {
  id: string;
  created_at?: Date;
  updated_at?: Date;
}

export enum Currency_E {
  USD = "USD",
  BS = "BS",
  COP = "COP",
}