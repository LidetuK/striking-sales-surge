
const BookShowcase = () => {
  return (
    <section className="py-20 bg-[#FFB700] text-black text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-4xl md:text-7xl font-extrabold uppercase tracking-wide leading-tight text-red-600">
          UNLEASH YOUR BEST SELF. BEGIN NOW.
        </h1>

        {/* Book Introduction */}
        <p className="mt-6 text-lg leading-relaxed">
          I am thrilled to introduce you to my book,{" "}
          <span className="font-bold uppercase">
            ELEVATE HIGHER: CHANGE YOUR LIFE. BE GR8R THAN. EARN MORE.
          </span>{" "}
          This book is designed to help you enhance seven key areas of your life:{" "}
          <strong>Spiritual, Wellness, Knowledge, Relationship, Actions, Financial, and Lifestyle.</strong> 
          By focusing on these areas, you can achieve more abundance and fulfillment than ever before.
        </p>

        {/* Lead Generation Focus */}
        <div className="mt-8 bg-white text-gray-900 p-6 rounded-lg shadow-lg">
          <p className="text-lg font-bold uppercase">
            ENTER YOUR DETAILS BELOW TO STAY UPDATED
          </p>
          <p className="mt-4 text-lg">
            GET ACCESS TO <span className="text-indigo-700 font-bold">FREE INSIGHTS</span> 
            AND SPECIAL UPDATES EVEN BEFORE ORDERING YOUR COPY
          </p>
        </div>

        {/* Ordering Options */}
        <div className="mt-8">
          <p className="text-lg">
            <strong>For a limited time</strong>, this book is available to you <strong>completely FREE</strong>. 
            All I ask is that you cover the shipping and handling costs, and we will send it to you anywhere in the world.
          </p>
          <p className="mt-4 text-lg">
            If you prefer to listen to the audiobook or read it on your Kindle, iBooks, or as a PDF, these digital versions are also available for free. 
            Simply enter your details below to access these options.
          </p>

          {/* Button */}
          <button
            className="bg-red-600 hover:bg-red-700 text-white text-xl md:text-2xl px-8 md:px-16 py-6 md:py-8 mt-8 font-bold uppercase rounded-xl transform transition-all duration-300 hover:scale-110 shadow-xl"
            onClick={() =>
              document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Enter Your Details Now
          </button>
        </div>

        {/* Closing Message */}
        <p className="mt-12 italic opacity-80 text-lg">
          Thank you for taking the time to read this page. I look forward to hearing from you soon and helping you embark on this journey to elevate your life.
        </p>

        <p className="mt-6 text-lg font-bold">Warm regards,</p>
        <p className="text-xl font-bold text-yellow-600">RQ</p>
        <img 
          src="/lovable-uploads/Screenshot_2025-02-28_231038-removebg-preview.png" 
          alt="Signature" 
          className="mx-auto" 
        />
        <h3 className="text-3xl font-bold text-red-600">P.S.</h3>
      </div>
    </section>
  );
};

export default BookShowcase;
