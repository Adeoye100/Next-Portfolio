import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceAndEducationView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";

// Revalidate every 3600 seconds (1 hour)
export const revalidate = 3600;

async function extractAllDatas(currentSection) {
  try {
    // Use NEXT_PUBLIC_API_URL for server-side requests (works on both local and production)
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://next-portfolio-chi-blond.vercel.app";
    const url = `${baseUrl}/api/${currentSection}/get`;
    
    const res = await fetch(url, {
      method: "GET",
      next: { revalidate: 3600 },
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
