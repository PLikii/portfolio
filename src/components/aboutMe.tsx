import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("aboutMe");

  return (
    <section id="about-me" className="pt-32 pb-20 lg:pb-0 " data-aos="fade-up">
      <div className=" flex w-full items-center justify-center pb-10">
        <h2 className="w-36 rounded-2xl bg-card py-2 text-center font-bold text-lg text-primary ">
          {t("category")}
        </h2>
      </div>

      <div className="flex flex-col items-center justify-around gap-6 2xl:flex-row ">
        <div className=" flex h-80 flex-col space-y-6 lg:items-start">
          <h1 className=" font-extrabold text-2xl text-title sm:text-4xl ">
            {t("title")}
          </h1>

          <div className=" sm:text-lg">{t("description1")}</div>

          <div className=" space-y-3 sm:text-lg">
            <p>{t("description2")}</p>
            <p>{t("description3")}</p>
            <p>{t("description4")}</p>
          </div>

          <div className=" sm:text-lg">{t("description5")}</div>
        </div>
      </div>
    </section>
  );
}
