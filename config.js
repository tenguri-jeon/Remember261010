/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "오해창",
    nameEn: "Groom",
    father: "오형구",
    mother: "이미미",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "전규리",
    nameEn: "Bride",
    father: "전병철",
    mother: "최은진",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-10",
    time: "14:00",
    venue: "라온웨딩홀",
    hall: "단독홀 23층",
    address: "부산 부산진구 중앙대로 640 ABL부산타워 23층",
    tel: "051-631-2121",
    mapLinks: {
      kakao: "https://place.map.kakao.com/25639730",
      naver: "https://naver.me/FgHDI7TP"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "따로 또 같이, \n서로의 일상에 스며든 저희가 부부가 됩니다.\n각자의 삶을 걸어가던 두 사람이 만나\n서로의 계절과 일상을 나누는 법을 배웠습니다.\n\n이제는 세상에서 가장 든든한 서로의 편이 되어\n따뜻하고 단단한 보금자리를 만들어가려 합니다.\n저희의 소중한 첫걸음을 오셔서 축복해 주세요."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "같은 운동을 즐기며 처음 만난 저희는 \n서로의 손을 잡아주며 신뢰를 쌓아왔습니다.\n\n 힘든 순간마다 서로에게 \n가장 든든한 버팀목이이 되어주었던 것처럼, \n\n이제는 인생이라는 새로운 벽도 \n 서로를 믿고 차근차근 함께 올라가 보려 합니다"
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "오해창", bank: "카카오뱅크", number: "3333-04-8816796" },
      { role: "아버지", name: "오형구", bank: "부산은행", number: "112-2168-6985-02" },
      { role: "어머니", name: "이미미", bank: "농협은행", number: "302-1199-6479-31" }
    ],
    bride: [
      { role: "신부", name: "전규리", bank: "신한은행", number: "110-468-609317" },
      { role: "아버지", name: "전병철", bank: "우리은행", number: "1002-941-792328" },
      { role: "어머니", name: "최은진", bank: "신한은행", number: "110-358-897634" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "해창 ♥ 규리 결혼합니다",
    description: "2026년 10월 10일, 소중한 분들을 초대합니다."
  }
};
