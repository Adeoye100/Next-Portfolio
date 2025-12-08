import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceAndEducationView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";

async function extractAllDatas(currentSection) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/${currentSection}/get`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();
    return data && data.data;
  } catch (error) {
    console.error(`Error fetching ${currentSection}:`, error);
    return [];
  }
}

export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");

  return (
    <div>
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      />
      <ClientExperienceAndEducationView
        educationData={educationSectionData}
        experienceData={experienceSectionData}
      />
      <ClientProjectView data={projectSectionData} />
      <ClientContactView />
    </div>
  );
}
