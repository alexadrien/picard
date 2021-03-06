export type Food = {
  name: string;
  duration: number;
  nbOfFlip: number;
};

export type FoodList = Array<Food>;

export type Instruction = {
  date: Date;
  name: string;
};
