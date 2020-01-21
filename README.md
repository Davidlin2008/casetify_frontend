# 프로젝트: Casetify.com 클론

- 코딩 2개월차 WeCode 5기 수강생들의 2주 클론 프로젝트입니다.
- 프론트엔드 3명과 백엔드 2명이 팀을 이뤄 개발했습니다.

## 목표

- Casetify.com의 화려한 interface를 가능한 똑같이 보이도록 완성도 있게 구현하기.
- 모든 컴포넌트에서 Styled-Components를 적용해보기.
- 모든 컴포넌트를 Function 으로 만들어 Hooks로 Lifecycle Methods들을 완벽하게 대체해보기.
- Redux를 활용한 전역 상태 관리 적용해보기.
- 실제 웹서비스 수준의 인증/인가 구현해보기.
- 소셜 로그인 구현해보기.
- 결제 시스템 연동해보기.

## 사용된 기술

- Front-End: **React**, **Hooks**, **Redux**, **Styled-Components**, **Kakao Login**, **아임포트 결제 시스템**
- Back-End: **Django**, **MySQL** ([Back-End Repository 주소](https://github.com/wecode-bootcamp-korea/casetify_backend))
- Deployment: **AWS**

## 기능

- 외부 라이브러리 없이 순수 CSS를 활용한 애니메이션
- 회원가입 / 로그인 / 로그아웃 (카카오 로그인으로 대체 가능)
- 로그인 여부에 따른 특정 페이지 접근 권한 변경
- 전역 상태 관리 (제품에 대한 선택 옵션 및 장바구니 관리) - Redux, React-Redux
- 결제 시스템 - 아임포트(inicis)
