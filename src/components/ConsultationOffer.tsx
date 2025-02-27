const ConsultationOffer = () => {
    return (
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Heading */}
          <h1 className="text-5xl font-extrabold uppercase tracking-wide leading-tight">
            📅 Book a One-on-One  
            <br /> Virtual / In-Person Consultation Today
          </h1>
  
          {/* Content */}
          <div className="mt-8 bg-white text-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-red-600">⚠️ Disclaimer</h3>
            <p className="mt-4 text-lg leading-relaxed">
              The information provided through this website, Resk 'Que’s programs, events, coaching, and other communications  
              is for <span className="font-bold">educational, informational, and inspirational purposes only.</span>  
              It does not constitute professional financial, legal, medical, or psychological advice.
            </p>
  
            <p className="mt-6 text-lg">
              Resk 'Que is not acting as your CPA, financial advisor, attorney, physician, or therapist.  
              Any information shared regarding business, finances, investments, health, or personal development  
              is <span className="font-bold">general in nature</span> and should not replace consultation with a qualified professional.
            </p>
  
            {/* Risk & Responsibility Notice */}
            <div className="mt-6 p-6 bg-red-600 text-white rounded-lg">
              <p className="text-xl font-bold">⚡ Your Success, Your Responsibility ⚡</p>
              <p className="mt-2">
                No guarantees of specific results or financial gains. Success depends on factors  
                like dedication, skills, market conditions, and individual effort.
              </p>
              <p className="mt-2 font-bold uppercase">Make informed decisions. Seek professional advice. 🚀</p>
            </div>
  
            {/* Liability Statement */}
            <div className="mt-6 text-lg">
              <h4 className="text-2xl font-bold text-green-600">No Liability. No Guarantees.</h4>
              <p className="mt-2">
                Resk 'Que and associated entities are not responsible for any loss or damage  
                arising from reliance on this information.
              </p>
              <p className="mt-2">
                This site is <span className="font-bold">not affiliated</span> with Facebook™ or endorsed by Facebook™ in any way.  
                Protected by reCAPTCHA & Google Privacy Policy.
              </p>
            </div>
          </div>
  
          {/* Call-To-Action Button */}
          <button
            className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg px-12 py-6 font-bold uppercase rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() =>
              document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Schedule Your Consultation 📞
          </button>
        </div>
      </section>
    );
  };
  
  export default ConsultationOffer;
  