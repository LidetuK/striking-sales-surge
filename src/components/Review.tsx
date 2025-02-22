const testimonials = [
    [
      { user: "@k****", text: "Reading your book now. I’m mind-blown by it! It’s literally an exact blueprint for digital marketing, which is exactly what I needed..." },
      { user: "@tom****", text: "Hey, I’ve finished reading your book about a week ago, and can honestly say it’s the best book I’ve read. I smashed through it in 3 days because I didn’t want to stop reading..." },
      { user: "@nik****", text: "Much respect, man! Keep killing it 🔥" }
    ],
    [
      { user: "@jane_doe", text: "This book changed the way I look at sales and marketing. It’s packed with actionable strategies!" },
      { user: "@mark_89", text: "I applied the techniques from the book, and my business saw immediate results. It’s a game-changer!" },
      { user: "@sarah_biz", text: "Finally, a marketing book that’s actually useful and doesn’t just repeat the same old advice." }
    ],
    [
      { user: "@entrepreneur_x", text: "If you run a business and haven’t read this book, you’re missing out on massive growth opportunities!" },
      { user: "@growth_guru", text: "The best investment I’ve made in my business. The strategies are next-level!" },
      { user: "@startupqueen", text: "I’ve read dozens of marketing books, but this one is by far the most practical and results-driven." }
    ],
    [
      { user: "@bizhustler", text: "ELEVATE HIGH’ER is the ultimate marketing guide. Highly recommend!" },
      { user: "@ads_master", text: "Every business owner should read this. Period." },
      { user: "@scalingsuccess", text: "From struggling to scaling—this book made it possible!" }
    ],
    [
      { user: "@ceo_life", text: "This book literally changed my approach to business. I feel more confident than ever!" },
      { user: "@sales_pro", text: "Tried the methods in this book and my revenue doubled in just a few weeks!" },
      { user: "@marketing_genius", text: "ELEVATE HIGH’ER is the best book on business I’ve ever read!" }
    ],
    [
      { user: "@hustle_king", text: "Pure gold! Every chapter is packed with real strategies that work." },
      { user: "@founder_x", text: "A must-read for any entrepreneur who wants to scale fast." },
      { user: "@success_mindset", text: "The only book you need to take your business to the next level." }
    ]
  ];
  
  const Review = () => {
    return (
      <section className="py-20 bg-white text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-black uppercase mb-10">
          SEE WHY THOUSANDS OF PEOPLE <br /> ARE RAVING ABOUT THIS BOOK...
        </h2>
  
        {/* Large Image */}
        <div className="flex justify-center mb-10">
          <img
            src="/lovable-uploads/download.png"
            alt="ELEVATE HIGH’ER book reviews"
            className="w-full max-w-4xl rounded-lg shadow-lg"
          />
        </div>
  
        {/* Testimonials - 6 sections with 3 testimonials each */}
        <div className="mt-10 px-4 max-w-5xl mx-auto">
          {testimonials.map((section, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
              {/* Display 3 testimonials in one row */}
              <div className="flex flex-col md:flex-row justify-between gap-6">
                {section.map((testimonial, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-md shadow-md flex-1">
                    <p className="text-lg text-gray-800">
                      <strong className="text-black">{testimonial.user}</strong> <br />
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Review;
  