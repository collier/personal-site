import { Badge } from './Badge';

type Props = {
  items: string[];
};

export function BadgeList({ items }: Props) {
  return (
    <ul className="flex flex-wrap">
      {items.map((item, i) => (
        <li key={i} className="mb-2 mr-2">
          <Badge>{item}</Badge>
        </li>
      ))}
    </ul>
  );
}
