import type { CaseDetail } from "../../data/casesData";
import { CaseGallery } from "./CaseGallery";
import { CaseTextSection } from "./CaseTextSection";

type CaseDarkSectionProps = {
  challenge: CaseDetail["challenge"];
  solution: CaseDetail["solution"];
};

export function CaseDarkSection({ challenge, solution }: CaseDarkSectionProps) {
  return (
    <section className="case-dark">
      <div className="case-detail__inner">
        <CaseTextSection title={challenge.title} className="case-text-section--dark">
          {challenge.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </CaseTextSection>
        <CaseGallery images={challenge.images} />
        <CaseTextSection title={solution.title} className="case-text-section--dark case-solution">
          {solution.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {solution.items.length > 0 ? (
            <>
              <h3>Nossa atuação</h3>
              <ul>
                {solution.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}
          {solution.afterItems?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </CaseTextSection>
      </div>
    </section>
  );
}
