type Experience = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

type Props = {
  experience: Experience;
  index: number;
  title: string;
};

export default function ExperienceCard({
  experience,
  index,
  title,
}: Props) {
  return (
    <article className="group relative p-6 transition-colors duration-300 hover:bg-lime-400/[0.02] sm:p-8">
      {index > 0 && (
        <div className="absolute inset-x-0 top-0 h-px bg-[var(--skill-border)]" />
      )}

      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <span className="font-mono text-xs text-lime-400">
            {String(index + 1).padStart(2, "0")} / {title}
          </span>

          <h3 className="mt-3 text-xl font-semibold">
            {experience.company}
          </h3>

          <p className="mt-1 text-sm text-[var(--foreground)]/55">
            {experience.role}
          </p>
        </div>

        <span className="w-fit rounded-md border border-[var(--skill-border)] px-3 py-1.5 font-mono text-xs text-[var(--foreground)]/60">
          {experience.period}
        </span>
      </div>

      <ul className="mt-6 space-y-3">
        {experience.points.map((point, pointIndex) => (
          <li
            key={`${pointIndex}-${point}`}
            className="flex gap-3 text-sm leading-7 text-[var(--foreground)]/70 sm:text-base"
          >
            <span className="select-none font-mono text-lime-400/70">
              {String(pointIndex + 1).padStart(2, "0")}
            </span>

            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}