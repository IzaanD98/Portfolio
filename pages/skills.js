import Navbar from "../src/app/components/Navigation";
import Head from "next/head";
import SkillContent from "../src/app/components/SkillContent";

export default function Skills() {
  return (
    <div>
      <Head>
        <title>Izaan Dalvi Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-gray-300 px-10 min-h-screen">
        <section>
          <Navbar />
          <SkillContent />
        </section>
      </main>
    </div>
  );
}
