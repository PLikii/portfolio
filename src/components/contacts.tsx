import { RiTelegram2Line } from "react-icons/ri";
import { SiGmail } from "react-icons/si";

export default function Contacts() {
  return (
    <div className="flex flex-col gap-6 lg:items-center lg:justify-center">
      <h2 className="w-52 rounded-2xl bg-card py-2 text-center font-bold text-lg text-primary">
        📬 Контакти
      </h2>

      <div className="font-extrabold text-2xl text-title sm:text-4xl">
        Контакти
      </div>

      <div className=" items-center gap-36 space-y-6 pt-4 lg:flex lg:space-y-0">
        <a
          href="https://t.me/PLikii"
          target="_blank"
          className=" flex w-min cursor-pointer items-center space-x-4 whitespace-nowrap rounded-2xl border border-border p-4 text-lg duration-300 hover:scale-105 hover:bg-card active:bg-secondary"
          rel="noreferrer"
        >
          <RiTelegram2Line className=" size-10 fill-primary " />
          <div> Давайте поговоримо</div>
        </a>
        <a
          href="mailto:marioua672@gmail.com"
          className="items-center justify-center gap-2 lg:flex lg:flex-col"
        >
          <SiGmail className=" size-10 fill-primary duration-300 hover:scale-105 hover:fill-secondary " />
          <div className=" text-primary text-xl">E-mail:</div>
          <div className=" select-all">marioua672@gmail.com</div>
        </a>
      </div>
    </div>
  );
}
