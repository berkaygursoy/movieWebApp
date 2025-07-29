const HeroSection = () => {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1489599874821-063cf05ecd8c?w=1200&h=600&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative text-center text-white z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          En İyi Filmleri
          <span className="block text-yellow-400">Keşfedin</span>
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Binlerce film arasından favorilerinizi bulun ve sinema deneyiminizi yaşayın
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
