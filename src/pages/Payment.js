import React from 'react';
import MyCartRight from 'components/MyCart/MyCartRight';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { URL } from 'config';

const { IMP } = window;
IMP.init('imp73551671');

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_data: {
        email: '',
        first_name: '',
        last_name: '',
        address: '',
        zipcode: '',
        mobile_number: '',
      },
      showSuccess: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const token = sessionStorage.getItem('access_token') || '';

    fetch(`${URL}/order/orderview`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => this.setState({ user_data: res.user_data }));
  }

  handleChange(e) {
    const { user_data } = this.state;

    const newInfo = {
      [e.target.name]: e.target.value,
      ...user_data,
    };

    this.setState(newInfo);
  }

  handleSubmit(e) {
    const { user_data } = this.state;
    const { saved_id } = this.props;

    e.preventDefault();

    const token = sessionStorage.getItem('access_token') || '';
    const user_info = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        id: [saved_id],
        order_status_id: '3',
        first_name: user_data.first_name,
        last_name: user_data.last_name,
        address: user_data.address,
        zipcode: user_data.zipcode,
        mobile_number: user_data.mobile_number,
      }),
    };

    IMP.request_pay(
      {
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: 'merchant_' + new Date().getTime(),
        name: '주문명:결제테스트',
        amount: 14000,
        buyer_email: user_data.email,
        buyer_name: '구매자이름',
        buyer_tel: '010-1234-5678',
        buyer_addr: '서울특별시 강남구 삼성동',
        buyer_postcode: '123-456',
        m_redirect_url: 'https://www.yourdomain.com/payments/complete',
      },
      function(rsp) {
        if (rsp.success) {
          var msg = '결제가 완료되었습니다.';
          msg += '고유ID : ' + rsp.imp_uid;
          msg += '상점 거래ID : ' + rsp.merchant_uid;
          msg += '결제 금액 : ' + rsp.paid_amount;
          msg += '카드 승인번호 : ' + rsp.apply_num;
        } else {
          var msg = '결제에 실패하였습니다.';
          msg += '에러내용 : ' + rsp.error_msg;
        }
        alert(msg);
      },
    );

    // fetch(`${URL}/order/ordercheckout`, user_info).then(res => {
    //   this.setState({ showSuccess: true });
    //   setTimeout(() => {
    //     this.props.history.push('/');
    //     window.location.reload();
    //   }, 3000);
    // });
  }

  render() {
    const { showSuccess, user_data } = this.state;
    const { totalPrice } = this.props;

    return (
      <>
        <div>
          {showSuccess && (
            <SuccessBar>결제 완료! 주문해주셔서 감사합니다!</SuccessBar>
          )}
          <TitleContainer>
            <TitleBox>
              <div>
                <TitleNum>1</TitleNum>
              </div>
              <div>
                <span>정보</span>
              </div>
            </TitleBox>
            <TitleBox>
              <div>
                <TitleNum2>2</TitleNum2>
              </div>
              <div>
                <span>청구내역</span>
              </div>
            </TitleBox>
            <TitleBox>
              <div>
                <TitleNum>3</TitleNum>
              </div>
              <div>
                <span>확인</span>
              </div>
            </TitleBox>
          </TitleContainer>
        </div>
        <Div>
          <Form onSubmit={this.handleSubmit}>
            <div>
              <CheckoutTitle>체크아웃</CheckoutTitle>
              <EmailBox
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={user_data.email}
                onChange={this.handleChange}
              />
              <Subtitle>배송정보</Subtitle>
              <NameDiv>
                <FirstName
                  id="first-name"
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                  value={user_data.first_name}
                  onChange={this.handleChange}
                />
                <LastName
                  id="last-name"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  value={user_data.last_name}
                  onChange={this.handleChange}
                />
              </NameDiv>
              <Address
                id="address"
                name="address"
                type="text"
                placeholder="Address"
                value={user_data.address}
                onChange={this.handleChange}
              />
            </div>
            <ZipCode
              id="zipcode"
              name="zipcode"
              type="text"
              placeholder="ZipCode"
              value={user_data.zipcode}
              onChange={this.handleChange}
            />
            <div>
              <Phone
                id="phone"
                name="mobile_number"
                type="tel"
                placeholder="Phone Number"
                value={user_data.mobile_number}
                onChange={this.handleChange}
              />
            </div>
            <PaymentBtn type="submit">결제하기</PaymentBtn>
          </Form>
          <MyCartRight price={totalPrice} />
        </Div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { totalPrice: state.totalPrice, saved_id: state.saved_id };
};

export default connect(mapStateToProps)(withRouter(Payment));

const TitleNum = styled.div`
  display: block;
  width: 35px;
  height: 35px;
  background-color: #e6e6e6;
  color: #fff;
  border-radius: 99%;
  line-height: 35px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 11px;
  font-weight: bold;
  position: relative;
`;

const TitleNum2 = styled.div`
  display: block;
  width: 35px;
  height: 35px;
  background-color: #333333;
  color: #fff;
  border-radius: 99%;
  line-height: 35px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 11px;
  font-weight: bold;
  position: relative;
`;

const TitleBox = styled.div`
  padding: 50px;
`;

const TitleContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 20%;
  margin-right: 5%;
`;

const CheckoutTitle = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
`;

const EmailBox = styled.input`
  margin-bottom: 20px;
  display: block;
  width: 100%;
  height: 44px;
  padding: 12px 10px;
  font-size: 14px;
  line-height: 1.285714286;
  color: #666;
  background-color: #fff;
  background-image: none;
  border: 1px solid #aaa;
  border-radius: 2px;
`;

const Subtitle = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
`;

const NameDiv = styled.div`
  display: flex;
`;

const FirstName = styled.input`
  margin-bottom: 20px;
  display: block;
  width: 50%;
  height: 44px;
  padding: 12px 10px;
  font-size: 14px;
  line-height: 1.285714286;
  color: #666;
  background-color: #fff;
  background-image: none;
  border: 1px solid #aaa;
  border-radius: 2px;
  margin-right: 10px;
`;

const LastName = styled.input`
  margin-bottom: 20px;
  display: block;
  width: 50%;
  height: 44px;
  padding: 12px 10px;
  font-size: 14px;
  line-height: 1.285714286;
  color: #666;
  background-color: #fff;
  background-image: none;
  border: 1px solid #aaa;
  border-radius: 2px;
`;

const Address = styled.input`
  margin-bottom: 20px;
  display: block;
  width: 100%;
  height: 44px;
  padding: 12px 10px;
  font-size: 14px;
  line-height: 1.285714286;
  color: #666;
  background-color: #fff;
  background-image: none;
  border: 1px solid #aaa;
  border-radius: 2px;
`;

const ZipCode = styled.input`
  margin-bottom: 20px;
  display: block;
  width: 100%;
  height: 44px;
  padding: 12px 10px;
  font-size: 14px;
  line-height: 1.285714286;
  color: #666;
  background-color: #fff;
  background-image: none;
  border: 1px solid #aaa;
  border-radius: 2px;
`;

const Phone = styled.input`
  margin-bottom: 20px;
  display: block;
  width: 100%;
  height: 44px;
  padding: 12px 10px;
  font-size: 14px;
  line-height: 1.285714286;
  color: #666;
  background-color: #fff;
  background-image: none;
  border: 1px solid #aaa;
  border-radius: 2px;
`;

const PaymentBtn = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  padding: 15px 10px;
  font-size: 14px;
  color: #666;
  background-color: #fff;
  background-image: none;
  border: 1px solid #aaa;
  border-radius: 2px;
  cursor: pointer;
  color: #fff;
  background-color: #333;
  border-color: #262626;
  border-width: 1px;
  line-height: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  :hover {
    background-color: black;
    transition: background 0.2s ease-out;
  }
`;

const SuccessBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #42e6a4;
  color: white;
  font-size: 16px;
  position: absolute;
  width: 100%;
  animation: fadeIn 4s ease-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
