import {IProduct} from '../models/Products';

export const getTotalPoints = (data: IProduct[]) =>
  data?.reduce(
    (total, p) =>
      p.is_redemption === false ? total + p.points : total - p.points,
    0,
  );
