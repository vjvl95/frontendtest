import './App.css';
import Header from './component/Header';
import ListTable from './component/ListTable';
import { useEffect, useState } from 'react';
import React from 'react';
import Pagenation from './component/Pagenation';

export default function App() {
  const [searchCategory, setSearchCategory] = useState('all');
  const [productList, setProductList] = useState<any>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const getDataAPI = async () => {
    const requestURL = `https://dummyjson.com/products?limit=${limit}&skip=${
      limit * (page - 1)
    }`;
    const res = await fetch(requestURL);
    const result = await res.json();
    setProductList(result.products);
    setTotalCount(result.total);
  };

  useEffect(() => {
    getDataAPI();
  }, [page, limit]);
  return (
    <div className='container'>
      <Header
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
      />
      <section className='totalsection'>
        검색된 데이터 : {totalCount} 건
      </section>
      <ListTable productList={productList}></ListTable>
      <Pagenation
        total={totalCount}
        limit={limit}
        setLimit={setLimit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
