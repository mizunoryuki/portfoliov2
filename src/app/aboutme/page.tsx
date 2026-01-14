import { Aboutme } from "@/components/element/aboutme/aboutme";
import { Historylist } from "@/components/element/history-list/history-list";
import { Title } from "@/components/element/title/title";

export default function Page() {
  return (
    <div>
      <Title text="Aboutme" color="var(--color-aboutme)" />
      <Aboutme />
      <Title text="History" color="var(--color-aboutme)" />
      <Historylist />
    </div>
  );
}
