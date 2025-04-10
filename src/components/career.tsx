import { useTranslations } from "next-intl";

export default function Career() {
  const t = useTranslations("career");

  const items = (title, description, time) => (
    <div
      data-aos="zoom-in-up"
      className="group relative h-full min-h-68 snap-center space-y-4 rounded-2xl border border-border p-6 duration-300 hover:bg-card lg:w-auto lg:p-8 hover:lg:scale-105"
    >
      <h3 className="text-lg text-title sm:text-xl">{title}</h3>
      <p className="w-full pb-8 ms:text-lg">{description}</p>
      <p className="absolute right-0 bottom-0 p-6 text-right text-primary">
        {time}
      </p>
    </div>
  );

  const section = (title, size) => (
    <div className="space-y-6">
      <h3 className="text-center font-extrabold text-title text-xl sm:text-2xl lg:px-6">
        {t(title)}
      </h3>
      <div className="flex flex-col gap-6 md:flex-row lg:w-auto lg:flex-col lg:overflow-hidden lg:p-6">
        {Array.from({ length: size }).map((_, i) => {
          const uniqueKey = `${title}-${i}`;
          return (
            <div key={uniqueKey} className=" flex w-full justify-center">
              {items(
                t(`${title}s.${i}.title`),
                t(`${title}s.${i}.description`),
                t(`${title}s.${i}.time`),
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section
      id="career"
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

      <div className="2lg:gap-24 space-y-10 md:grid-cols-2 lg:grid lg:gap-8 lg:space-y-0">
        {section("professional", 1)}
        {section("academic", 3)}
      </div>
    </section>
  );
}
