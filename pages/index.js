import Head from "next/head";
import Navbar from "../src/app/components/Navigation";
import HomeContent from "../src/app/components/HomeContent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Izaan Dalvi Portfolio</title>
      </Head>
      <main className="bg-gray-300 px-10">
        <section className="min-h-screen">
          <Navbar />
          <HomeContent />
        </section>
      </main>
    </div>
  );
}
