import Faq from "@/components/Faq";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import Stats from "@/components/Stats";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <Feature />
      <Logo />
      <Stats />
      <Faq />
    </>
  );
}
