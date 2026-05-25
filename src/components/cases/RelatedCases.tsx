import { Link } from "react-router-dom";
import type { CaseRelated } from "../../data/casesData";

type RelatedCasesProps = {
  cases: CaseRelated[];
};

export function RelatedCases({ cases }: RelatedCasesProps) {
  return (
    <section className="case-related" aria-labelledby="case-related-title">
      <div className="case-detail__inner">
        <h2 id="case-related-title">Veja também</h2>
        <p>Cases relacionados:</p>
        <div className="case-related__grid">
          {cases.map((relatedCase) => (
            <Link className="case-related__card" to={`/cases/${relatedCase.slug}`} key={relatedCase.slug}>
              <img src={relatedCase.image} alt="" width={320} height={320} loading="lazy" decoding="async" />
              <span>{relatedCase.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
