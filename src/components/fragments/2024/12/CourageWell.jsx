import SubTitle from "@/components/common/SubTitle";
import HeadLine from "@/components/common/HeadLine";
import Divider from "@/components/common/Divider";
import styles from "@/components/styles/Content.module.css";

export default function CourageWell() {
  return (
    <div className={styles.container}>
      <HeadLine text="제목" />
      <SubTitle text="소제목" />
      <p className={styles.paragraph}>1 문단</p>
      <p className={styles.paragraph}>2 문단</p>

      <Divider text="" />

      <HeadLine text="제목" />
      <SubTitle text="소제목" />
      <p className={styles.paragraph}>1 문단</p>
      <pre className={styles.codeBlock}>
        <code>
          <span className={styles.highlight}>const a = 1</span>
        </code>
      </pre>

      <Divider text="" />
    </div>
  );
}
