import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Community from "@/components/Community";
// import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import content from "@/data/content.json";

export default function Home() {
  const { profile, community, settings } = content;

  return (
    <>
      <Hero profile={profile} />
      <About profile={profile} />
      <Certifications certifications={profile.certifications || []} />
      <Community items={community} />
      {/* <Publications publications={publications} /> */}
      <Contact settings={{ ...settings, email: profile.email }} />
    </>
  );
}