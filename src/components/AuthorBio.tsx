
const AuthorBio = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/fce0c98b-408e-4028-8c50-2254cc1b1973.png"
              alt="Sabri Suby"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Meet Sabri Suby</h2>
            <p className="text-lg mb-6">
              From starting his business in a bedroom with $50 and an old computer, 
              Sabri built Australia's fastest growing digital marketing agency. 
              His proven system has generated over $7.8 billion in sales across 
              1067 different industries.
            </p>
            <p className="text-lg">
              Now, for the first time ever, he's revealing his complete selling system
              that has transformed thousands of businesses worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
