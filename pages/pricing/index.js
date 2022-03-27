import Link from "next/link";
import { DarkLayout } from "../../components/layouts/DarkLayout";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function Pricing() {
  return (
    <>
      <h1>Pricing Page</h1>
      <h2 className={"title"}>
        Ir a <Link href="/">Home Page</Link>
      </h2>
      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/pricing/index.js</code>
      </p>
    </>
  );
}
Pricing.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
