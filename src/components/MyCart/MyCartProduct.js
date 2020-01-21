import React, { Component } from 'react';
import styled from 'styled-components';
import btnicon from '../Navbar/image/x.jpg';
import iphoneImg from '../../components/Navbar/image/iphone11-pro.png';
import { connect } from 'react-redux';
import { subPrice, removeItem } from '../../redux/actions';

class MyCartProduct extends Component {
  handleClick = (price, id) => {
    this.props.subPrice(price);
    this.props.removeItem(id);
  };

  render() {
    const { product_name, design, model, color, price, id } = this.props;
    return (
      <Div>
        {/* <ProductBox> */}
        {/* <Img>{img}</Img> */}
        <Img src={iphoneImg} alit="" />
        {/* </ProductBox> */}
        <div>
          <ProductName>{product_name}</ProductName>
          <Btn src={btnicon} onClick={() => this.handleClick(price, id)}></Btn>
          <AA>
            <ProductTitle>기종: </ProductTitle>
            <div>{model}</div>
          </AA>
          <AA>
            <ProductTitle>종류: </ProductTitle>
            <div>{design}</div>
          </AA>
          <AA>
            <ProductTitle>색상: </ProductTitle>
            <div>{color}</div>
          </AA>
          <TotalPrice>${price} USD</TotalPrice>
        </div>
      </Div>
    );
  }
}
const mapStateToProps = state => {
  return { cartList: state.cartList, totalPrice: state.totalPrice };
};

export default connect(mapStateToProps, { subPrice, removeItem })(
  MyCartProduct,
);

//style

const Btn = styled.img`
  width: 12px;
  position: absolute;
  right: -10px;
  top: 5px;
  cursor: pointer;
`;

const ProductTitle = styled.div`
  margin-right: 40px;
`;

const ProductName = styled.div`
  width: 200px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 900;
`;

const TotalPrice = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

const AA = styled.div`
  display: flex;

  /* justify-content: space-between; */
`;
const Div = styled.div`
  display: flex;
  margin-right: 70px;
  position: relative;
  margin-bottom: 45px;

  /* align-items: center; */
`;

// const ProductBox = styled.div`
//   margin: 0;
//   padding: 0;
//   width: 400px;
// `;

const Img = styled.img`
  width: 189.98px;
  height: 189.98px;
`;
