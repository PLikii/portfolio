import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-around gap-6 2xl:flex-row ">
      <div className=" pointer-events-none" data-aos="fade-up">
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
          🧐 Про мене
        </h2>

        <h1 className=" font-extrabold text-2xl text-title sm:text-4xl">
          Гнатишин Максим
        </h1>

        <div className=" sm:text-lg">
          👋 Привіт! Мене звати Максим Гнатишин Юрійович, але можете звертатися
          просто Максим.
        </div>

        <div className=" space-y-3 sm:text-lg">
          <div>
            👨‍💻 Я full stack developer із понад 2-річним досвідом роботи з
            JavaScript, React JS, Next.js і TypeScript.
          </div>
          <div>
            🎓 Я закінчив спеціальність "Інженерія програмного забезпечення" у
            Західноукраїнському національному університеті.
          </div>
          <div>
            💡 Захоплююся розробкою full stack developer за допомогою React і
            Next.js, постійно вдосконалюю свої навички.
          </div>
        </div>

        <div className=" sm:text-lg">
          🚀 Моя мета – щодня ставати кращим, ніж учора.
        </div>
      </div>
    </div>
  );
}
