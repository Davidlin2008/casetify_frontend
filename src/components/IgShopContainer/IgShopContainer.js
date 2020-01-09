import React, { Component } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

class IgShopContainer extends Component {
  render() {
    return (
      <>
        <IgSection>
          <div>
            <IgTitle>인스타그램 속 아이템</IgTitle>
            <ShowCase>
              <div>
                <ShowContent>
                  <ShowImg1 />
                  <ShowImg2 />
                </ShowContent>
                <ShowContent>
                  <ShowImg3 />
                  <ShowImg4 />
                </ShowContent>
              </div>
              <div>
                <div>
                  <ShowImg5 />
                </div>
              </div>
              <div>
                <ShowContent>
                  <ShowImg6 />
                  <ShowImg7 />
                </ShowContent>
                <ShowContent>
                  <ShowImg8 />
                  <ShowImg9 />
                </ShowContent>
              </div>
            </ShowCase>
          </div>
        </IgSection>
      </>
    );
  }
}

export default IgShopContainer;

//style

const IgSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const IgTitle = styled.h2`
  font-size: 30px;
  color: #f78957;
  text-align: center;
  font-weight: bold;
  margin-bottom: 24px;
`;

const ShowCase = styled.div`
  display: flex;
`;

const ShowContent = styled.div`
  display: flex;
  cursor: pointer;
`;

const ShowImg1 = styled.img`
  background-image: url("https://cdn-stamplib.casetify.com/ctg_i_9scowxv1pshcufs0fsse3spbjuqjshvk_1578480034.jpg");
  background-repeat: no-repeat;
  width: 176.66px;
  height: 176.66px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const ShowImg2 = styled.img`
  background-image: url("https://cdn-stamplib.casetify.com/ctg_i_qlcl56u6za9ltx5xn3c5kvf3j2lw52mk_1578448712.jpg");
  background-repeat: no-repeat;
  width: 176.66px;
  height: 176.66px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
  margin-right: 20px;
`;

const ShowImg3 = styled.img`
  background-image: url("https://cdn-stamplib.casetify.com/ctg_i_1u6edock99oct4w68v1k21el6hefpa70_1578363349.jpg");
  background-repeat: no-repeat;
  width: 176.66px;
  height: 176.66px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
  margin-right: 20px;
`;

const ShowImg4 = styled.img`
  background-image: url("https://cdn-stamplib.casetify.com/ctg_i_lddgh64nbkgf05on9ks4woos8k6n844v_1578363347.jpg");
  background-repeat: no-repeat;
  width: 176.66px;
  height: 176.66px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
  margin-right: 20px;
`;

const ShowImg5 = styled.img`
  background-image: url("https://cdn-stamplib.casetify.com/ctg_i_55ujhdlq7fm9s8y9d5ssr93e1jyeun6u_1578276528.jpg");
  background-repeat: no-repeat;
  width: 373px;
  height: 373px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
  cursor: pointer;
`;

const ShowImg6 = styled.img`
  background-image: url("https://cdn-stamplib.casetify.com/ctg_i_ezuxcx2burgxfiyf4lqi8abvsumqo1as_1578276526.jpg");
  background-repeat: no-repeat;
  width: 176.66px;
  height: 176.66px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const ShowImg7 = styled.img`
  background-image: url("https://cdn-stamplib.casetify.com/ctg_i_hh39w3uo87g3b03dv7acmqxyjqyhbitv_1578049006.jpg");
  background-repeat: no-repeat;
  width: 176.66px;
  height: 176.66px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
  margin-left: 20px;
`;

const ShowImg8 = styled.img`
  background-image: url("https://cdn-stamplib.casetify.com/ctg_i_65lo6c009kvyauda9v29kw8wxq3tmumu_1578015090.jpg");
  background-repeat: no-repeat;
  width: 176.66px;
  height: 176.66px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
  margin-left: 20px;
`;

const ShowImg9 = styled.img`
  background-image: url("https://cdn-stamplib.casetify.com/ctg_i_kf268rdwxwinvgnz0ehg15d69e7s1aui_1577930693.jpg");
  background-repeat: no-repeat;
  width: 176.66px;
  height: 176.66px;
  background-size: cover;
  background-position: center;
  max-width: 100%;
  border: none;
  margin-left: 20px;
`;
