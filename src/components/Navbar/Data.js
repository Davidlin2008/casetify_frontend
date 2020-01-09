const menu = {
  topList: [
    { id: 0, name: "커스텀스튜디오", choice: true },
    { id: 1, name: "핸드폰", choice: true },
    { id: 2, name: "애플워치", choice: true },
    { id: 3, name: "액세서리", choice: true },
    { id: 4, name: "컬렉션", choice: true }
  ],
  custom: [
    {
      id: 0,
      name: "커스텀 케이스",
      item: [
        "모노그램 스튜디오",
        "울트라임팩트 범퍼 케이스",
        "임팩트 범퍼 케이스",
        "미러케이스(신상)",
        "네온샌드 케이스",
        "글리터 케이스",
        "스팽글 케이스",
        "플라워 압화 케이스",
        "마블 케이스",
        "커스텀 포토 케이스",
        "커스텀 케이스 모두 보기"
      ]
    },
    {
      id: 1,
      name: "커스텀 워치 밴드",
      item: ["커스텀 모노그램 밴드", "커스텀 투명 워치 밴드"]
    },
    {
      id: 2,
      name: "커스텀 테크 악세서리",
      item: ["커스텀 아이패드 폴리오", "커스텀 맥북 케이스"]
    }
  ],
  phone: [
    {
      id: 0,
      name: "아이폰",
      item: [
        "아이폰 11",
        "아이폰 11 프로",
        "아이폰 11 프로 맥스",
        "아이폰 XS",
        "아이폰 XS 맥스",
        "아이폰 XR",
        "아이폰 X",
        "아이폰 8",
        "아이폰 8 플러스",
        "아이폰 케이스 모두 보기"
      ]
    },
    {
      id: 1,
      name: "삼성 갤럭시",
      item: [
        "갤럭시 S10 플러스",
        "갤럭시 S10",
        "갤럭시 S10e(NEW)",
        "갤럭시 노트 9",
        "갤럭시 S9",
        "갤럭시 S9 플러스",
        "갤럭시 S8",
        "갤럭시 S8 플러스",
        "갤럭시 S7",
        "갤럭시 케이스 모두 보기"
      ]
    }
  ],
  watch: [
    {
      id: 0,
      name: "밴드 사이즈",
      item: ["3mm", "40mm", "42mm", "44mm"]
    },
    {
      id: 1,
      name: "밴드 타입",
      item: [
        "사피아노 가죽 디자인 밴드",
        "글리터 밴드",
        "Duo-Color Leateher Bands",
        "커스텀 모노그램 밴드",
        "링크브레이슬릿 메탈 밴드",
        "커스텀 투명 워치 밴드",
        "더블 투어 가죽 밴드",
        "워치 밴드 모두보기"
      ]
    }
  ],
  acc: [
    {
      id: 0,
      name: "엑세서리",
      item: [
        "에어팟 실리콘 케이스 (Limited)",
        "Charging Cable",
        "강화유리 필름",
        "커스텀 PVC 슬링백",
        "핸드폰 가죽 카드포켓",
        "셀카 렌즈",
        "가죽 테크 클러치",
        "핸드폰 링홀더",
        "애플 워치 케이스",
        "무선 충전기(New)",
        "테크 패션 엑세서리 더 보기"
      ]
    },
    {
      id: 1,
      name: "아이패드 폴리오",
      item: [
        "iPad 10.2-inch(2019)",
        "아이패드 미니 2019",
        "아이패드 프로 12.9인치 (3세대)",
        "아이패드 프로 11인치 (2018)",
        "iPad Pro 12.9-inch (1st & 2nd Gen)",
        "아이패드 프로 10.5인치",
        "아이패드 9.7인치",
        "iPad Air 2",
        "아이패드 미니 4",
        "아이패드 에어 2019",
        "아이패드 케이스 & 커버 모두 보기"
      ]
    },
    {
      id: 2,
      name: "맥북 하드케이스",
      item: [
        "맥북 프로 터치바 15인치",
        "맥북 프로 레티나 15인치",
        "맥북 프로 15인치",
        "맥북 프로 터치바 13인치",
        "맥북 프로 레티나 13인치",
        "맥북 프로 13인치",
        "맥북 에어 레티나 13인치",
        "맥북 에어 13인치",
        "맥북 12인치",
        "All Macbook Cases"
      ]
    }
  ],
  collection: [
    {
      id: 0,
      name: "시그니처 프린트",
      item: [
        "울트라 임팩트 케이스 컬렉션",
        "플로럴 컬렉션",
        "펫 컬렉션",
        "어반 컬렉션",
        "클리어 컬렉션",
        "인스타그램 컬렉션",
        "아트 컬렉션",
        "매칭 컬렉션(워치-핸드폰)",
        "컬렉션 모두 보기"
      ]
    },
    {
      id: 1,
      name: "아티스트 콜라보",
      item: [
        "Hidden Gems",
        "Bodil Jane",
        "Holly Nichols",
        "Ann Marie Coollck",
        "Martina Martian",
        "Poketo",
        "designlovefest",
        "Agathe Sorlet",
        "Oscar Madrazo",
        "Clo'e Floirat"
      ]
    },
    {
      id: 2,
      name: "콜라보레이션",
      item: [
        "Pangram Pangram@",
        "The M Hewelers",
        "GOD SELECTION XXX",
        "BAPY@",
        "Mira Mikati x MR",
        "DHL",
        "Lisa Frank",
        "POKEMON",
        "카렌 워커",
        "콜라보레이션 모두 보기"
      ]
    }
  ],
  cart: [
    { id: 0, name: "Custom iPhone Case", price: "$45 USD" },
    { id: 1, name: "Custom iPhone Case", price: "$45 USD" },
    { id: 2, name: "Custom iPhone Case", price: "$45 USD" }
  ]
};
export default menu;
