"use client";
import { navbar } from "@/lib/navbar";
import { map } from "lodash";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { FaTelegram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const locales = [
  {
    id: "uk",
    // biome-ignore lint/nursery/noSecrets: <explanation>
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
    <nav className="-mb-40 top-0 z-50 lg:sticky " data-aos="fade-right">
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

      <div className="hidden lg:block ">
        <div className=" bg-background pt-8">
          <div className="mx-20 flex items-center justify-between gap-6 rounded-2xl bg-card px-10 xl:mx-56">
            <div className="group relative h-24 w-24 select-none duration-700 hover:rotate-6 hover:scale-110">
              <img
                src="/penguin.svg"
                alt="penguin"
                className="absolute inset-0 h-24 w-24 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/actionPenguin.svg"
                alt="action penguin"
                className="absolute inset-0 h-24 w-24 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            <div className="flex items-center gap-10">
              {renderNavbarItems()}
            </div>

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
        </div>{" "}
        <div className="h-10 w-full bg-gradient-to-b from-background via-background/40 to-transparent" />
      </div>
    </nav>
  );
}
