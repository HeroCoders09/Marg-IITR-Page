import heroLogo from "../assets/images/HomePageLogo.png";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 pt-6 pb-2 sm:pt-20 sm:pb-14">
        <img
          src={heroLogo}
          alt="Memory Anxiety Research Group"
          className="w-full max-w-245 object-contain"
        />
      </div>
    </section>
  );
}