import Link from "next/link";

export default async function resume() {
  const links = [
    {
      name: "https://color.adobe.com/ko/create/image",
      address: "https://color.adobe.com/ko/create/image",
      memo: "이미지 파일에서 대표색상 추출해줌",
    },
    {
      name: "https://eloquentjavascript.net/",
      address: "https://eloquentjavascript.net/",
      memo: "",
    },
    {
      name: "https://javascript.thisweekin.io/",
      address: "https://javascript.thisweekin.io/",
      memo: "",
    },
    {
      name: "https://blog.medium.com/",
      address: "https://blog.medium.com/",
      memo: "",
    },
    {
      name: "https://github.com/login",
      address: "https://github.com/login",
      memo: "",
    },
    {
      name: "https://gitlab.com/users/sign_in",
      address: "https://gitlab.com/users/sign_in",
      memo: "",
    },
    {
      name: "https://app.diagrams.net/",
      address: "https://app.diagrams.net/",
      memo: "draw.io 다이어그램 그리는 곳",
    },
    {
      name: "https://www.youtube.com/@newlec1",
      address: "https://www.youtube.com/@newlec1",
      memo: "뉴렉처. 자바, 자바스크립트 등 강의.",
    },
    {
      name: "https://www.youtube.com/@codingangma",
      address: "https://www.youtube.com/@codingangma",
      memo: "코딩앙마",
    },
    {
      name: "https://www.youtube.com/@withBoaz",
      address: "https://www.youtube.com/@withBoaz",
      memo: "가장 쉬운 웹개발 with Boaz",
    },
    {
      name: "https://www.youtube.com/@eleanorlim",
      address: "https://www.youtube.com/@eleanorlim",
      memo: "엔지니어 대한민국. 미인임.",
    },
    {
      name: "https://www.youtube.com/@wisdomreading4095",
      address: "https://www.youtube.com/@wisdomreading4095",
      memo: "지혜의 독서. 나도, 이정도 수준으로 독서 하고싶다. 하지만, 소개된 책들의 재미가... 나같은 똥 무지렁이에게는 너무 어려웠다.",
    },
    {
      name: "https://www.youtube.com/@%EC%B2%AD%ED%99%94%EC%88%98",
      address: "https://www.youtube.com/@%EC%B2%AD%ED%99%94%EC%88%98",
      memo: "청화수. 역사 이야기",
    },
    {
      name: "https://www.youtube.com/@Eddie19999",
      address: "https://www.youtube.com/@Eddie19999",
      memo: "에드 ED",
    },
    {
      name: "https://www.youtube.com/@NetNinja",
      address: "https://www.youtube.com/@NetNinja",
      memo: "Net Ninja",
    },
    {
      name: "https://www.youtube.com/@12math",
      address: "https://www.youtube.com/@",
      memo: "12 Math",
    },
    {
      name: "https://www.flaticon.com/",
      address: "https://www.flaticon.com/",
      memo: "무료 아이콘 사이트",
    },
    {
      name: "https://pixlr.com/kr/",
      address: "https://pixlr.com/kr/",
      memo: "무료 온라인 사진 편집기",
    },
    {
      name: "https://pinetools.com/lighten-image",
      address: "https://pinetools.com/lighten-image",
      memo: "무료 온라인 사진 스케일다운 (사이트에 다른 기능도 많음)",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Links</h1>
      {links.map(({ name, address, memo }, index) => (
        <div key={index} className="mb-2">
          <Link href={`${address}`} className="text-blue-600 hover:underline">
            {index + 1}. {name} {memo ? `(${memo})` : ""}
          </Link>
        </div>
      ))}
    </div>
  );
}
