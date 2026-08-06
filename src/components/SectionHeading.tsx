type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-graphite sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
