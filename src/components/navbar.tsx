"use client";
import { IoLogoGithub } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { navbar } from "@/lib/navbar";
import { map } from "lodash";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const locales = [
  {
    id: "uk",
    name: "Українська",
  },
  {
    id: "en",
    name: "English",
  },
];
export default function Navbar() {
  const t = useTranslations("navBar");
  const locale = useLocale(); // Отримуємо поточну мову

  const renderNavbarItems = () =>
    map(navbar, ({ id, href }) => (
      <a
        key={id}
        href={href}
        className="duration-200 hover:scale-105 hover:text-primary "
      >
        {t(id)}
      </a>
    ));

  const handleLocaleChange = e => {
    window.location.href = `/${e.target.value}`;
  };

  return (
    <nav className="-mb-40 top-0 z-50 lg:sticky" data-aos="fade-right">
      <div className=" lg:hidden">
        <div className="flex justify-center gap-6 pt-8 ">
          <a href="https://github.com/PLikii">
            <IoLogoGithub className="h-14 w-14 fill-description" />
          </a>
          <a href="https://t.me/PLikii">
            <FaTelegram className="h-14 w-14 fill-description" />
          </a>
        </div>
        <div className=" flex w-full justify-center py-8">
          <select
            className="block w-32 rounded-lg border border-primary bg-card p-2.5 text-title placeholder-card focus:border-primary focus:bg-input focus:ring-primary"
            onChange={handleLocaleChange}
            defaultValue={locale}
          >
            {map(locales, ({ id, name }) => (
              <option key={id} value={id} className="bg-card">
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="hidden bg-background pt-8 lg:block">
        <div className="mx-20 flex items-center justify-between gap-6 rounded-2xl bg-card px-10 xl:mx-56">
          <img
            src="/penguin.svg"
            alt="logo"
            className="pointer-events-none h-20 w-20 select-none"
          />
          <div className="flex items-center gap-10">{renderNavbarItems()}</div>

          <select
            className="block w-32 rounded-lg border border-primary bg-card p-2.5 text-title placeholder-card focus:border-primary focus:bg-input focus:ring-primary"
            onChange={handleLocaleChange}
            defaultValue={locale}
          >
            {map(locales, ({ id, name }) => (
              <option key={id} value={id} className="bg-card">
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}
