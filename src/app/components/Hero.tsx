import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Welcome to My Blog</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Learn all about Next.js and its amazing features.
        </p>
        <div className="w-full flex justify-center">
          <Image
            src="/images/th.jpg"
            alt="Next.js Logo"
            width={700}
            height={700}
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
