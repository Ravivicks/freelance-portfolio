"use client";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const projectData = [
  {
    image: "/work/w1.png",
    category: "React js",
    name: "Snapgram social media app",
    description:
      "Specialize in developing engaging and intuitive social media apps that connect users seamlessly.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/w2.png",
    category: "next js",
    name: "digitalhippo e-commerce ",
    description:
      "Excel in crafting robust e-commerce platforms that enhance user experience and drive online sales effectively",
    link: "/",
    github: "/",
  },
  {
    image: "/work/w3.jpg",
    category: "Full stack",
    name: "SMC tradeonline Admin",
    description:
      "Specialize in developing intuitive trading admin platforms that streamline operations and empower users with powerful analytical tools.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/w4.jpg",
    category: "React js",
    name: "SMC Tradeonline portal",
    description:
      "Specialize in developing user-friendly trading platforms similar to Groww, offering seamless investment experiences and comprehensive financial management tools.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/w5.jpg",
    category: "React js",
    name: "Stoxkart web trading",
    description:
      "Build a seamless stock trading platform with our comprehensive API for easy stock buying, selling, and live streaming integration.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/w7.jpg",
    category: "Full stack",
    name: "SMC Partner portal",
    description:
      "Develop a robust partner portal providing stakeholders with real-time insights into company earnings, revenue, and product performance.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/w6.jpg",
    category: "React js",
    name: "Stoxkart Rekyc portal",
    description:
      "Develop a robust reKYC portal providing seamless and secure user verification processes.",
    link: "/",
    github: "/",
  },
];

// remove duplicates category
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = React.useState(uniqueCategories);
  const [category, setCategory] = React.useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all project else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
