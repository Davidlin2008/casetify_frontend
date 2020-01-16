import React from "react";
import MyCartRight from "../components/MyCart/MyCartRight";
import styled from "styled-components";
import fetchAPI from "../Utils/fetch";
import { TOKEN } from "../Config/constants";
import { connect } from "react-redux";

let token = localStorage.getItem(TOKEN) || "";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      email: "",
      first_name: "",
      last_name: "",
      address: "",
      zipcode: "",
      mobile_number: ""
    };
  }

  componentDidMount() {
    fetchAPI("/user/myprofile", {
      headers: {
        Authorization: token
      }
    }).then(res => {
      console.log(res);
      // res.data.user_info
      // {
      //   email: "ddd@fddd.com",
      //   email: "ddd@fddd.com"
      // };
      // this.setState(res.data.user_info);
    });
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
    console.log(
      `email:${this.state.email}\nfirstname:${this.state.firstname}\nlastname:${this.state.lastname}
      \naddress:${this.state.address}\nzipcode:${this.state.zipcode}\nphone:${this.state.phone}`
    );
    e.preventDefault();

    const user_info = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };
    fetch(`/order/ordercheckout`, user_info)
      .then(res => {
        return res.json();
      })
      .then(json => {
        const token = json.access_token;

        window.localStorage.setItem(TOKEN, token);
      });
  };

  render() {
    return (
      <>
        <div>
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
            <PaymentBtn>결제 완료</PaymentBtn>
          </Form>
          <MyCartRight price={this.props.totalPrice} />
        </Div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { totalPrice: state.totalPrice };
};

export default connect(mapStateToProps)(Payment);

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
