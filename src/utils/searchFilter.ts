import { Product } from '../types/types';

interface resultType {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

interface PropsType {
  storedFilter: string;
  result: resultType;
  storedSearchWord: string;
}

export default function searchFilter({
  storedFilter,
  result,
  storedSearchWord,
}: PropsType) {
  let fiterArray: Product[] = [];
  if (storedFilter === 'brand') {
    fiterArray = result.products.filter((item: Product) =>
      item.brand.includes(storedSearchWord)
    );
  } else if (storedFilter === 'title') {
    fiterArray = result.products.filter((item: Product) =>
      item.title.includes(storedSearchWord)
    );
  } else if (storedFilter === 'description') {
    fiterArray = result.products.filter((item: Product) =>
      item.description.includes(storedSearchWord)
    );
  }
  return fiterArray;
}
