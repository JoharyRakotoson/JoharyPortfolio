export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-2 text-sm font-semibold tracking-wide text-[#ef4444] uppercase">
        {title}
      </h4>
      {children}
    </div>
  );
}
