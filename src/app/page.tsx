export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-white relative overflow-hidden">
      <img
        src="/landing_assets/imgbg.webp"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />


    {/* first load small to normal size */}
      <img
        src="/landing_assets/img1.webp"
        alt="Image 1"
        className="absolute top-0 left-0 w-full h-full object-contain opacity-[0.8]"
      />
      
      <img
        src="/landing_assets/img2.webp"
        alt="Image 2"
        className="absolute top-0 left-0 w-full h-full object-contain opacity-[0.8]"
      />
      <img
        src="/landing_assets/img3.webp"
        alt="Image 3"
        className="absolute top-0 left-0 w-full h-full object-contain opacity-[0.8]"
      />
      <img
        src="/landing_assets/img4.webp"
        alt="Image 4"
        className="absolute top-0 left-0 w-full h-full object-contain opacity-[0.8]"
      />
      <img
        src="/landing_assets/img5.webp"
        alt="Image 5"
        className="absolute top-0 left-0 w-full h-full object-contain opacity-[0.8]"
      />

      {/* Logo */}
      <div className='absolute top-0 left-0 w-full h-full  flex flex-col items-center justify-center'>
        <div className='w-[400px] h-400px] '>
          <img
            src="/landing_assets/logo.png"
            alt="Logo"
            className=" object-contain relative bg-none "
          />
        </div>

        <div className='bg-black w-[400px] h-[80px] relative rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200'>
          <div className='w-[98%] h-[90%] bg-white rounded-xl flex items-center justify-center text-black font-bold text-[40px] cursor-pointer'>
            Start Reading
          </div>
        </div>



      </div>



    </div>
  );
}
