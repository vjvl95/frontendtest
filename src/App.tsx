import './App.css';
import Header from './component/Header';
import ListTable from './component/ListTable';
import { useEffect, useState } from 'react';
import React from 'react';
import Pagination from './component/Pagination';
import { useSelector } from 'react-redux';
import { selectQueryParams } from './store/store';

import isSessionExistence from './utils/isSessionExistence';
import { iteratorSymbol } from 'immer/dist/internal';
export default function App() {
  const [productList, setProductList] = useState<any>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const searchWord = useSelector(selectQueryParams)[2];
  const filter = useSelector(selectQueryParams)[3];

  const [storedSearchWord, storedFilter] = isSessionExistence({
    searchWord,
    filter,
  });

  const getDataAPI = async () => {
    let requestURL = '';
    if (storedFilter === 'total' && storedSearchWord !== '') {
      requestURL = `https://dummyjson.com/products/search?q=${storedSearchWord}&limit=100&`;
    } else {
      requestURL = 'https://dummyjson.com/products?limit=100';
    }

    const res = await fetch(requestURL);
    const result = await res.json();
    let fiterArray = [];

    if (storedFilter !== 'total') {
      if (storedFilter === 'brand') {
        fiterArray = result.products.filter((item: any) =>
          item.brand.includes(storedSearchWord)
        );
      } else if (storedFilter === 'title') {
        fiterArray = result.products.filter((item: any) =>
          item.title.includes(storedSearchWord)
        );
      } else if (storedFilter === 'description') {
        fiterArray = result.products.filter((item: any) =>
          item.description.includes(storedSearchWord)
        );
      }
      setProductList(fiterArray);
      setTotalCount(fiterArray.length);
    } else {
      setProductList(result.products);
      setTotalCount(result.total);
    }
  };
  useEffect(() => {
    getDataAPI();
  }, [storedSearchWord, storedFilter]);
  return (
    <div className='container'>
      <Header />
      <section className='totalsection'>
        검색된 데이터 : {totalCount} 건
      </section>
      <ListTable productList={productList}></ListTable>
      <Pagination total={totalCount} />
    </div>
  );
}
