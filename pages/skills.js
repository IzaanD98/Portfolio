import Navbar from "../src/app/components/Navigation";
import Head from "next/head";
import SkillContent from "../src/app/components/SkillContent";

export default function Skills() {
  return (
    <div>
      <Head>
        <title>Izaan Dalvi Portfolio</title>
      </Head>
      <main className="bg-gray-300 px-10">
        <section className="min-h-screen">
          <Navbar />
          <SkillContent />
        </section>
      </main>
    </div>
  );
}
