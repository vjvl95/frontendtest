import './App.css';
import Header from './component/Header';
import ListTable from './component/ListTable';
import { useEffect, useState } from 'react';

export default function App() {
  const [searchCategory, setSearchCategory] = useState('all');
  const [productList, setProductList] = useState<any>([]);
  const getDataAPI = async () => {
    const requestURL = 'https://dummyjson.com/products?limit=50';
    const res = await fetch(requestURL);
    const result = await res.json();
    setProductList(result.products);
  };

  useEffect(() => {
    getDataAPI();
    console.log(productList);
  }, []);
  return (
    productList && (
      <div className='container'>
        <Header
          searchCategory={searchCategory}
          setSearchCategory={setSearchCategory}
        />
        gssdf
        <ListTable productList={productList}></ListTable>
      </div>
    )
  );
}
