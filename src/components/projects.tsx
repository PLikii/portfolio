import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const t = useTranslations("projects");

  const tech = title => (
    <em className=" mt-4 mr-4 inline-block rounded-2xl bg-card px-4 py-2 text-sm duration-200 hover:scale-105 hover:bg-primary">
      {title}
    </em>
  );

  const project = (image, href, title, description, git, techs, techsSize) => (
    <div
      className=" rounded-2xl border border-border duration-600 "
      data-aos="zoom-in-up"
    >
      <a href={href} className=" cursor-pointer">
        <Image
          src={image}
          alt="progectImage"
          width={420}
          height={420}
          priority
          className="pointer-events-none w-full rounded-t-2xl object-contain"
        />
      </a>
      <div className=" space-y-4 p-4 ">
        <div className=" flex items-center justify-between gap-4">
          <h3 className="overflow-hidden truncate whitespace-nowrap text-title text-xl">
            {title}{" "}
          </h3>
          <a href={git} className="pr-4">
            <FaGithub className=" size-8 duration-300 hover:scale-105 hover:fill-primary" />
          </a>
        </div>
        <p>{description}</p>
        <div>
          <h4 className=" text-lg text-title">{t("techStack")}</h4>
          <p>
            {Array.from({ length: techsSize }).map((_, i) => {
              return tech(t(`project.${techs}.techs.${i}`));
            })}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="mt-10 flex flex-col items-center justify-center gap-6 lg:mt-0"
    >
      <h2
        className="w-52 rounded-2xl bg-card py-2 text-center font-bold text-lg text-primary"
        data-aos="fade-left"
      >
        {t("category")}
      </h2>

      <div
        className="pb-4 font-extrabold text-2xl text-title sm:text-4xl"
        data-aos="fade-left"
      >
        {t("title")}
      </div>

      <div className=" grid grid-cols-1 gap-10 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => {
          return project(
            t(`project.${i}.image`),
            t(`project.${i}.href`),
            t(`project.${i}.title`),
            t(`project.${i}.description`),
            t(`project.${i}.git`),
            i,
            t(`project.${i}.techsSize`),
          );
        })}
      </div>
    </section>
  );
}
