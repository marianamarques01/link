export type GalleryImage = string | { src: string; zoom?: boolean };

type CaseGalleryProps = {
  images: GalleryImage[];
};

export function CaseGallery({ images }: CaseGalleryProps) {
  if (images.length === 0) return null;
  return (
    <div className="case-gallery" aria-label="Galeria do case">
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
  );
}
