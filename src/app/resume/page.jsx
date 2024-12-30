"use client";
import BigTitle from "@/components/common/BigTitle";

export default function Resume() {
  const colors = {
    certBackground: "#F2EAC2", // 자격증 섹션 배경색
    projectBackground: "#F2EAC2", // 프로젝트 섹션 배경색
    accent: "#8C593B", // 제목 색상
    border: "#8C593B", // 외곽선 색상
    highlight: "#8C5454", // 원(circle) 색상
    text: "#333333", // 일반 텍스트 색상
  };

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
    {
      name: "공인중개사",
      issuer: "경기도지사",
      date: "2011.11",
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
      memo: ["'성신의' 성적우수 장학금 중 '의'장학금 1회."],
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
          skill: "java, vue3, nuxt3, tailwind, Vuetify",
          orderer: "이투스에듀",
          rank: " 과장 (중급)",
          tool: "vs code, intelliJ, dataGrip",
          memo: [
            "https://cheongsol.etoos.com/gate. nuxt3(12개 서브학원이 1개의 소스).",
            "vue3 스캐폴딩 및 공통컴포넌트 작업.",
            "excel, image handle, editor등 라이브러리 사용함수 공통화.",
            "api 및 설명회 화면 등 구성.",
            "프런트 메인개발.",
          ],
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
          memo: ["Secuprint for ESS. 프로젝트 중간에 지원인력으로 투입."],
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
          memo: ["https://c2c.digigooz.com", "Swit CTO님 추천으로 입사.", "경영난으로 팀 해제."],
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
          memo: ["GCRM 포탈, 앞서 Brity RPA때 눈에 띄어 이 프로젝트도 중간에 지원인력으로 투입.", "프런트 메인개발자."],
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
          memo: ["Brity RPA 관리자웹", "추가 인력으로 투입."],
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
          memo: ["펫미 웹 ERP.", "Swit CTO님의 추천 입사.", "회사의 급여 미지급으로 이탈."],
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
          memo: [
            "제주 eat 수다",
            "기존 퇴사자의 깡 HTML 개발본을 vue로 처음부터 재구성하여 3개월만에 완수.",
            "이 회사에서는 제가 백엔드 롤은 할 수 없는 상황이어서 퇴사.",
          ],
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
          memo: [
            "현대중공업 선박 모니터링시스템.",
            "기존 개발진 8개월 작업중 하차한 프로젝트에 소방수로 투입.",
            "2주 안에 프로토타입을 보여주지 못하면 에코마린의 귀책사유가 될 위기상황.",
            "기존 소스 무시하고 재구성하여 완수.",
            "이후, 에코마린에서 디자인을 개선하고 기능을 추가한 홍보 영상입니다 : https://www.youtube.com/watch?v=TUdRdyfV2k4 ",
          ],
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
          memo: ["비뇨기과앱 고래의꿈 API, DB설계, 백엔드 인프라 (EC2, DB).", "개발파트장."],
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
          memo: ["지갑관리, 포인트결제 API.", "Swit 프로젝트에서 만난 CTO님 추천으로 입사.", "회사의 자금난으로 퇴사."],
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
          memo: [
            "씽큐 질의응답 api, 먼지데이터 api.",
            "상용이 아닌 LG내부의 실험적 프로젝트. vue는 잊고 싶지 않아서, 인수인계 문서대신 vue 홈페이지를 만들어 제공.",
            "LG가 3세 경영권 승계이후 전 임원단 인사이동으로 후속 프로젝트가 날아감.",
          ],
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
          memo: ["sns 쇼핑몰.", "휴먼인러브(swit)의 CTO님 추천으로 입사.", "자금난으로 회사 해산됨. 급여 받지 못함."],
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
          memo: ["차세대 원격훈련심사시스템.", "Legacy Java와 Jsp대신 Vue, React 같은 새로운 스킬을 접하고 싶어서 퇴사."],
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
          memo: ["SWIT, 슬랙과 같은 국산 일정관리 앱을 만드는 프로젝트.", "Node.js를 처음 배웠습니다."],
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
          memo: ["ASM 고도화 UI.", "엑셀 파싱.", "프로젝트 막바지에 투입되어 일정내에 끝낼 수 있도록 힘을 보탬."],
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
          memo: ["http://www.winmol.com"],
        },
      ],
    },
    {
      company: "아이비즈소프트웨어어",
      project: [
        {
          start: "2016.11",
          end: "2017.03",
          skill: "java, jsp, Oracle, Jquery",
          orderer: "SK C&C",
          rank: "대리 (초급)",
          tool: "Eclipse",
          memo: [
            "Swing 프로젝트",
            "초 거대 함수를 가진 오래된 프로젝트.",
            "게시판용 Naver smart editor 등 작업.",
            "이 프로젝트를 끝으로 어머님 간병을 위해 아이비즈에서 퇴사함.",
          ],
        },

        {
          start: "2016.05",
          end: "2016.11",
          skill: "java springboot, jsp, Mysql, Jquery, Hybernate",
          orderer: "KT Music",
          rank: "대리 (초급)",
          tool: "Eclipse",
          memo: [
            "Dovido 서버 API.",
            "관리화면 wizwig editor 작업. 이후 에디터도 자주 맡음. 스피링부트를 처음 써봄.",
            "뷰티 크리에이터 등을 계약하여 유튜브처럼 만들어 보겠다는 목표였으나 흥행 실패.",
            "https://m.blog.naver.com/daheun1204/221003585027 당시 흔적이 있는 블로그네요.",
          ],
        },
        {
          start: "2016.01",
          end: "2016.04",
          skill: "java, jsp, Mysql, Jquery",
          orderer: "CJ ENM",
          rank: "대리 (초급)",
          tool: "Eclipse",
          memo: ["음원저작권관리.", "poi로 excel 파싱. 이후, 엑셀 파싱 자주 맡음."],
        },
        {
          start: "2015.11",
          end: "2016.01",
          skill: "java, jsp, Mysql, Jquery",
          orderer: "중소기업기술진흥원",
          rank: "대리 (초급)",
          tool: "Eclipse",
          memo: ["중소기업 지원 임대서버 관리화면"],
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
          memo: ["소셜토론사이트", "국비학원 선생님께서 제자 2명으로 시작한 스타트업. 2명 중 1인으로 합류."],
        },
      ],
    },
  ];

  return (
    <div>
      <BigTitle text="Resume"></BigTitle>
      {/* 자격증 섹션 */}
      <div
        className="p-8 border-2 rounded-lg text-gray-700"
        style={{
          backgroundColor: colors.certBackground,
          borderColor: colors.border,
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
              <p className="flex space-x-2">
                <span className="font-bold" style={{ color: colors.border }}>
                  자격증명:
                </span>
                <span>{cert.name}</span>
              </p>
              <p className="flex space-x-2">
                <span className="font-bold" style={{ color: colors.border }}>
                  발급기관:
                </span>
                <span>{cert.issuer}</span>
              </p>
              <p className="flex space-x-2">
                <span className="font-bold" style={{ color: colors.border }}>
                  취득일:
                </span>
                <span>{cert.date}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="my-8"></div>

      {/* 학력 섹션 */}
      <div
        className="p-8 border-2 rounded-lg text-gray-700"
        style={{
          backgroundColor: colors.certBackground,
          borderColor: colors.border,
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
              <p className="flex space-x-2">
                <span className="font-bold" style={{ color: colors.border }}>
                  학교:
                </span>
                <span>{edu.name}</span>
              </p>
              <p className="flex space-x-2">
                <span className="font-bold" style={{ color: colors.border }}>
                  전공:
                </span>
                <span>{edu.major}</span>
              </p>
              <p className="flex space-x-2">
                <span className="font-bold" style={{ color: colors.border }}>
                  졸업:
                </span>
                <span>{edu.date}</span>
              </p>
              {edu.memo && (
                <p className="flex space-x-2">
                  <span className="font-bold" style={{ color: colors.border }}>
                    수상:
                  </span>
                  <span>{edu.memo}</span>
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="my-8"></div>

      {/* 프로젝트 섹션 */}
      <div
        className="p-8 border-2 rounded-lg text-gray-700"
        style={{
          backgroundColor: colors.projectBackground,
          borderColor: colors.border,
        }}
      >
        <h1 className="text-2xl font-bold mb-6" style={{ color: colors.accent }}>
          Experience
        </h1>
        {experience.map((exp, expIndex) => (
          <div key={expIndex} className="mb-8">
            <h2 className="text-xl font-semibold mb-4 flex items-center" style={{ color: colors.border }}>
              <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: colors.highlight }}></span>
              {exp.company}
            </h2>

            {exp.project.map((proj, projIndex) => (
              <div
                key={projIndex}
                className="border rounded-lg p-4 mb-4 shadow-sm"
                style={{
                  borderColor: colors.border,
                  backgroundColor: "#ffffff",
                }}
              >
                {/* 상단 정보 영역 */}
                <div className="mb-4">
                  <p className="flex space-x-2">
                    <span className="font-bold" style={{ color: colors.border }}>
                      프로젝트 기간:
                    </span>
                    <span>
                      {proj.start} ~ {proj.end}
                    </span>
                  </p>
                  <p className="flex space-x-2">
                    <span className="font-bold" style={{ color: colors.border }}>
                      발주처:
                    </span>
                    <span>{proj.orderer}</span>
                  </p>
                  <p className="flex space-x-2">
                    <span className="font-bold" style={{ color: colors.border }}>
                      직급:
                    </span>
                    <span>{proj.rank}</span>
                  </p>
                </div>

                {/* 하단 정보 영역 */}
                <div className="mb-4">
                  <p className="flex space-x-2">
                    <span className="font-bold" style={{ color: colors.border }}>
                      기술:
                    </span>
                    <span>{proj.skill}</span>
                  </p>
                  <p className="flex space-x-2">
                    <span className="font-bold" style={{ color: colors.border }}>
                      도구:
                    </span>
                    <span>{proj.tool}</span>
                  </p>
                </div>

                {/* 메모 영역 */}
                <div>
                  <h3 className="font-bold mb-2" style={{ color: colors.border }}>
                    memo:
                  </h3>
                  <ul
                    className="list-disc pl-7 border rounded-lg p-4 shadow-sm"
                    style={{
                      borderColor: colors.border,
                      backgroundColor: colors.certBackground,
                      color: colors.text,
                    }}
                  >
                    {proj.memo.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
