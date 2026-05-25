import type { RelatedCase } from "../../data/servicesData";

type RelatedCasesProps = {
  cases: RelatedCase[];
};

export function RelatedCases({ cases }: RelatedCasesProps) {
  return (
    <section className="service-related" aria-labelledby="service-related-title">
      <div className="service-detail__inner">
        <h2 id="service-related-title">Cases relacionados</h2>
        <div className="service-related__grid">
          {cases.map((relatedCase) => {
            const card = (
              <>
                <img
                  src={relatedCase.image}
                  alt=""
                  width={320}
                  height={320}
                  loading="lazy"
                  decoding="async"
                />
                <span>{relatedCase.name}</span>
              </>
            );

            return relatedCase.href ? (
              <a
                className="service-related__card"
                href={relatedCase.href}
                key={relatedCase.name}
              >
                {card}
              </a>
            ) : (
              <article className="service-related__card" key={relatedCase.name}>
                {card}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
