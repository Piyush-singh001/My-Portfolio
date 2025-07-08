function HeroImage() {
  return (
    <div className="w-2/5 p-12">
      <div className="w-[400px] h-[400px] rounded-xl">
        <img
          src="/images/heroImage.png"
          className="grayscale rounded-xl hover:grayscale-0 transition duration-500"
          alt="Black and white image"
        />
      </div>
    </div>
  );
}

export default HeroImage;
