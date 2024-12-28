"use client";

export default function Resume() {
  const colors = {
    certBackground: "#F2EAC2", // 자격증 섹션 배경색
    projectBackground: "#F2EAC2", // 프로젝트 섹션 배경색
    accent: "#8C593B", // 제목 색상
    border: "#8C593B", // 외곽선 색상
    highlight: "#8C5454", // 원(circle) 색상
    text: "#333333", // 일반 텍스트 색상
  };
  // const colors = {
  //   certBackground: "#F2E5A2", // 자격증 섹션 배경색
  //   projectBackground: "#F2EAC2", // 프로젝트 섹션 배경색
  //   accent: "#D9B18F", // 제목 색상
  //   border: "#8C593B", // 외곽선 색상
  //   highlight: "#8C5454", // 원(circle) 색상
  //   text: "#333333", // 일반 텍스트 색상
  // };

  // 자격증 데이터
  const certificates = [
    {
      name: "정보처리기사 (자격번호 : 18201050822L)",
      issuer: "한국산업인력공단",
      date: "2018.05",
    },
    {
      name: "SQL 개발자 (자격번호 : SQLD-04000926)",
      issuer: "한국데이터산업진흥원",
      date: "2021.04",
    },
  ];

  // 학력 데이터
  const education = [
    {
      name: "중동고등학교",
      major: "이과",
      date: "1994.04",
    },
    {
      name: "건국대학교(서울)",
      major: "경영학과",
      date: "2001.08",
    },
  ];

  // 프로젝트 데이터
  const experience = [
    {
      company: "마이플랫",
      project: [
        {
          start: "2024.05",
          end: "2024.10",
          skill: "java springboot, struts, postgreSQL, vue3, nuxt3, tailwind, Vuetify",
          orderer: "이투스에듀",
          rank: " 과장 (중급)",
          tool: "vs code, intelliJ, dataGrip",
          memo: "https://cheongsol.etoos.com/gate 드디어, 처음부터 참여. nuxt3(12개 서브학원이 1개의 프런트소스), vue3 스캐폴딩 및 공통컴포넌트 작업. excel, image handle, editor등 라이브러리 사용함수 공통화. api 및 설명회 화면 등 구성. 프런트 메인개발자로 어드민 및 학원 홈 화면 모두 서비스까지 성공적으로 마침."
        },
      ],
    },
    {
      company: "엘아이텍",
      project: [
        {
          start: "2023.09",
          end: "2024.01",
          skill: "vue3, typescript",
          orderer: "삼성 SDS",
          rank: "차장 (중급)",
          tool: "vs code",
          memo: "Secuprint for ESS, 웹 화면개발, 중간에 지원인력으로 투입되어 잦은 야근을 했지만 프로젝트 완료까지 함께함.",
        },
      ],
    },
    {
      company: "그루핀",
      project: [
        {
          start: "2024.04",
          end: "2024.07",
          skill: "vue2, nuxt2, bootstrapVue",
          orderer: "그루핀",
          rank: "과장 (중급)",
          tool: "vs code",
          memo: "https://c2c.digigooz.com, swit CTO님 추천으로 입사. 경영난으로 팀 해제. 몇번째인지...",
        },
      ],
    },
    {
      company: "에코아이티",
      project: [
        {
          start: "2022.07",
          end: "2022.10",
          skill: "vue2",
          orderer: "삼성 SDS",
          rank: "차장 (중급-프리랜서)",
          tool: "vs code",
          memo: "GCRM 포탈, 앞서 Brity RPA때 눈에 띄어 이 프로젝트도 중간에 지원인력으로 투입. 화면개발에 중심역할을 했습니다.",
        },
      ],
    },
    {
      company: "제이투이",
      project: [
        {
          start: "2021.10",
          end: "2021.12",
          skill: "vue2, node.js, mysql, Sequalize",
          orderer: "삼성 SDS",
          rank: "차장 (중급-프리랜서)",
          tool: "vs code",
          memo: "Brity RPA 관리자웹, 일정 마지막에 추가 인력으로 투입되어 많은 야근으로 병원행을 했지만 끝까지 완수하는데 함께 함.",
        },
      ],
    },
    {
      company: "반려동물과사람들",
      project: [
        {
          start: "2021.05",
          end: "2021.08",
          skill: "vue2, node.js, MariaDB",
          orderer: "반려동물과사람들",
          rank: "과장 (중급)",
          tool: "vs code",
          memo: "펫미 웹 ERP, swit CTO님의 추천으로 입사. 해당 회사의 급여 미지급으로 중도 이탈.",
        },
      ],
    },
    {
      company: "이노윙",
      project: [
        {
          start: "2021.03",
          end: "2021.05",
          skill: "vue2",
          orderer: "제주국제컨벤션센터",
          rank: "과장 (중급)",
          tool: "vs code",
          memo: "제주 eat 수다, 기존 퇴사자의 깡 HTML 개발본을 vue로 처음부터 재구성하여 3개월만에 완수. 회사에서 제가 프론트로만 갇히는 것 같아, 대표님께 말씀드리고 퇴사함. 대표님과 이후로도 연락하며 지냅니다.",
        },
      ],
    },
    {
      company: "에코마린",
      project: [
        {
          start: "2020.10",
          end: "2020.11",
          skill: "java, vue",
          orderer: "현대중공업",
          rank: "과장 (중급-프리랜서서)",
          tool: "vs code, java, mariaDB, Mapbox API, node, aws EC2",
          memo: "현대중공업 선박 모니터링시스템. 기존 개발진 8개월 작업중 하차한 프로젝트에 소방수로 투입, 기존 소스 무시하고 재구성하여 완수. 사선을 넘는 바람에, 대표님과 여전히 연락할 정도로 사이가 좋아졌습니다. https://www.youtube.com/watch?v=TUdRdyfV2k4 이 링크는 이후, 에코마린에서 디자인을 개선하고 기능을 추가한 홍보 영상입니다.",
        },
      ],
    },
    {
      company: "코코넛사일로",
      project: [
        {
          start: "2020.07",
          end: "2020.09",
          skill: "node.js, swagger, firebase, EC2, S3",
          orderer: "코코넛사일로",
          rank: "팀장 (중급)",
          tool: "vs code, mariaDB, aws EC2",
          memo: "비뇨기과앱 API, DB설계, 백엔드 인프라 (EC2, DB), 개발팀장. 대표와 갈등으로 퇴사함. 우즈벡 출신 실력있는 후배를 만나 친구가 됨.(https://github.com/augini). 이제 저보다 잘하는것 같습니다. 파루크 말로는 제가 나간 이후 프로젝트 진도가 안나갔다고, 진짜 그렇게 말했습니다.",
        },
      ],
    },
    {
      company: "더휴먼플러스",
      project: [
        {
          start: "2020.01",
          end: "2020.04",
          skill: "node.js, vue2, elementUI, swagger",
          orderer: "더휴먼플러스",
          rank: "과장 (중급)",
          tool: "vs code, mariaDB, reids",
          memo: "지갑관리, 포인트결제 API. swit 프로젝트에서 만난 CTO님 추천으로 입사. 회사의 자금난으로 퇴사.",
        },
      ],
    },
    {
      company: "유니오텍",
      project: [
        {
          start: "2019.09",
          end: "2019.12",
          skill: "node.js, vue, oracle",
          orderer: "LG 전자",
          rank: "과장 (중급-프리랜서서)",
          tool: "vs code",
          memo: "씽큐 질의응답 api, 먼지데이터 api. 상용이 아닌 LG내부의 실험적 프로젝트 였음. vue는 잊고 싶지 않아서, 인수인계 문서대신 vue 홈페이지를 만들어 제공하였음. 저에게 무조건 재계약이라고 했지만, 3세 경영권 승계시점에 전 임원단 인사이동으로 프로젝트가 날아감.",
        },
      ],
    },
    {
      company: "굿셀코리아",
      project: [
        {
          start: "2020.10",
          end: "2020.11",
          skill: "node.js, vue2, vuetify, swagger",
          orderer: "굿셀코리아",
          rank: "과장 (중급)",
          tool: "vs code",
          memo: "sns 쇼핑몰. 휴먼인러브(swit)의 CTO님 추천으로 정규직 입사. 자금난으로 회사 해산됨. 급여 미지급됨.",
        },
      ],
    },
    {
      company: "케이웨어",
      project: [
        {
          start: "2018.08",
          end: "2019.04",
          skill: "java, oracle",
          orderer: "심평원",
          rank: "과장 (중급)",
          tool: "전자정부프레임웤",
          memo: "차세대 원격훈련심사시스템. 당시 떠오르던 vue, react 같은 새로운 스킬을 접하고 싶어서 퇴사.",
        },
      ],
    },
    {
      company: "휴먼인러브",
      project: [
        {
          start: "2018.05",
          end: "2018.07",
          skill: "java, node",
          orderer: "휴먼인러브",
          rank: "대리 (초급-프리랜서)",
          tool: "vs code, mariaDB, bootstrap",
          memo: "SWIT, 슬랙과 같은 국산 일정관리 앱을 만드는 프로젝트. Node.js를 처음 배웠습니다. 인터뷰 당시 갑자기 Node이야기를 해서 제가 이력서 안보고 오라고 했냐며 짜증을 냈는데, 기존 개발자가 sql의 join을 할줄 몰라 나갔다고 하면서 java 경력이어도 가르쳐주겠다 하여 기쁘게 합류함.",
        },
      ],
    },
    {
      company: "소프트웍스",
      project: [
        {
          start: "2018.01",
          end: "2018.04",
          skill: "java, jsp, Oracle",
          orderer: "SK이노베이션",
          rank: "대리 (초급-프리랜서)",
          tool: "Eclipse",
          memo: "ASM 고도화 UI. 프로젝트 막바지에 투입되어 일정내에 끝낼 수 있도록 힘을 보탬. 엑셀 파싱함. 프리랜서가 오히려 경력 뻥튀기를 안해도 되어서 이때부터 종종 프리랜서를 시작했습니다.",
        },
      ],
    },
    {
      company: "인터웹",
      project: [
        {
          start: "2017.08",
          end: "2017.10",
          skill: "java",
          orderer: "인터웹",
          rank: "대리 (초급)",
          tool: "Eclipse, mariaDB",
          memo: "http://www.winmol.com 1개의 매우큰 컨트롤러를 가진 프로젝트. 퍼포먼스 개선을 위해 애썼으나 한계를 느끼고 다양한 경험을 위해 퇴사함.",
        },
      ],
    },
    {
      company: "아이비즈소프트웨어어",
      project: [
        {
          start: "2015.11",
          end: "2016.01",
          skill: "java, jsp, Mysql, Jquery",
          orderer: "중소기업기술진흥원",
          rank: "대리 (초급)",
          tool: "Eclipse",
          memo: "중소기업 지원 임대서버 관리화면",
        },
        {
          start: "2016.01",
          end: "2016.04",
          skill: "java, jsp, Mysql, Jquery",
          orderer: "CJ ENM",
          rank: "대리 (초급)",
          tool: "Eclipse",
          memo: "음원저작권관리. poi로 excel 파싱. 이후, 엑셀 파싱 자주 맡음",
        },
        {
          start: "2016.05",
          end: "2016.11",
          skill: "java springboot, jsp, Mysql, Jquery, Hybernate",
          orderer: "KT Music",
          rank: "대리 (초급)",
          tool: "Eclipse",
          memo: "Dovido 서버 API, 유튜브처럼 만들어 보겠다고 했지만 실패함. 관리화면 wizwig editor 작업. 이후 에디터도 자주 맡음.",
        },
        {
          start: "2016.11",
          end: "2017.03",
          skill: "java, jsp, Oracle, Jquery",
          orderer: "SK C&C",
          rank: "대리 (초급)",
          tool: "Eclipse",
          memo: "Swing 프로젝트, 장황한 코드를 가진 아주 오래된 프로젝트. 기타 게시판용 Naver smart editor 등 작업. 어머니 병환으로 퇴사함.",
        },
      ],
    },
    {
      company: "PNP",
      project: [
        {
          start: "2014.10",
          end: "2015.09",
          skill: "java, jsp, Mysql, Jquery",
          orderer: "PNP",
          rank: "팀원",
          tool: "Eclipse",
          memo: "소셜토론사이트, 국비지원학원에서 가르치시던 선생님께서 제자 두명으로 시작하신 스타트업에 1인으로 합류",
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Resume</h1>

      {/* 자격증 섹션 */}
      <div
        className="p-8 border-2 rounded-lg"
        style={{
          backgroundColor: colors.certBackground,
          borderColor: colors.border
        }}
      >
        <h1 className="text-2xl font-bold mb-6" style={{ color: colors.accent }}>
          Certificates
        </h1>
        <ul>
          {certificates.map((cert, index) => (
            <li
              key={index}
              className="mb-4 p-4 border rounded-lg shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                borderColor: colors.border,
                color: colors.text,
              }}
            >
              <p>
                <span className="font-bold" style={{ color: colors.border }}>
                  자격증명:
                </span>{" "}
                {cert.name}
              </p>
              <p>
                <span className="font-bold" style={{ color: colors.border }}>
                  발급기관:
                </span>{" "}
                {cert.issuer}
              </p>
              <p>
                <span className="font-bold" style={{ color: colors.border }}>
                  취득일:
                </span>{" "}
                {cert.date}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* 두 섹션 사이 여백 */}
      <div className="my-8"></div>

      {/* 학력 섹션 */}
      <div
        className="p-8 border-2 rounded-lg"
        style={{
          backgroundColor: colors.certBackground,
          borderColor: colors.border
        }}
      >
        <h1 className="text-2xl font-bold mb-6" style={{ color: colors.accent }}>
          Education
        </h1>
        <ul>
          {education.map((edu, index) => (
            <li
              key={index}
              className="mb-4 p-4 border rounded-lg shadow-sm"
              style={{
                backgroundColor: "#ffffff",
                borderColor: colors.border,
                color: colors.text,
              }}
            >
              <p>
                <span className="font-bold" style={{ color: colors.border }}>
                  학교:
                </span>{" "}
                {edu.name}
              </p>
              <p>
                <span className="font-bold" style={{ color: colors.border }}>
                  전공:
                </span>{" "}
                {edu.major}
              </p>
              <p>
                <span className="font-bold" style={{ color: colors.border }}>
                  졸업:
                </span>{" "}
                {edu.date}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* 두 섹션 사이 여백 */}
      <div className="my-8"></div>

      {/* 프로젝트 섹션 */}
      <div
        className="p-8 border-2 rounded-lg"
        style={{
          backgroundColor: colors.projectBackground,
          borderColor: colors.border
        }}
      >
        <h1 className="text-2xl font-bold mb-6" style={{ color: colors.accent }}>
          Experience
        </h1>
        {experience.map((exp, expIndex) => (
          <div key={expIndex} className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center" style={{ color: colors.border }}>
              <span
                className="inline-block w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: colors.highlight }}
              ></span>
              {exp.company}
            </h2>

            {exp.project.map((proj, projIndex) => (
              <div
                key={projIndex}
                className="border rounded-lg p-4 mb-4 shadow-sm lg:flex lg:items-center"
                style={{
                  borderColor: colors.border,
                  backgroundColor: "#ffffff",
                }}
              >
                <div className="lg:w-1/2">
                  <p>
                    <span className="font-bold" style={{ color: colors.border }}>
                      프로젝트 기간:
                    </span>{" "}
                    {proj.start} ~ {proj.end}
                  </p>
                  <p>
                    <span className="font-bold" style={{ color: colors.border }}>
                      발주처:
                    </span>{" "}
                    {proj.orderer}
                  </p>
                  <p>
                    <span className="font-bold" style={{ color: colors.border }}>
                      직급:
                    </span>{" "}
                    {proj.rank}
                  </p>
                </div>

                <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-6">
                  <p>
                    <span className="font-bold" style={{ color: colors.border }}>
                      기술:
                    </span>{" "}
                    {proj.skill}
                  </p>
                  <p>
                    <span className="font-bold" style={{ color: colors.border }}>
                      도구:
                    </span>{" "}
                    {proj.tool}
                  </p>
                  <p>
                    <span className="font-bold" style={{ color: colors.border }}>
                      메모:
                    </span>{" "}
                    {proj.memo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
