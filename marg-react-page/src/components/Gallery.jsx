import { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <h2 className="mb-6 text-center text-2xl sm:text-3xl font-bold text-neutral-900">
          Gallery
        </h2>

        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <img
            src={images[current]}
            alt={`Gallery ${current + 1}`}
            className="h-60 sm:h-95 md:h-125 w-full object-cover"
          />

          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-neutral-800 border border-neutral-200 shadow hover:bg-white"
          >
            <HiChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-neutral-800 border border-neutral-200 shadow hover:bg-white"
          >
            <HiChevronRight size={24} />
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === current ? "bg-[#f0642b] w-6" : "bg-neutral-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}