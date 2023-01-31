import React from 'react';
import './ListTable.css';

interface item {
  id: number;
  title: string;
  brand: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
}

interface List {
  productList: any;
}

export default function ListTable({ productList }: List) {
  return (
    <div className='tablecontainer'>
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
          {productList.map((v: any) => {
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
    </div>
  );
}
