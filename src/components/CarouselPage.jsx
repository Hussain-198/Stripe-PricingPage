import { motion } from "framer-motion";

const logos = [
  {
    src: "https://lh4.googleusercontent.com/proxy/giEDaX3GfzFq-HAvCa_92K-8lRvuedIQiGrBvxVAqXdRmXoNj-CTe0nJNJVM5P5DYZV7m3imSRVlx7YAPVu4gurNo4jSVXJ8d220_ZWhCyqz08KE53GqC54ayElFbrNb92iOdZMfYXz6",
    alt: "Open AI",
    style: { height: 90 },
  },
//   {
//     src: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-abd4-622f-9d22-9f6907cc2a93/raw?se=2025-06-27T09%3A38%3A01Z&sp=r&sv=2024-08-04&sr=b&scid=de467df4-ddff-5f35-b245-34a04bb65558&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-26T12%3A17%3A19Z&ske=2025-06-27T12%3A17%3A19Z&sks=b&skv=2024-08-04&sig=1C34K6/WbjvzCeZ9ehwVOwN9NXsFFA3mjQfC5Jun9x4%3D",
//     alt: "Boom",
//     style: { height: 70 },
//   },
//   {
//     src: "https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-3470-622f-b409-438f6ddb8bd8/raw?se=2025-06-27T09%3A28%3A59Z&sp=r&sv=2024-08-04&sr=b&scid=cc248554-8208-5803-bde8-fba9fcb7bad0&skoid=add8ee7d-5fc7-451e-b06e-a82b2276cf62&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-06-26T10%3A46%3A45Z&ske=2025-06-27T10%3A46%3A45Z&sks=b&skv=2024-08-04&sig=qdPEb9ZIJL0HRqI1fvAh5IBQOldfVPoHCqTX1uVsR8o%3D",
//     alt: "Mercury",
//     style: { height: 70 },
//   },
  {
    src: "data:image/png;base64,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",
    alt: "Perplexity",
    style: { height: 70 },
  },
  {
    src: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    alt: "Cursor",
    style: { height: 70 },
  },
];

function CarouselPage({ className = "" }) {
  const logoWidth = 160;
  const totalWidth = logos.length * logoWidth;

  return (
    <div
      className={`bg-black py-12 w-full flex flex-col items-center ${className}`}
    >
      <h2 className="text-gray-400 text-lg mb-8 text-center">
        Powering the world's best product teams
      </h2>
      <div className="relative overflow-hidden max-w-5xl w-full flex justify-center">
        {/* Left Gradient Overlay */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20"
          style={{
            background: "linear-gradient(to right, #111 80%, transparent)",
          }}
        />
        {/* Right Gradient Overlay */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20"
          style={{
            background: "linear-gradient(to left, #111 80%, transparent)",
          }}
        />
        <motion.div
          className="flex gap-16"
          style={{ width: totalWidth * 2 }}
          animate={{ x: [0, -totalWidth] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 16,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              style={logo.style}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CarouselPage;
