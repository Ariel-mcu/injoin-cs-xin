import React from 'react';
import './index.scss';
import { FaSortAmountDownAlt } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
// import { Form, Input } from 'antd';

import FePage2Header from '../../../components/FePage2Header';

const Production = () => {
  const page2HeaderInfo = {
    isProduct: true,
    sectionBg: 'prolist_background.png',
    subTitle: {
      isShow: true,
      subName: 'Flagship product',
      subContent: '38.0%  750ml',
    },
    majorTitle: {
      contents: ['About Don Julio', 'Blanco Tequila'],
      href: '',
    },
    prdImg: 'Flagship_product.png',
    navs: [
      {
        name: '基酒',
        href: '',
      },
      {
        name: '副材料',
        href: '',
      },
      {
        name: '工具',
        href: '',
      },
      {
        name: '酒杯',
        href: '',
      },
    ],
  };

  const { isProduct, sectionBg, subTitle, majorTitle, prdImg, navs } = page2HeaderInfo;
  return (
    <>
      <FePage2Header isProduct={isProduct} sectionBg={sectionBg} subTitle={subTitle} majorTitle={majorTitle} prdImg={prdImg} navs={navs} />
      <div className="prd-content">
        <div className="container">
          <div className="prd-total">
            <span>副材料</span>
            <span>/</span>
            <span>共16件商品</span>
          </div>
          <div className="prd-sel">
            <div className="prd-sel-phone">
              <button className="prd-sel-btn">
                <FaSortAmountDownAlt className="prd-sel-btn-icondown" />
                暢銷商品
                <FaChevronRight className="prd-sel-btn-iconright" />
              </button>
              <button className="prd-sel-btn">
                <FaSortAmountDownAlt className="prd-sel-btn-icondown" />
                進階篩選
                <FaChevronRight className="prd-sel-btn-iconright" />
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* <div className="prd-sel-pc">
            <Form className="prd-sel-pc-form">
              <Form.Item type="string">
                <Input className="prd-sel-pc-input" type="text" placeholder="search" />
              </Form.Item>
            </Form>
           
          </div> */}
          {/* <div>
            <form className="prd-search-form">
              <label className="prd-search-label" for="prd-search">
                <input type="search" id="prd-search" placeholder="search" name="q" />
              </label>
            </form>
          </div> */}
          <form className="prd-search-form d-flex">
            <input className="prd-search-label form-control form-control-sm me-2" type="search" placeholder="Search" />
            <button className="btn prd-sel-pc-btn" type="submit">
              搜尋
            </button>
          </form>
          <div className="prd-sel-pc">
            <div>
              <select value="produtlist" className="prd-sel-pcname mx-2 px-2">
                <option value="">威士忌</option>
              </select>
              <select value="produtlist" className="prd-sel-pcname mx-2 px-2">
                <option value="">蘇格蘭威士忌</option>
              </select>
            </div>
            <div>
              <span>依</span>
              <select value="produtlist" className="prd-sel-pcname mx-2 px-2">
                <option value="">價格高到低</option>
              </select>
              <span>排序</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Production;
