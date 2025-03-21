import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations("aboutMe");

  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-around gap-6 pt-40 2xl:flex-row"
    >
      <div className=" pointer-events-none select-none" data-aos="fade-up">
        <Image
          src="/myImage.png"
          alt="MyImage"
          width={420}
          height={420}
          priority
        />
      </div>
      <div className=" space-y-6" data-aos="fade-down">
        <h2 className=" w-36 rounded-2xl bg-card py-2 text-center font-bold text-lg text-primary">
          {t("category")}
        </h2>

        <h1 className=" font-extrabold text-2xl text-title sm:text-4xl">
          {t("title")}
        </h1>

        <div className=" sm:text-lg">{t("description1")}</div>

        <div className=" space-y-3 sm:text-lg">
          <div>{t("description2")}</div>
          <div>{t("description3")}</div>
          <div>{t("description4")}</div>
        </div>

        <div className=" sm:text-lg">{t("description5")}</div>
      </div>
    </section>
  );
}
