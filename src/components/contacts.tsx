import { useTranslations } from "next-intl";
import { RiTelegram2Line } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

export default function Contacts() {
  const t = useTranslations("contacts");

  return (
    <section
      id="contacts"
      className="flex flex-col items-center justify-center gap-6"
      data-aos="flip-up"
    >
      <h2 className="w-52 rounded-2xl bg-card py-2 text-center font-bold text-lg text-primary">
        {t("category")}
      </h2>

      <p className="font-extrabold text-2xl text-title sm:text-4xl">
        {t("title")}
      </p>

      <div className=" flex flex-col items-center gap-6 space-y-6 pt-4 lg:flex-row lg:gap-36 lg:space-y-0">
        <a
          href="https://t.me/PLikii"
          target="_blank"
          className=" flex w-min cursor-pointer items-center space-x-4 whitespace-nowrap rounded-2xl border border-border p-4 text-lg duration-300 hover:scale-105 hover:bg-card active:bg-secondary"
          rel="noreferrer"
        >
          <RiTelegram2Line className=" size-10 fill-primary " />
          <p> {t("telegram")}</p>
        </a>
        <a
          href="mailto:marioua672@gmail.com"
          className="items-center justify-center gap-4 text-center lg:flex lg:flex-col "
        >
          <SiGmail className=" size-10 w-full fill-primary duration-300 hover:scale-105 hover:fill-secondary" />
          <p className=" text-primary text-xl">E-mail:</p>
          <a href="mailto:marioua672@gmail.com" className=" select-all">
            marioua672@gmail.com
          </a>
        </a>
      </div>
    </section>
  );
}
