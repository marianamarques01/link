import type { CaseDetail } from "../../data/casesData";
import { CaseImageBlock } from "./CaseImageBlock";
import { CaseTextSection } from "./CaseTextSection";

type CaseResultSectionProps = {
  result: CaseDetail["result"];
};

export function CaseResultSection({ result }: CaseResultSectionProps) {
  return (
    <section className="case-result">
      <div className="case-detail__inner">
        <CaseTextSection title={result.title}>
          {result.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </CaseTextSection>
        <CaseImageBlock src={result.image} />
      </div>
    </section>
  );
}
