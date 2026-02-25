import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-y-10 items-center px-5 lg:px-8 gap-x-12 pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="basis-[50%] flex flex-col gap-y-6">
        <p className="text-[#1C1917] text-5xl md:text-6xl xl:text-7xl leading-14 text-center lg:text-left md:leading-16 xl:leading-18 font-bold font-playfair">
          Read Better. <br />
          Think Deeper. <br />
          Grow Together.
        </p>
        <p className="text-lg xl:text-xl font-normal text-[#57534E] max-w-lg text-center lg:text-left">
          Join a community of passionate readers exploring one powerful book
          every month. Deep conversations, intentional living, and a global
          family.
        </p>
        <div className="xl:mt-4 flex lg:flex-row flex-col gap-4">
          <Link href="" className="py-4.5 px-8 bg-[#B46D3F] rounded-[24px] text-base xl:text-lg font-bold text-white text-center">Join the club</Link>
          <Link href="" className="border-2 border-[#E7E5E4] rounded-[24px] py-4.5 px-8 text-base xl:text-lg font-bold text-center">Explore This Month's Book</Link>
        </div>
      </div>
      <div className="basis-[50%] flex justify-end">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={584}
          height={500}
          className="aspect-584/500"
        />
      </div>
    </div>
  );
};

export default Hero;
