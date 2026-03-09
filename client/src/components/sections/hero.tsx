export default function Hero() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-cover bg-center py-24 px-6 text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b')",
      }}
    >
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          Leadership JOYCEP Training College
        </h1>

        <p className="text-xl mb-8">
          Professional Training in Counselling, Health and Youth Development
        </p>


        {/* BUTTONS */}

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">

          <button
            onClick={() => scrollToSection("admissions")}
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Register for Monthly Intake
          </button>

          <button
            onClick={() => scrollToSection("courses")}
            className="bg-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-800"
          >
            View Courses
          </button>

        </div>


        {/* HTS PROGRAM ADVERT */}

        <div className="bg-yellow-400 text-black rounded-xl p-6 shadow-lg max-w-2xl mx-auto">

          <h2 className="text-2xl font-bold mb-2">
            HTS (HIV Testing Services) Training
          </h2>

          <p className="mb-4">
            Become a certified HTS provider and gain professional skills in HIV
            Testing Services counselling and community health support.
          </p>

          <button
            onClick={() => scrollToSection("admissions")}
            className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800"
          >
            Apply for HTS Training
          </button>

        </div>

      </div>
    </section>
  );
}