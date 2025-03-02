import { Aboutme } from "@/components/element/aboutme/Aboutme";
import { Historylist } from "@/components/element/historylist/Historylist";
import { Title } from "@/components/element/title/Title";

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
