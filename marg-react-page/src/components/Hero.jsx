import heroLogo from "../assets/HomePageLogo.png";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 pt-14 pb-10 sm:pt-20 sm:pb-14">
        <img
          src={heroLogo}
          alt="Memory Anxiety Research Group"
          className="w-full max-w-245 object-contain"
        />
      </div>
      <div className="bg-[#1f2025] py-3 text-center text-white italic text-lg">
        Memory is the treasury and guardian of all things. -Cicero
      </div>
    </section>
  );
}