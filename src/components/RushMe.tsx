
const RushMe = () => {
  return (
    <section className="py-20 bg-[#FFB700] text-black text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-3xl md:text-6xl font-extrabold uppercase tracking-wide leading-tight text-red-600">
          MOST PEOPLE WISH FOR AN EASIER LIFE, BUT THE KEY IS TO WORK ON BECOMING BETTER.
        </h1>

        {/* Call to Action Button */}
        <div className="mt-8">
          <button
            className="bg-red-600 hover:bg-red-700 text-white text-xl md:text-2xl px-8 md:px-16 py-6 md:py-8 mt-8 font-bold uppercase rounded-xl transform transition-all duration-300 hover:scale-110 shadow-xl"
            onClick={() =>
              document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            RUSH ME A FREE COPY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default RushMe;
