import React from 'react';
import './index.scss';
import productimg from '../../../assets/images/fe/productList/product_1.png';
import { FaStar } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import { FaSortAmountDownAlt } from 'react-icons/fa';
// import { FaChevronRight } from 'react-icons/fa';
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
          <div className="prd-content-top">
            <div className="prd-total m-view">
              <span>副材料</span>
              <span>/</span>
              <span>共16件商品</span>
            </div>
            <div className="prd-sel-all">
              <div className="prd-sel-1">
                <select value="" className=" mx-2 px-2 prd-sel">
                  {/* <optgroup labal="基酒種類"></optgroup> */}
                  <option value="" className="prd-sel-option">
                    威士忌
                  </option>
                </select>
                <select value="" className="mx-2 px-2 prd-sel">
                  <option value="" className="prd-sel-option">
                    蘇格蘭威士忌
                  </option>
                </select>
                <div className="prd-sel-2 d-flex align-items-end  mt-1">
                  <span>依</span>
                  <select value="" className="mx-2 px-2 prd-sel">
                    <option value="" className="prd-sel-option">
                      價格高到低
                    </option>
                  </select>
                  <span>排序</span>
                </div>
              </div>
            </div>
            <form className="prd-search-form d-flex">
              <input className="prd-search-label form-control form-control-sm me-1" type="search" placeholder="Search" />
              <button className="btn prd-search-btn" type="submit">
                搜尋
              </button>
            </form>
          </div>

          <div class=" prd-card-all row row-cols-2 row-cols-md-4 ">
            <div class="col">
              <div className="prd-card card ">
                <div className="prd-card-image">
                  <Link to="/">
                    <img src={productimg} alt="" />
                  </Link>
                </div>
                <div className="prd-card-body card-body ">
                  <div className="prd-card-title card-title">
                    <Link to="/">金黑波本威士忌</Link>
                  </div>
                  <div className="prd-card-price">NT.550</div>
                  <div className="prd-card-footer card-footer">
                    <div className="prd-card-reveiw">
                      <FaStar className="prd-card-icon-star" />
                      4.6
                    </div>
                    <div className="prd-card-icon">
                      <FaRegHeart className="prd-card-icon-Heart" />
                      <FaCartPlus className="prd-card-icon-cart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="prd-card card ">
                <div className="prd-card-image">
                  <Link to="/">
                    <img src={productimg} alt="" />
                  </Link>
                </div>
                <div className="prd-card-body card-body ">
                  <div className="prd-card-title card-title">
                    <Link to="/">金黑波本威士忌</Link>
                  </div>
                  <div className="prd-card-price">NT.550</div>
                  <div className="prd-card-footer card-footer">
                    <div className="prd-card-reveiw">
                      <FaStar className="prd-card-icon-star" />
                      4.6
                    </div>
                    <div className="prd-card-icon">
                      <FaRegHeart className="prd-card-icon-Heart" />
                      <FaCartPlus className="prd-card-icon-cart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="prd-card card ">
                <div className="prd-card-image">
                  <Link to="/">
                    <img src={productimg} alt="" />
                  </Link>
                </div>
                <div className="prd-card-body card-body ">
                  <div className="prd-card-title card-title">
                    <Link to="/">金黑波本威士忌</Link>
                  </div>
                  <div className="prd-card-price">NT.550</div>
                  <div className="prd-card-footer card-footer">
                    <div className="prd-card-reveiw">
                      <FaStar className="prd-card-icon-star" />
                      4.6
                    </div>
                    <div className="prd-card-icon">
                      <FaRegHeart className="prd-card-icon-Heart" />
                      <FaCartPlus className="prd-card-icon-cart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="prd-card card ">
                <div className="prd-card-image">
                  <Link to="/">
                    <img src={productimg} alt="" />
                  </Link>
                </div>
                <div className="prd-card-body card-body ">
                  <div className="prd-card-title card-title">
                    <Link to="/">金黑波本威士忌</Link>
                  </div>
                  <div className="prd-card-price">NT.550</div>
                  <div className="prd-card-footer card-footer">
                    <div className="prd-card-reveiw">
                      <FaStar className="prd-card-icon-star" />
                      4.6
                    </div>
                    <div className="prd-card-icon">
                      <FaRegHeart className="prd-card-icon-Heart" />
                      <FaCartPlus className="prd-card-icon-cart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="prd-sel">
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
          </div> */}

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
          {/* <form className="prd-search-form d-flex">
            <input className="prd-search-label form-control form-control-sm me-2" type="search" placeholder="Search" />
            <button className="btn prd-search-btn" type="submit">
              搜尋
            </button>
          </form> */}
        </div>
      </div>
    </>
  );
};
export default Production;
