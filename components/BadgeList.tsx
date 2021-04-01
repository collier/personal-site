import { Badge } from './Badge';

type Props = {
  items: string[];
};

export function BadgeList({ items }: Props) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <li key={i}>
          <Badge>{item}</Badge>
        </li>
      ))}
    </ul>
  );
}
