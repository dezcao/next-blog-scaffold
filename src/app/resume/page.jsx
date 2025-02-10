"use client";
import BigTitle from "@/components/common/BigTitle";
import Divider from "@/components/common/Divider";
import Link from "next/link";
import styles from "@/components/styles/Content.module.css";

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
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2018.05",
    },
  ];

  // 학력 데이터
  const education = [
    {
      name: "University",
      major: "Manage",
      date: "2001.08",
      memo: ["something"],
    },
  ];

  // 프로젝트 데이터
  const experience = [
    {
      company: "회사명",
      project: [
        {
          start: "2024.05",
          end: "2024.10",
          skill: "java, vue3, nuxt3, tailwind, Vuetify",
          orderer: "발추처",
          rank: " 과장 (중급)",
          tool: "vs code, intelliJ, dataGrip",
          memo: [
            "무언가 메모를 함.",
            "vue3 스캐폴딩 및 공통컴포넌트 작업.",
            "excel, image handle, editor등 라이브러리 사용함수 공통화.",
            "api 및 설명회 화면 등 구성.",
            "프런트 메인개발.",
          ],
        },
      ],
    },
  ];

  return (
    <div>
      <BigTitle text="Resume"></BigTitle>

      {/* 개인정보 - 이메일, 깃허브 */}
      <Divider text="좋은 습관을 가진 개발자가 되자." />
      <section className={styles.paragraph}>
        <div>Email - myEmail@gmail.com</div>
        <div>
          Github -
          <Link href="https://github.com/myRepo" className="text-blue-600 hover:underline pl-1">
            https://github.com/myRepo
          </Link>
        </div>
      </section>
      <Divider />
      {/* 자격증 섹션 */}
      <div
        className="p-4 border-2 rounded-lg text-gray-700"
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
                  자격증:
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
        className="p-4 border-2 rounded-lg text-gray-700"
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
        className="p-4 border-2 rounded-lg text-gray-700"
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
                      기간:
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
