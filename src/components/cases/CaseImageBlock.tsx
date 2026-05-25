type CaseImageBlockProps = {
  src: string;
  alt?: string;
};

export function CaseImageBlock({ src, alt = "" }: CaseImageBlockProps) {
  return (
    <div className="case-image-block">
      <img src={src} alt={alt} width={1060} height={490} loading="lazy" decoding="async" />
    </div>
  );
}
