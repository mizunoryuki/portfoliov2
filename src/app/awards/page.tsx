import { Awardlist } from "@/components/element/award-list/award-list";
import { Title } from "@/components/element/title/title";

export default function Page() {
  return (
    <div>
      <Title text="Awards" color="var(--color-award)" />
      <Awardlist />
    </div>
  );
}
