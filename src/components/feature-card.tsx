type Props = {
  title: string;
  description: string;
  href: string;
};

export default function FeatureCard({ title, description, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="grid content-start gap-3 p-5 rounded border dark:border-stone-700 hover:border-rose-400 transition-colors"
    >
      <strong className="text-2xl">{title}</strong>
      <p>{description}</p>
    </a>
  );
}
