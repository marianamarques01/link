import { ServiceItemsGrid } from "./ServiceItemsGrid";

type WorkMethodSectionProps = {
  description: string[];
  items: string[];
};

export function WorkMethodSection({ description, items }: WorkMethodSectionProps) {
  return (
    <section className="service-work" aria-labelledby="service-work-title">
      <div className="service-detail__inner service-work__grid">
        <div className="service-work__copy">
          <h2 id="service-work-title">Como trabalhamos</h2>
          {description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="service-work__items">
          <p className="service-work__items-title">Nossa atuação inclui:</p>
          <ServiceItemsGrid items={items} />
        </div>
      </div>
    </section>
  );
}
