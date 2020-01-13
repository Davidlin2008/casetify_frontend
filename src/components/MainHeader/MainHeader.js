import React from "react";
// import styled from "styled-components";
import ReactDOM from "react-dom";
import "./MainHeader.css";
import styled from "styled-components";

class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    //state에서 slideIndex는 활성화 된 슬라이드를 결정하는 데 사용된다.
    //사진은 서로 위에 쌓이고, 무언가 활성화되어 있지 않으면 숨긴다.
    this.state = {
      slideIndex: 0
    };

    //사용시, Home.js 에 ratio={`3:2`} 비율 속성을 전달한다.
    //이미지를 같은 크기로 조정.
    const ImgArray = this.props.ratio.split(":");
    this.ImgArray = ImgArray[0] / ImgArray[1];
  }

  //새 SlideIndex 계산 : +1 또는 -1
  //6개의 이미지가 있다고 가정 => 표시기가 0, 1, 2, ... 5
  //참고 사항 :
  //색인 5에 있고 뒤로 이동하면 slideIndex = 0
  //0이면 slideIndex = 5
  getNewSlideIndex = step => {
    const slideIndex = this.state.slideIndex;
    const numberSlide = this.props.input.length;

    let newSlideIndex = slideIndex + step;

    if (newSlideIndex >= numberSlide) newSlideIndex = 0;
    else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1;

    return newSlideIndex;
  };

  //활성화 할 slideIndex 결정
  setSlideIndex = index => {
    this.setState({
      slideIndex: index
    });
  };

  //화면 크기를 변경할 때 컨테이너 높이 업데이트
  // CSS 섹션에는 컨테이너 너비 = 100 %
  //확대 또는 축소 여부에 관계없이 너비는 여전히 부모 크기의 100 %이다.
  //그러나 높이는 절대 값이므로 다시 계산해야함!
  //너비 및 this.ImgArray 비율 = 너비 / 높이 기준

  // 참고 :
  // 아래의 점들을 일련의 이미지로 대체.
  // 그래서 this.containerBottomElm의 높이를 다시 계산해야한다.
  //
  // 또한 하단의 이미지 수는 1이 아닌 this.props.input.length 이다.
  // 그래서 this.props.input.length를 나누어야함!
  // this.containerElm으로 계산할 때!!!
  updateDimensions = () => {
    this.containerElm.style.height = `${this.containerElm.offsetWidth /
      this.ImgArray}px`;
  };

  //사용자가 모드에 들어가면 = 자동 속성
  //슬라이드 쇼 갤러리는 간격에 따라 자동으로 실행된다.
  //이 함수는 모든 반복에서 호출된다.
  //슬라이드 쇼 갤러리의 새 slideIndex를 업데이트하려면!
  runAutomatic = () => {
    this.setState({
      slideIndex: this.getNewSlideIndex(1)
    });
  };

  //이 기능은 React Component Lifecycle에 속함.
  //이 컴포넌트가 렌더링 된 후 호출
  //여기에 컨테이너에 대한 참조가 저장된다. -this.containerElm
  //컨테이너 높이 업데이트-this.updateDimensions ();
  //이벤트 등록 크기 조정-크기 조정
  //mode === "automatic"이 새로운 간격을 생성하는지 확인
  //이미지를 변경하려면-this.runAutomatic ()
  //소품에서 시간 초과 값이 전달되거나 기본값은 6000ms이다.
  componentDidMount() {
    this.rootElm = ReactDOM.findDOMNode(this);
    this.containerElm = this.rootElm.querySelector(".container");

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);

    if (this.props.mode === "automatic") {
      const timeout = this.props.timeout || 6000;

      this.automaticInterval = setInterval(
        () => this.runAutomatic(),
        Number.parseInt(timeout)
      );
    }
  }

  //이 기능은 React Component Lifecycle에도 속함.
  //이 컴포넌트가 화면에서 제거 될 때 호출
  //현재 크기를 조정할 때 이벤트를 취소해야한다.
  //메모리 누수를 방지하기 위해 위에 선언 된 간격을 제거해야함.
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    if (this.automaticInterval) clearInterval(this.automaticInterval);
  }

  render() {
    return (
      <div className="lp-slideshow">
        <div className="container">
          {this.props.input.map((image, index, btn) => {
            return (
              <div
                key={index}
                className={`slide ${
                  this.state.slideIndex === index ? "active" : ""
                }`}
              >
                <video
                  className="image"
                  src={image.src}
                  alt={image.caption}
                  autoPlay //자동재생
                  loop //무한재상
                  muted="muted"
                  poster={image.src} //	비디오 준비중일 때의 이미지 파일 경로 지정.
                />
                {/* <div> */}
                <div className="caption-text">{image.caption}</div>
                {/* </div> */}
                <ATag>
                  <Button>{image.btn}</Button>
                </ATag>
              </div>
            );
          })}
        </div>

        <div className="dot-container">
          {this.props.input.map((_, index) => {
            return (
              <span
                key={index}
                className={`dot ${
                  this.state.slideIndex === index ? "active" : ""
                }`}
                onClick={() => this.setSlideIndex(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default MainHeader;

//style

const ATag = styled.a`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin-bottom: 40px;
  color: #fff;
  background-color: #ea594e;
  border-color: #e74437;
  border-width: 1px;
  padding: 17px 40px;
  font-size: 14px;
  line-height: 14px;
  border-radius: 2px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  border: 2px solid transparent;
  cursor: pointer;
  :hover {
    background-color: #e42f1f;
  }
`;
