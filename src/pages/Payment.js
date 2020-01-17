import React from "react";
import MyCartRight from "../components/MyCart/MyCartRight";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import fetchAPI from "../Utils/fetch";
import { TOKEN } from "../Config/constants";
import { connect } from "react-redux";
import { URL } from "config";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_data: {
        email: "",
        first_name: "",
        last_name: "",
        address: "",
        zipcode: "",
        mobile_number: ""
      },
      showSuccess: false
    };
  }

  componentDidMount() {
    let token = sessionStorage.getItem("access_token") || "";

    fetch(`${URL}/order/orderview`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(res => this.setState({ user_data: res.user_data }));
  }

  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  handleFirstname = e => {
    this.setState({
      first_name: e.target.value
    });
  };

  handleLastname = e => {
    this.setState({
      last_name: e.target.value
    });
  };

  handleAddress = e => {
    this.setState({
      address: e.target.value
    });
  };

  handleZipcode = e => {
    this.setState({
      zipcode: e.target.value
    });
  };

  handlePhone = e => {
    this.setState({
      mobile_number: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    let token = sessionStorage.getItem("access_token") || "";
    const user_info = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        id: [this.props.saved_id],
        order_status_id: "3",
        first_name: this.state.user_data.first_name,
        last_name: this.state.user_data.last_name,
        address: this.state.user_data.address,
        zipcode: this.state.user_data.zipcode,
        mobile_number: this.state.user_data.mobile_number
      })
    };

    fetch(`${URL}/order/ordercheckout`, user_info).then(res => {
      this.setState({ showSuccess: true });
      setTimeout(() => {
        this.props.history.push("/");
        window.location.reload();
      }, 3000);
    });
  };

  render() {
    return (
      <>
        <div>
          {this.state.showSuccess && (
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
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleEmail}
              />
              <Subtitle>배송정보</Subtitle>
              <NameDiv>
                <FirstName
                  id="first-name"
                  type="text"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={this.handleFirstname}
                />
                <LastName
                  id="last-name"
                  type="text"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={this.handleLastname}
                />
              </NameDiv>
              <Address
                id="address"
                type="text"
                placeholder="Address"
                value={this.state.address}
                onChange={this.handleAddress}
              />
            </div>
            <ZipCode
              id="zipcode"
              type="text"
              placeholder="ZipCode"
              value={this.state.zipcode}
              onChange={this.handleZipcode}
            />
            <div>
              <Phone
                id="phone"
                type="tel"
                placeholder="Phone Number"
                value={this.state.mobile_number}
                onChange={this.handlePhone}
              />
            </div>
            <PaymentBtn type="submit">결제 완료</PaymentBtn>
          </Form>
          <MyCartRight price={this.props.totalPrice} />
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
  /* opacity: 0.3; */
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
  /* opacity: 0.3; */
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
