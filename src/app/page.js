"use client";

import { useEffect, useState } from "react";
import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceAndEducationView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";

export default function Home() {
  const [homeSectionData, setHomeSectionData] = useState([]);
  const [aboutSectionData, setAboutSectionData] = useState([]);
  const [experienceSectionData, setExperienceSectionData] = useState([]);
  const [educationSectionData, setEducationSectionData] = useState([]);
  const [projectSectionData, setProjectSectionData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
        
        const [homeRes, aboutRes, experienceRes, educationRes, projectRes] = await Promise.all([
          fetch(`${baseUrl}/api/home/get`),
          fetch(`${baseUrl}/api/about/get`),
          fetch(`${baseUrl}/api/experience/get`),
          fetch(`${baseUrl}/api/education/get`),
          fetch(`${baseUrl}/api/project/get`),
        ]);

        const homeData = await homeRes.json();
        const aboutData = await aboutRes.json();
        const experienceData = await experienceRes.json();
        const educationData = await educationRes.json();
        const projectData = await projectRes.json();

        setHomeSectionData(homeData.data || []);
        setAboutSectionData(aboutData.data || []);
        setExperienceSectionData(experienceData.data || []);
        setEducationSectionData(educationData.data || []);
        setProjectSectionData(projectData.data || []);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading portfolio...</div>;
  }

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
