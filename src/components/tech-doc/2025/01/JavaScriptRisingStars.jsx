"use client";

import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // 테마 추가
import { useEffect } from "react";

import BigTitle from "@/components/common/BigTitle";
import HeadLine from "@/components/common/HeadLine";
import SubLine from "@/components/common/SubLine";
import OriginLink from "@/components/common/OriginLink";
import Divider from "@/components/common/Divider";
// import Note from "@/components/common/Note";
import Link from "next/link";
import styles from "@/components/styles/Content.module.css";

export default function JavaScriptRisingStars() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={styles.container}>
      <BigTitle text="2024 JavaScript Rising Stars" />
      <OriginLink
        href="https://risingstars.js.org/2024/en#section-framework"
        prefix="risingstars"
        text="https://risingstars.js.org/2024/en#section-framework"
      />
      <Divider text="2025.1.13" />
      <section className={styles.paragraph}>상기 링크가 그래프로 표시되어 있어 훨씬 보기 좋습니다.</section>

      <Divider />

      <HeadLine text="Front-end Frameworks" />
      <section>
        <ul className="list-decimal ml-5">
          <li>
            htmx +16.8k :
            <Link href={`https://htmx.org/essays/is-htmx-another-javascript-framework/`} className="text-blue-600 hover:underline">
              https://htmx.org/essays/is-htmx-another-javascript-framework/
            </Link>
          </li>
          <li>React +14.2k</li>
          <li>Svelte +6.1k</li>
          <li>Vue +5.9k</li>
          <li>Angular +3.5k</li>
        </ul>
      </section>

      <HeadLine text="React Ecosystem" />
      <section>
        <ul className="list-decimal ml-5">
          <li>
            shadcn/ui +38.0k :
            <Link href={`https://ui.shadcn.com/`} className="text-blue-600 hover:underline">
              https://ui.shadcn.com/
            </Link>
          </li>
          <li>Excalidraw +27.0k</li>
          <li>Magic UI +13.2k</li>
          <li>Next.js +12.1k</li>
          <li>Refine +11.7k</li>
        </ul>
      </section>

      <HeadLine text="Vue Ecosystem" />
      <section>
        <ul className="list-decimal ml-5">
          <li>Nuxt +6.2k</li>
          <li>PrimeVue +5.4k</li>
          <li>Slidev +4.7k</li>
          <li>shadcn-vue +4.1k</li>
          <li>VitePress +3.7k</li>
        </ul>
      </section>

      <HeadLine text="Back-end/Full-stack" />
      <section>
        <ul className="list-decimal ml-5">
          <li>Next.js +12.1k</li>
          <li>Hono +11.5k</li>
          <li>Astro +9.8k</li>
          <li>Nest +6.8k</li>
          <li>Strapi +6.3k</li>
        </ul>
      </section>

      <HeadLine text="Styling / CSS in JS" />
      <section>
        <ul className="list-decimal ml-5">
          <li>Tailwind CSS +9.4k</li>
          <li>DaisyUI +6.6k</li>
          <li>Bootstrap +4.8k</li>
          <li>Pico.css +3.1k</li>
          <li>Tamagui +3.0k</li>
        </ul>
      </section>

      <HeadLine text="Component Libraries" />
      <section>
        <ul className="list-decimal ml-5">
          <li>shadcn/ui +38.0k</li>
          <li>Magic UI +13.2k</li>
          <li>PrimeVue +5.4k</li>
          <li>NextUI +4.9k</li>
          <li>Mantine +4.5k</li>
        </ul>
      </section>

      <HeadLine text="Testing" />
      <section>
        <ul className="list-decimal ml-5">
          <li>
            Playwright +10.4k :
            <Link href={`https://playwright.dev/`} className="text-blue-600 hover:underline">
              https://playwright.dev/
            </Link>
          </li>
          <li>Puppeteer +3.8k</li>
          <li>Storybook +3.7k</li>
          <li>Micro Agent +3.1k</li>
          <li>Stagehand +2.8k</li>
        </ul>
      </section>
    </div>
  );
}
