const BookShowcase = () => {
  return (
    <section className="py-20 bg-[#FFB700] text-black text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-7xl font-extrabold uppercase tracking-wide leading-tight text-red-600">
          UNLEASH YOUR BEST SELF, BEGIN NOW.
        </h1>

        {/* Book Introduction */}
        <p className="mt-6 text-lg leading-relaxed">
          I am thrilled to introduce you to my book,{" "}
          <span className="font-bold uppercase">ELEVATE HIGH’ER: CHANGE YOUR LIFE. BE GR8R THAN. EARN MORE.</span> 
          This book is designed to help you enhance seven key areas of your life:{" "}
          <strong>Spiritual, Wellness, Knowledge, Relationship, Actions, Financial, and Lifestyle.</strong> 
          By focusing on these areas, you can achieve more abundance and fulfillment than ever before.
        </p>

        {/* Availability Notice */}
        <div className="mt-8 bg-white text-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Limited-Time Offer</h2>
          <p className="mt-4 text-lg">
            Due to the <strong>high demand</strong> for this transformative book, 
            it may take a few seconds to load after you place your order. 
            Your <span className="text-indigo-700 font-bold">FREE COPY</span> 
            may take <strong>14-25 business days</strong> to be delivered to your doorstep. 
            We kindly ask for your patience during this process.
          </p>
        </div>

        {/* Ordering Options */}
        <div className="mt-8">
          <p className="text-lg">
            As a special offer, this book is available to you <strong>for free</strong>. 
            Just cover the shipping and handling costs, and we’ll send it to you anywhere in the world.
          </p>
          <p className="mt-4 text-lg">
            Prefer a digital version? Get the audiobook, Kindle, iBooks, or PDF for a small fee.
          </p>

          {/* Updated Button */}
          <button
            className="bg-red-600 hover:bg-red-700 text-white text-2xl px-16 py-8 mt-8 font-bold uppercase rounded-xl transform transition-all duration-300 hover:scale-110 shadow-xl"
            onClick={() =>
              document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Claim Your Free Copy
          </button>
        </div>

        {/* Closing Message */}
        <p className="mt-12 italic opacity-80 text-lg">
          Thank you for taking the time to read this page. I look forward to helping you elevate your life.
        </p>

        <p className="mt-6 text-lg font-bold">Warm regards,</p>
        <p className="text-xl font-bold text-yellow-600">RQ</p>
       
          <h3 className="text-3xl font-bold text-red-600">P.S.</h3>
          <img 
  src="/lovable-uploads/Screenshot_2025-02-28_231038-removebg-preview.png" 
  alt="Signature" 
  className="mx-auto" 
  
/>
      </div>
    </section>
  );
};

export default BookShowcase;
