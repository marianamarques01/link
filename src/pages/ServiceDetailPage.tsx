import { Navigate, useParams } from "react-router-dom";
import { FinalCTA } from "../components/services/FinalCTA";
import { HighlightPhrase } from "../components/services/HighlightPhrase";
import { RelatedCases } from "../components/services/RelatedCases";
import { ServiceHero } from "../components/services/ServiceHero";
import { ServiceIntro } from "../components/services/ServiceIntro";
import { WorkMethodSection } from "../components/services/WorkMethodSection";
import { getServiceBySlug } from "../data/servicesData";
import "./service-detail.css";

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  return (
    <div className="service-detail-page">
      <ServiceHero title={service.title} />
      <ServiceIntro
        paragraphs={service.introText}
        image={service.heroImage}
        imageAlt={service.heroImageAlt}
      />
      <HighlightPhrase>{service.highlight}</HighlightPhrase>
      <WorkMethodSection description={service.workDescription} items={service.items} />
      <RelatedCases cases={service.relatedCases} />
      <FinalCTA />
    </div>
  );
}
