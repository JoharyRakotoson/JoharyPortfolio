export default function Eyebrow({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-sm tracking-[0.24em] text-red-400 uppercase ${className}`}>
      {children}
    </p>
  );
}
