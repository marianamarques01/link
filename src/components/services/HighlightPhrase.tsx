import { Check } from "lucide-react";

type HighlightPhraseProps = {
  children: string;
};

export function HighlightPhrase({ children }: HighlightPhraseProps) {
  return (
    <section className="service-highlight" aria-label="Frase de destaque">
      <div className="service-detail__inner service-highlight__inner">
        <span className="service-highlight__icon" aria-hidden>
          <Check size={34} strokeWidth={1.8} />
        </span>
        <p>{children}</p>
      </div>
    </section>
  );
}
