import { Blocks, GanttChartSquare, Gem } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "A strong web design portfolio should succinctly showcase your skills and creativity. Begin with a brief introduction highlighting your background and unique approach to design. Feature a diverse selection of projects that demonstrate your expertise in areas like responsive design, UX/UI, and visual aesthetics. For each project, provide context on the client or purpose, outline your role and responsibilities, and discuss how you tackled challenges.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "A concise web development portfolio should effectively highlight your skills and achievements. Begin with a brief introduction that outlines your background and passion for web development. Showcase a variety of projects that demonstrate your proficiency across different technologies and frameworks such as HTML, CSS, JavaScript, and popular libraries or frameworks like React or Node.js.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App development",
    description:
      "Create a concise mobile app development portfolio showcasing diverse iOS and Android projects. Introduce yourself briefly, emphasizing your passion for innovation. Highlight key projects with client context, your role, challenges faced, and innovative solutions. Include visuals like screenshots or demos to illustrate app features effectively. Feature client testimonials for credibility.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-auto flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[68px]">
                  <div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
