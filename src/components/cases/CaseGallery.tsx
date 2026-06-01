import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryImage = string | { src: string; zoom?: boolean };

type CaseGalleryProps = {
  images: GalleryImage[];
};

export function CaseGallery({ images }: CaseGalleryProps) {
  if (images.length === 0) return null;

  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((dir: number) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({ left: dir * Math.min(node.clientWidth * 0.75, 340), behavior: "smooth" });
  }, []);

  return (
    <div className="case-gallery-wrap">
      <div className="case-gallery-wrap__arrows">
        <button
          type="button"
          className="case-gallery-wrap__arrow"
          aria-label="Imagem anterior"
          onClick={() => scroll(-1)}
        >
          <ChevronLeft aria-hidden size={20} strokeWidth={2.25} />
        </button>
        <button
          type="button"
          className="case-gallery-wrap__arrow"
          aria-label="Próxima imagem"
          onClick={() => scroll(1)}
        >
          <ChevronRight aria-hidden size={20} strokeWidth={2.25} />
        </button>
      </div>
      <div className="case-gallery" ref={trackRef} aria-label="Galeria do case">
        {images.map((image, index) => {
          const src = typeof image === "string" ? image : image.src;
          const zoom = typeof image === "object" && image.zoom;
          return (
            <div key={`${src}-${index}`} className="case-gallery__item">
              <img
                src={src}
                alt=""
                width={360}
                height={460}
                loading="lazy"
                decoding="async"
                className={zoom ? "is-zoomed" : undefined}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
