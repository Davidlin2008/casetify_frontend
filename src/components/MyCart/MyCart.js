import React from 'react';
import styled from 'styled-components';
import MyCartLeft from './MyCartLeft';
import MyCartRight from './MyCartRight';
import MainFooter from '../MainFooter/MainFooter';
import MyCartProduct from './MyCartProduct';
import MyCartData from './MyCartData';
import { URL } from 'config';

// Redux related imports
import { connect } from 'react-redux';
import { saveId } from 'redux/actions/index';

class MyCart extends React.Component {
  componentDidMount() {
    const token = sessionStorage.getItem('access_token');
    fetch(`${URL}/order/shopbasketview`, {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(
        res => console.info(res) || this.props.saveId(res.custom_orders[0].id),
      )
      .catch(error => console.log(error));
  }

  render() {
    // const sumPrice = MyCartData.reduce((acc, curr) => acc + curr.price, 0);

    return (
      <>
        <Header>
          <Div>
            <CartTitle>장바구니</CartTitle>
            <CartSubTitle> 지역에 관계 없이 무료 배송 </CartSubTitle>
          </Div>
          <SeconDiv>
            <DivBox>
              {this.props.cartList.map(el => (
                <MyCartProduct
                  product_name={el.product_name}
                  model={el.model}
                  design={el.design}
                  color={el.color}
                  price={el.price}
                  id={el.id}

                  //리듀서 이름
                />
              ))}
            </DivBox>

            <MyCartRight price={this.props.totalPrice} />
          </SeconDiv>
        </Header>
        <MainFooter />
      </>
    );
  }
}

// Store에서 관리하는 state를 이 컴포넌트에 props로 넘겨줌
const mapStateToProps = state => {
  return { cartList: state.cartList, totalPrice: state.totalPrice };
};

export default connect(mapStateToProps, { saveId })(MyCart);

//style

const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  /* min-width: 30%; */
`;
const Header = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  margin-top: 60px;
`;

const Div = styled.div`
  text-align: center;
`;

const CartTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3em;
  text-transform: none;
  margin-bottom: 12px;
  color: #343434;
`;

const CartSubTitle = styled.h5`
  font-weight: 500;
  line-height: 1.3em;
  letter-spacing: 0.03em;
  font-size: 16px;
  color: #343434;
`;

const SeconDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;
