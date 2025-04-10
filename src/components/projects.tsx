import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Projects() {
  const t = useTranslations("projects");

  const tech = title => (
    <em className=" mt-4 mr-4 inline-block rounded-2xl bg-card px-4 py-2 text-sm duration-200 hover:scale-105 hover:bg-primary">
      {title}{" "}
    </em>
  );

  const project = (image, href, title, description, techs, techsSize) => (
    <div
      className=" rounded-2xl border border-border duration-500 lg:hover:scale-105"
      data-aos="zoom-out-up"
    >
      <a href={href} className=" cursor-pointer" data-aos="zoom-out-up">
        <Image
          src={image}
          alt="progectImage"
          width={420}
          height={420}
          priority
          className="pointer-events-none w-full rounded-t-2xl object-contain"
        />
        <div className=" space-y-4 p-4 ">
          <h3 className="text-title text-xl">{title}</h3>
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
      </a>
    </div>
  );

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-6"
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
        {Array.from({ length: 2 }).map((_, i) => {
          return project(
            t(`project.${i}.image`),
            t(`project.${i}.href`),
            t(`project.${i}.title`),
            t(`project.${i}.description`),
            i,
            t(`project.${i}.techsSize`),
          );
        })}
      </div>
    </section>
  );
}
