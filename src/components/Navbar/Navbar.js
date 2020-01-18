import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link, withRouter } from "react-router-dom";
import logoImg from "./image/casetify-logo.png";
import krImg from "./image/kr.svg";
import searchImg from "./image/search.svg";
import cartImg from "./image/cart.svg";
import userImg from "./image/user.svg";
import data from "./Data";
import Custom from "./NavList/Custom";
import Phone from "./NavList/Phone";
import Watch from "./NavList/Watch";
import Accessory from "./NavList/Accessory";
import Collection from "./NavList/Collection";
import CartItem from "./CartItem";
import xImg from "./image/x.jpg";

//Redux
import { connect } from "react-redux";
import { removeItem } from "../../redux/actions";

const Navbar = ({ cartList, removeItem, history }) => {
  /* const tabChoice = {
    0: <Custom data={data} />,
    1: <Phone data={data} />,
    2: <Watch data={data} />,
    3: <Accessory data={data} />,
    4: <Collection data={data} />
  }; */

  /* const hoverList = e => {
    for (let i = 0; i < data.topList.length; i++) {
      if (e === data.topList[i].id) {
        setTab(true);
      }
    }
    setTab(!tab);
    setChoice(e);
  };
  const outList = e => {
    console.log("out!");
  };
  console.log(data.custom);
  console.log("choice : ", choice);
  console.log("choiceTag : ", tabChoice[choice]); */
  console.log(cartList);
  const [tab, setTab] = useState(false);
  const [del, setDel] = useState(false);
  const [inputValue, setValue] = useState("");
  const searchBoxOpen = () => {
    setTab(!tab);
  };
  const searchDel = () => {
    setValue("");
  };
  const searchOnChange = e => {
    setValue(e.target.value);
    e.target.value.length > 0 ? setDel(true) : setDel(false);

    console.log(e.target.value);
  };

  const deleteSession = () => {
    sessionStorage.removeItem("access_token");
    history.push("/signin");
  };

  /* const delbtn = target => {
    console.log("delbtn : ", target);
    removeItem(target);
  };
  console.log(delbtn); */

  const token = sessionStorage.getItem("access_token");

  const page = !token && "/signin";

  // useEffect(() => {
  //   window.location.reload();
  // }, [token]);

  return (
    <>
      <Div>
        <RibbonBox>
          <Ribbon>
            <Span>
              Happy New Year! | Buy 2, Get 20.20% Off. Free Shipping Worldwide |
              CODE: NEW20
            </Span>
          </Ribbon>
        </RibbonBox>
      </Div>
      <Nav>
        <Logo>
          <Home>
            <Link to="/">
              <LogoImg src={logoImg}></LogoImg>
            </Link>
          </Home>
        </Logo>
        <TopMenu>
          <Ul>
            <Li id={0}>
              <Label>
                <A>커스텀 스튜디오</A>
              </Label>
              <Absolute>
                <ListContainer>
                  <ListBox>
                    <Custom data={data} />
                  </ListBox>
                </ListContainer>
              </Absolute>
            </Li>
            <Li id={1}>
              <Label>
                <Link to="productlist">
                  <A>핸드폰</A>
                </Link>
              </Label>
              <Absolute>
                <ListContainer>
                  <ListBox>
                    <Phone data={data} />
                  </ListBox>
                </ListContainer>
              </Absolute>
            </Li>
            <Li id={2}>
              <Label>
                <A>애플 워치</A>
              </Label>
              <Absolute>
                <ListContainer>
                  <ListBox>
                    <Watch data={data} />
                  </ListBox>
                </ListContainer>
              </Absolute>
            </Li>
            <Li id={3}>
              <Label>
                <A>액세서리</A>
              </Label>
              <Absolute>
                <ListContainer>
                  <ListBox>
                    <Accessory data={data} />
                  </ListBox>
                </ListContainer>
              </Absolute>
            </Li>
            <Li id={4}>
              <Label>
                <A>컬렉션</A>
              </Label>
              <Absolute>
                <ListContainer>
                  <ListBox>
                    <Collection data={data} />
                  </ListBox>
                </ListContainer>
              </Absolute>
            </Li>
          </Ul>
        </TopMenu>
        <ToolBox>
          <Tool>
            <ToolLink>
              <KrImg />
            </ToolLink>
          </Tool>
          <Tool>
            <ToolLink>
              <SearchImg onClick={searchBoxOpen}></SearchImg>
            </ToolLink>
          </Tool>
          <Tool>
            <ToolLink>
              <CartImg></CartImg>
            </ToolLink>
            <CartCount count={cartList.length > 0}>{cartList.length}</CartCount>
            <CartAbsol>
              <CartItemBox>
                {/* {data.cart.map(element => (
                  <CartItem key={element.id} data={element} />
                ))} */}
                {cartList.map(element => (
                  <CartItem key={element.id} data={element} />
                ))}
              </CartItemBox>
              <CartFooter>
                <Hr></Hr>
                <Link to="/cart">
                  <CartLink>체크아웃</CartLink>
                </Link>
              </CartFooter>
            </CartAbsol>
          </Tool>
          <Tool>
            <Link to={page}>
              <ToolLink>
                <UserImg></UserImg>
              </ToolLink>
            </Link>
            <UserAbsol page={token}>
              <Link to="mypage">
                <UserToolItem>
                  <UserToolLink>내 갤러리</UserToolLink>
                </UserToolItem>
              </Link>
              <UserToolItem>
                <UserToolLink>설정</UserToolLink>
              </UserToolItem>
              <UserToolItem>
                <UserToolLink>주문 현황</UserToolLink>
              </UserToolItem>
              <UserToolItem>
                <UserToolLink>지원</UserToolLink>
              </UserToolItem>
              <UserToolItem>
                <UserToolLink onClick={deleteSession}>로그아웃</UserToolLink>
              </UserToolItem>
            </UserAbsol>
          </Tool>
        </ToolBox>
        <SearchAbsol inverted={tab}>
          <SearchHead>
            <SearchBoxImg src={searchImg} />
            <SearchInput
              value={inputValue}
              placeholder={"검색"}
              onChange={searchOnChange}
            ></SearchInput>
            <XImg src={xImg} onClick={searchDel} inverted={del}></XImg>
          </SearchHead>
          <SearchMain>
            <Box>
              <Popular>인기있는 검색어</Popular>
              <SearchItemBox>
                <SearchItem>
                  <SearchContent>Floral</SearchContent>
                </SearchItem>
                <SearchItem>
                  <SearchContent>Glow in the Dark</SearchContent>
                </SearchItem>
                <SearchItem>
                  <SearchContent>Marble</SearchContent>
                </SearchItem>
                <SearchItem>
                  <SearchContent>Glitter Initial Case</SearchContent>
                </SearchItem>
                <SearchItem>
                  <SearchContent>
                    Matching Apple Watch Band and iPhone Case
                  </SearchContent>
                </SearchItem>
                <SearchItem>
                  <SearchContent>클래식 가죽 케이스</SearchContent>
                </SearchItem>
                <SearchItem>
                  <SearchContent>Cat</SearchContent>
                </SearchItem>
                <SearchItem>
                  <SearchContent>애플워치 밴드</SearchContent>
                </SearchItem>
                <SearchItem>
                  <SearchContent>Unicorn</SearchContent>
                </SearchItem>
                <SearchItem>
                  <SearchContent>Dog</SearchContent>
                </SearchItem>
              </SearchItemBox>
            </Box>
          </SearchMain>
        </SearchAbsol>
      </Nav>
    </>
  );
};
const mapStateToProps = state => {
  return { cartList: state.cartList };
};

export default connect(mapStateToProps, { removeItem })(withRouter(Navbar));

const Div = styled.div`
  display: flex;
  justify-content: center;
  background-color: #830605;
`;

const RibbonBox = styled.div`
  padding: 10px;
`;

const Ribbon = styled.div`
  text-align: center;
  position: relative;
  padding-right: 22px;
  padding-left: 22px;
`;

const Span = styled.span`
  font-weight: bold;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: white;
  color: #333;
  height: 80px;
  /* padding-right: 20px;
  padding-left: 20px;
  margin-right: 150px;
  */

  position: relative;
`;

const Logo = styled.div`
  position: absolute;
  padding: 20px 0;
  height: 80px;
  line-height: 40px;
  left: 10vw;
`;

const TopMenu = styled.div`
  padding-left: 15%;
  padding-right: 20px;
  width: 100%;
  min-width: 730px;
  text-align: center;
`;

const Home = styled.a``;
const LogoImg = styled.img`
  width: 120px;
  height: 40px;
`;
const Ul = styled.ul``;

const Li = styled.li`
  line-height: 80px;
  color: #333;
  display: inline-block;
  padding-right: 1rem;
  padding-left: 1rem;
  line-height: 2em;
`;

const Absolute = styled.div`
  position: absolute;
  display: none;
  opacity: 0;
  background-color: white;
  color: #333;
  top: 100%;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid #eaeaea;
  width: 100%;

  z-index: 100;
  ${Li}:hover & {
    display: block;
    animation: fade 0.25s ease forwards;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const Label = styled.label`
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
`;
const A = styled.a`
  line-height: 80px;
  color: #333;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
`;

const ToolBox = styled.div`
  display: flex;
  padding-right: 40px;
  padding-top: 5px;
`;
const Tool = styled.div`
  display: inline-block;
  padding: 22.5px 8px;
  position: relative;
`;
const ToolLink = styled.a`
  text-decoration: none;
`;
const KrImg = styled.span`
  background-image: url(${krImg});
  background-position: 50%;
  background-repeat: no-repeat;
  width: 1.777777em;
  height: 25px;
  display: inline-block;
  cursor: pointer;
`;
const SearchImg = styled.span`
  background-image: url(${searchImg});
  background-position: 50%;
  background-repeat: no-repeat;
  width: 1.777777em;
  height: 25px;
  display: inline-block;
  cursor: pointer;
`;

const CartImg = styled.span`
  background-image: url(${cartImg});
  background-position: 50%;
  background-repeat: no-repeat;
  width: 1.777777em;
  height: 25px;
  display: inline-block;
  cursor: pointer;
`;
const CartCount = styled.a`
  display: none;
  ${props =>
    props.count &&
    css`
      display: inline-block;
      position: absolute;
      top: 1em;
      right: 0;
      color: #fff;
      background-color: #333;
      border-radius: 50%;
      width: 1.5em;
      height: 1.5em;
      text-align: center;
      line-height: 1em;
      font-size: 0.8em;
      padding: 0.2em;
    `}
`;
const CartAbsol = styled.div`
  position: absolute;
  display: none;
  opacity: 0;
  padding: 10px;
  top: 100%;
  right: -150%;
  z-index: 110;
  text-align: left;
  width: 350px;
  background-color: white;
  border: 1px solid #f0f0f0;
  ${Tool}:hover & {
    display: block;
    animation: fade 0.25s ease forwards;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const CartItemBox = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 250px);
`;

const CartFooter = styled.footer`
  line-height: 22px;
  height: 50px;
`;
const Hr = styled.hr`
  border: 0;
  margin-top: 7px;
  margin-bottom: 7px;
  border-top: 1px solid #f2f2f2;
`;
const CartLink = styled.a`
  color: #fff;
  background-color: #333;
  border-color: #262626;
  border-width: 1px;
  padding: 17px 15.4px;
  font-size: 14px;
  line-height: 14px;
  border-radius: 2px;
  text-align: center;
  min-width: inherit;
  font-weight: 700;
  letter-spacing: 2px;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
`;
const UserImg = styled.span`
  background-image: url(${userImg});
  background-position: 50%;
  background-repeat: no-repeat;
  width: 1.777777em;
  height: 25px;
  display: inline-block;
  cursor: pointer;
`;
const UserAbsol = styled.ul`
  margin-bottom: 9px;
  background: rgba(255, 255, 255, 0.98);
  position: absolute;
  top: calc(100%);
  z-index: 110;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  right: 0;
  border-radius: 2px;
  transition: opacity 0.3s;
  white-space: nowrap;
  display: none;
  ${props =>
    props.page &&
    css`
  ${Tool}:hover & {
    display: block;
    animation: fade 0.25s ease forwards;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `}
`;
const UserToolItem = styled.li`
  padding: 0 20px;
  line-height: 2rem;
`;
const UserToolLink = styled.a`
  color: #333;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
`;
const ListContainer = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  margin-left: 10%;
  margin-right: 10%;
  width: 100%;
`;
const ListBox = styled.div``;
const SearchAbsol = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
  width: 100%;
  height: 44px;
  z-index: 2000;
  padding-left: 80px;
  padding-right: 80px;
  background-color: white !important;
  border: 1px solid #ece9e7;
  ${props =>
    props.inverted &&
    css`
      display: block;
    `}
`;
const SearchHead = styled.div`
  display: flex;
  height: 100%;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`;
const SearchMain = styled.div`
  top: 100%;
  position: absolute;
  left: 0;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  z-index: 1900;
  font-size: 14px;
  border: 1px solid #ece9e7;
`;
const SearchBoxImg = styled.img`
  width: 25px;
  margin-left: 16px;
  flex-grow: 0;
  padding-top: 5px;
`;
const SearchInput = styled.input`
  border: none;
  font-size: 20px;
  line-height: 40px;
  outline: none;
  flex-grow: 1;
  height: 100%;
  padding: 0 11px;
`;
const XImg = styled.img`
  width: 15px;
  height: 15px;
  display: none;
  position: absolute;
  right: 30%;
  top: 30%;
  cursor: pointer;
  ${props =>
    props.inverted &&
    css`
      display: block;
    `}
`;
const Box = styled.div`
  margin: 0 auto;
  display: inherit;
  max-width: 1050px;
`;
const Popular = styled.p`
  margin-bottom: 15px;
  font-weight: 500;
  line-height: 1.3em;
  letter-spacing: 0;
  color: #343434;
  font-family: "pangram";
`;
const SearchItemBox = styled.ul`
  margin-bottom: 9px;
`;
const SearchItem = styled.li`
  line-height: 2em;
  list-style: none;
  font-size: 14px;
`;
const SearchContent = styled.a`
  color: #666;
  text-decoration: none;
  transition: all 0.3s ease-out;
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: #333;
    text-decoration: underline;
  }
`;
