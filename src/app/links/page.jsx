import Link from "next/link";
import BigTitle from "@/components/common/BigTitle";

export default async function resume() {
  const links = [
    {
      name: "https://color.adobe.com/ko/create/image",
      address: "https://color.adobe.com/ko/create/image",
      memo: "이미지 파일에서 대표색상 추출해줌",
    },
  ];

  return (
    <div>
      <BigTitle text="Links"></BigTitle>
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
