import React from 'react';
import { useSelector } from 'react-redux';
import './ListTable.css';
import { selectQueryParams } from '../store/store';

import { List, Product } from '../types/types';

export default function ListTable({ productList, Loading }: List) {
  const limit = useSelector(selectQueryParams)[0];
  const page = useSelector(selectQueryParams)[1];
  const offset = (page - 1) * limit;
  console.log(productList);
  return (
    <div className='tablecontainer'>
      {Loading ? (
        <div className='loading'>LOADING......</div>
      ) : productList.length === 0 ? (
        <div className='nodata'>데이터가 존재하지 않습니다.</div>
      ) : (
        <table style={{ width: '100%' }}>
          <thead className='tablehead'>
            <tr>
              <th>상품번호</th>
              <th>상품명</th>
              <th>브랜드</th>
              <th>상품내용</th>
              <th>가격</th>
              <th>평점</th>
              <th>재고</th>
            </tr>
          </thead>

          <tbody className='tablebody'>
            {productList.slice(offset, offset + limit).map((v: Product) => {
              return (
                <tr className='tableItem'>
                  <td>{v.id}</td>
                  <td>{v.title}</td>
                  <td>{v.brand}</td>
                  <td>
                    {v.description.length > 40
                      ? v.description.slice(0, 40) + '....'
                      : v.description}
                  </td>
                  <td>{v.price}</td>
                  <td>{v.rating}</td>
                  <td>{v.stock}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
