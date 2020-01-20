import React, { useState, useEffect } from 'react';
import MyCartRight from 'components/MyCart/MyCartRight';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { URL } from 'config';

// init i'mport
const { IMP } = window;
IMP.init('imp73551671');

const Payment = ({ saved_id, totalPrice, history }) => {
  const [userData, setUserData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    address: '',
    zipcode: '',
    mobile_number: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  // Retrieve user info from the backend server
  useEffect(() => {
    const token = sessionStorage.getItem('access_token') || '';

    fetch(`${URL}/order/orderview`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(res => setUserData(res.user_data));
  }, []);

  const onChange = e => {
    const newInfo = {
      ...userData,
      [e.target.name]: e.target.value,
    };

    setUserData(newInfo);
  };

  const onSubmit = e => {
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
        order_status_id: '3', // '3' means payment was successful
        first_name: userData.first_name,
        last_name: userData.last_name,
        address: userData.address,
        zipcode: userData.zipcode,
        mobile_number: userData.mobile_number,
      }),
    };

    IMP.request_pay(
      {
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: 'merchant_' + new Date().getTime(),
        name: '주문명:결제테스트',
        amount: totalPrice * 1100, // USD -> KRW (USD * 1100)
        buyer_email: userData.email,
        buyer_name: `${userData.last_name}${userData.first_name}`,
        buyer_tel: userData.mobile_number,
        buyer_addr: userData.address,
        buyer_postcode: userData.zipcode,
        m_redirect_url: 'https://www.yourdomain.com/payments/complete',
      },
      function(rsp) {
        if (rsp.success) {
          var msg = '결제가 완료되었습니다.';
          msg += '고유ID : ' + rsp.imp_uid;
          msg += '상점 거래ID : ' + rsp.merchant_uid;
          msg += '결제 금액 : ' + rsp.paid_amount;
          msg += '카드 승인번호 : ' + rsp.apply_num;

          fetch(`${URL}/order/ordercheckout`, user_info).then(res => {
            setShowSuccess(true);
            setTimeout(() => {
              history.push('/');
              window.location.reload();
            }, 3000);
          });
        } else {
          var msg = '결제에 실패하였습니다.';
          msg += '에러내용 : ' + rsp.error_msg;
        }
        alert(msg);
      },
    );
  };

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
        <Form onSubmit={onSubmit}>
          <div>
            <CheckoutTitle>체크아웃</CheckoutTitle>
            <EmailBox
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={userData.email}
              onChange={onChange}
            />
            <Subtitle>배송정보</Subtitle>
            <NameDiv>
              <FirstName
                id="first-name"
                name="first_name"
                type="text"
                placeholder="First Name"
                value={userData.first_name}
                onChange={onChange}
              />
              <LastName
                id="last-name"
                name="last_name"
                type="text"
                placeholder="Last Name"
                value={userData.last_name}
                onChange={onChange}
              />
            </NameDiv>
            <Address
              id="address"
              name="address"
              type="text"
              placeholder="Address"
              value={userData.address}
              onChange={onChange}
            />
          </div>
          <ZipCode
            id="zipcode"
            name="zipcode"
            type="text"
            placeholder="ZipCode"
            value={userData.zipcode}
            onChange={onChange}
          />
          <div>
            <Phone
              id="phone"
              name="mobile_number"
              type="tel"
              placeholder="Phone Number"
              value={userData.mobile_number}
              onChange={onChange}
            />
          </div>
          <PaymentBtn type="submit">결제하기</PaymentBtn>
        </Form>
        <MyCartRight price={totalPrice} />
      </Div>
    </>
  );
};

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
