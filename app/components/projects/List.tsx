export default function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-white/80">
          <span className="mt-0.5 text-[#ef4444]">✦</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
