import { useState } from "react";

const LimitedOffer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <h1 className="text-5xl font-extrabold uppercase tracking-wide leading-tight">
          🎁 Don't Miss This Opportunity <br /> to Transform Your Business
        </h1>

        {/* Content */}
        <div className="mt-8 bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-red-600">P.S.</h3>
          <p className="mt-4 text-lg leading-relaxed">
            Hey there! If you’ve skipped to the end, here’s the scoop:  
            I’m offering you a free physical copy of my 259-page bestselling book,  
            <span className="font-bold"> ELEVATE HIGH’ER.</span>  
            This book outlines the principles and actionable steps to transform your life.
          </p>

          <p className="mt-6 text-lg">
            All I ask is that you cover the small shipping and handling fee.  
            Why free? Because I’m confident you’ll love it and be eager to support my future books.
          </p>

          {/* Urgency Section */}
          <div className="mt-6 p-6 bg-red-600 text-white rounded-lg">
            <p className="text-xl font-bold">
              🚨 This is a Limited-Time Offer 🚨
            </p>
            <p className="mt-2">
              I’ve only printed a few thousand copies, and once they’re gone,  
              it might take a while before we print more.
            </p>
            <p className="mt-2 font-bold uppercase">So don’t wait—hit the order button now! 🚀</p>
          </div>

          {/* Trust & Guarantee */}
          <div className="mt-6 text-lg">
            <h4 className="text-2xl font-bold text-green-600">No Catch. No Tricks. No Risk.</h4>
            <p className="mt-2">
              No hidden subscriptions. No monthly fees. Just the book, delivered to you.  
            </p>
            <p className="mt-2">
              And if for any reason you don’t love it, I’ll refund your shipping cost—no questions asked.  
              You don’t even have to return the book. That’s how confident I am!
            </p>
          </div>
        </div>

        {/* Call-To-Action Button */}
        <button
          className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg px-12 py-6 font-bold uppercase rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          onClick={() => setIsModalOpen(true)}
        >
          Book One-to-One 📞
        </button>

        {/* Modal Popup */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full relative">
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>

              {/* Embedded Form */}
              <iframe
                src="https://reskque-booking-buddy.vercel.app/"
                className="w-full h-[600px] rounded-lg"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LimitedOffer;
