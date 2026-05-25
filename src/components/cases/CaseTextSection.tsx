import type { ReactNode } from "react";

type CaseTextSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function CaseTextSection({ title, children, className = "" }: CaseTextSectionProps) {
  return (
    <div className={`case-text-section ${className}`.trim()}>
      <h2>{title}</h2>
      <div className="case-text-section__body">{children}</div>
    </div>
  );
}
