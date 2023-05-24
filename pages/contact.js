import Head from "next/head";
import Navbar from "../src/app/components/Navigation";
import ContactContent from "../src/app/components/Contact";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Izaan Dalvi Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-gray-300 px-10 min-h-screen">
        <section>
          <Navbar />
          <ContactContent />
        </section>
      </main>
    </div>
  );
}
