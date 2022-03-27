import Link from "next/link";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <>
      <h1>Contact Page</h1>
      <h2 className={"title"}>
        Ir a <Link href="/">Home Page</Link>
      </h2>
      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/contact/index.js</code>
      </p>
    </>
  );
}
ContactPage.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
