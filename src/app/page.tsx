import Hero from "@/components/Hero";
import About from "@/components/About";
import Community from "@/components/Community";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import content from "@/data/content.json";

export default function Home() {
  const { profile, community, publications, settings } = content;

  return (
    <>
      <Hero profile={profile} />
      <About profile={profile} />
      <Community items={community} />
      <Publications publications={publications} />
      <Contact settings={{ ...settings, email: profile.email }} />
    </>
  );
}