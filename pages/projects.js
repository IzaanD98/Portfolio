import Navbar from "../src/app/components/Navigation";
import Head from "next/head";
import ProjectContent from "../src/app/components/Projects";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Izaan Dalvi Portfolio</title>
      </Head>
      <main className="bg-gray-300 px-10">
        <section className="min-h-screen">
          <Navbar />
          <ProjectContent />
        </section>
      </main>
    </div>
  );
}
