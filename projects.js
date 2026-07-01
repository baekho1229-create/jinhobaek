/* ================================================================
   projects.js — 프로젝트 데이터 파일
   ================================================================
   수정 방법:
     - 프로젝트 추가: { } 블록을 복사해서 ] 바로 앞에 붙여넣기
     - 프로젝트 삭제: { } 블록 통째로 삭제
     - 순서 변경:    { } 블록을 위아래로 이동
     - 이미지 경로:  "projects/폴더명/images/파일명.jpg" 형식

   process 블록 타입:
     { type: "text",   content: "설명..." }
     { type: "image",  src: "경로", caption: "캡션" }
     { type: "images", srcs: ["경로1","경로2"], caption: "캡션" }
   ================================================================ */

const PROJECTS = [

  // ── 프로젝트 1: Letter ─────────────────────────────────────────
  {
    year:  "2024",
    title: "Letter",
    type:  "3D Design",

    // 메인 썸네일: 첫 번째 이미지가 메인 페이지 썸네일로 사용됨
    images: [
      "projects/prj_letter/images/image_01.jpg",
      "projects/prj_letter/images/image_02.jpg",
      "projects/prj_letter/images/image_03.jpg",
      "projects/prj_letter/images/image_04.jpg",
      "projects/prj_letter/images/image_05.jpg",
    ],

    imagesCaptions: [
      "",
      "",
      "",
      "",
      "",
    ],

    details: {
      year:    "2024",
      medium:  "3D Design",
      size:    "1920 × 1080 px",
      edition: "—",
    },

    tools: ["Cinema 4D", "After Effects", "Photoshop"],

    overview: `Coming to the U.S. has been a culture shock. Everything is different. Even filling out my name on the airport entry form was different from what I was used to. It's taken a long time for me to adjust and I am reminded daily of all I still have yet to learn. This image series was inspired by the feelings. I use metaphor as a storytelling device to express my struggle with my new identity and the process of getting to know myself.`,

    process: [
      {
        type: "text",
        content: `This project visualizes a personal experience through imagery. I focused on individual emotion rather than broad interest, so I concentrated on sparking visual interest for the audience.`,
      },
      {
        type: "image",
        src:     "projects/prj_letter/images/image_02.jpg",
        caption: "Surreal environment — broken character, stone, forest",
      },
      {
        type: "text",
        content: `I created a surreal environment to provoke curiosity — a broken Chinese character made with stone, abandoned in a forest. I rendered it with maximum photorealism to capture the audience's attention.`,
      },
      {
        type: "images",
        srcs: [
          "projects/prj_letter/images/image_03.jpg",
          "projects/prj_letter/images/image_04.jpg",
        ],
        caption: "Landscape rendering — photorealism study",
      },
      {
        type: "text",
        content: `Through this project, I achieved significant technical advancement in the process of realizing a highly realistic landscape. Using 3D software allowed me to place the camera in positions impossible in reality, resulting in a more intriguing frame composition.`,
      },
      {
        type: "image",
        src:     "projects/prj_letter/images/image_05.jpg",
        caption: "Final frame",
      },
    ],
  },

  // ── 프로젝트 추가 시 아래에 블록 복사해서 붙여넣기 ─────────────
  /*
  {
    year:  "20XX",
    title: "프로젝트 제목",
    type:  "종류",
    images: [
      "projects/폴더명/images/image_01.jpg",
    ],
    imagesCaptions: [""],
    details: {
      year:    "20XX",
      medium:  "Medium",
      size:    "—",
      edition: "—",
    },
    tools: ["Tool 1", "Tool 2"],
    overview: `설명...`,
    process: [
      { type: "text",  content: `과정 설명...` },
      { type: "image", src: "projects/폴더명/images/image_02.jpg", caption: "캡션" },
    ],
  },
  */

]
