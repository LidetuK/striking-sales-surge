
import { useIsMobile } from "@/hooks/use-mobile";

const Ready = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-10 md:py-20 bg-white text-black text-center">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Main CTA */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold uppercase tracking-wide leading-tight text-red-600">
          READY TO ELEVATE HIGHER?
        </h1>
      </div>
    </section>
  );
};

export default Ready;
