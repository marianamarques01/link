import { Navigate, useParams } from "react-router-dom";
import { CaseDarkSection } from "../components/cases/CaseDarkSection";
import { CaseHero } from "../components/cases/CaseHero";
import { CaseImageBlock } from "../components/cases/CaseImageBlock";
import { CaseResultSection } from "../components/cases/CaseResultSection";
import { CaseTextSection } from "../components/cases/CaseTextSection";
import { RelatedCases } from "../components/cases/RelatedCases";
import { FinalCTA } from "../components/services/FinalCTA";
import { getCaseBySlug, getRelatedCases } from "../data/casesData";
import "./case-detail.css";

export function CaseDetailPage() {
  const { slug } = useParams();
  const caseData = getCaseBySlug(slug);

  if (!caseData) {
    return <Navigate to="/cases" replace />;
  }

  return (
    <div className="case-detail-page">
      <CaseHero title={caseData.title} subtitle={caseData.subtitle} image={caseData.heroImage} />

      <section className="case-project">
        <div className="case-detail__inner">
          <CaseTextSection title={caseData.project.title}>
            {caseData.project.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </CaseTextSection>
          <CaseImageBlock src={caseData.project.image} />
        </div>
      </section>

      <CaseDarkSection challenge={caseData.challenge} solution={caseData.solution} />
      <CaseResultSection result={caseData.result} />
      <RelatedCases cases={getRelatedCases(caseData.relatedCases)} />
      <FinalCTA />
    </div>
  );
}
