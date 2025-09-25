import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-white relative overflow-hidden">
      <img
        src="/landing_assets/imgbg.webp"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div>
        <img
          src="/landing_assets/img1.webp"
          alt="Image 1"
          className="absolute top-0 left-0 w-full h-full object-contain opacity-0 animate-scale-up animation-delay-200"
        />
        <img
          src="/landing_assets/img2.webp"
          alt="Image 2"
          className="absolute top-0 left-0 w-full h-full object-contain opacity-[0] animate-scale-up animation-delay-500"
        />
        <img
          src="/landing_assets/img3.webp"
          alt="Image 3"
          className="absolute top-0 left-0 w-full h-full object-contain opacity-[0] animate-scale-up animation-delay-700"
        />
        <img
          src="/landing_assets/img4.webp"
          alt="Image 4"
          className="absolute top-0 left-0 w-full h-full object-contain opacity-[0] animate-scale-up animation-delay-1000"
        />
        <img
          src="/landing_assets/img5.webp"
          alt="Image 5"
          className="absolute top-0 left-0 w-full h-full object-contain opacity-[0] animate-scale-up animation-delay-1300"
        />
      </div>

      {/* Logo */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-4 px-4">
        <div className="w-[30vw] max-w-[400px] min-w-[150px]">
          <img
            src="/landing_assets/logo.png"
            alt="Logo"
            className="w-full h-auto object-contain relative opacity-0 animate-scale-up-logo animation-delay-1600"
          />
        </div>

        <Link href='/manga-list/1' className="bg-black w-[80vw] max-w-[400px] h-[60px] sm:h-[80px] relative rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200 opacity-0 animate-scale-up-logo animation-delay-1600">
          <div className="w-[98%] h-[90%] bg-[#ED4301] rounded-xl flex items-center justify-center text-white font-bold text-[24px] sm:text-[40px] cursor-pointer">
            Start Reading
          </div>
        </Link>



      </div>

    </div>
  );
}
