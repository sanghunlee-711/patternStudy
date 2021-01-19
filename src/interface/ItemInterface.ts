export interface ItemInterface {
  title?: string;
  typedValue: string;
  id: number;
  check?: boolean;
  todoChecking?: boolean;
}

export type ItemListInterFace = Array<ItemInterface> | undefined | null;
