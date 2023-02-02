import './App.css';
import Header from './component/Header';
import ListTable from './component/ListTable';
import { useEffect, useState } from 'react';
import React from 'react';
import Pagination from './component/Pagination';
import { useSelector } from 'react-redux';
import { selectQueryParams } from './store/store';

import isSessionExistence from './utils/isSessionExistence';
import { Product } from './types/types';
import searchFilter from './utils/searchFilter';

export default function App() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [Loading, setLoadig] = useState(true);
  const searchWord = useSelector(selectQueryParams)[2];
  const filter = useSelector(selectQueryParams)[3];

  const [storedSearchWord, storedFilter] = isSessionExistence({
    searchWord,
    filter,
  });

  const getDataAPI = async () => {
    setLoadig(true);
    let requestURL = '';
    if (storedFilter === 'total' && storedSearchWord !== '') {
      requestURL = `https://dummyjson.com/products/search?q=${storedSearchWord}&limit=100&`;
    } else {
      requestURL = 'https://dummyjson.com/products?limit=100';
    }

    const res = await fetch(requestURL);
    const result = await res.json();
    let fiterArray = [];

    console.log(result);
    if (storedFilter !== 'total') {
      fiterArray = searchFilter({
        storedFilter,
        result,
        storedSearchWord,
      });
      setProductList(fiterArray);
      setTotalCount(fiterArray.length);
    } else {
      setProductList(result.products);
      setTotalCount(result.total);
    }
    setLoadig(false);
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
      <ListTable productList={productList} Loading={Loading}></ListTable>
      <Pagination total={totalCount} />
    </div>
  );
}
