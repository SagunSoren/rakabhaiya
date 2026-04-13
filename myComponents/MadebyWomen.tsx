const MadebyWomen = () => {
  return (
    <div>
      {/* Fixed Background Section */}
      <section
        className="relative h-100 bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/Madebywomen/image1.jpg')",
        }}
      >
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center text-white">
          <h2 className="text-5xl max-lg:text-2xl max-lg:px-4 font-bold italic">
            Designed by women who lead, <br className="max-lg:hidden" /> for
            women who <span className="text-[#fc5656]"> inspire. </span>
          </h2>
          <p className="mt-4 text-md">At our core, we are a brand</p>
          <button className="underline underline-offset-4 mt-10 tracking-wide text-lg">
            Explore
          </button>
        </div>
      </section>
    </div>
  );
};
export default MadebyWomen;
