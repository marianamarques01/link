type ServiceIntroProps = {
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

export function ServiceIntro({ paragraphs, image, imageAlt }: ServiceIntroProps) {
  return (
    <section className="service-intro" aria-label="Introdução">
      <div className="service-detail__inner service-intro__grid">
        <div className="service-intro__copy">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <img
          className="service-intro__image"
          src={image}
          alt={imageAlt}
          width={620}
          height={400}
          decoding="async"
        />
      </div>
    </section>
  );
}
