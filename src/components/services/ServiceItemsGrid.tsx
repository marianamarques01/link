type ServiceItemsGridProps = {
  items: string[];
};

export function ServiceItemsGrid({ items }: ServiceItemsGridProps) {
  return (
    <div className="service-items-grid">
      {items.map((item) => (
        <article className="service-item-card" key={item}>
          <p>{item}</p>
        </article>
      ))}
    </div>
  );
}
