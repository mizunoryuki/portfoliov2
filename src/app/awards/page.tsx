import { Awardlist } from "@/components/element/awardlist/Awardlist";
import { Title } from "@/components/element/title/Title";

export default function Page() {
    return (
        <div>
            <Title text="Awards" color="var(--color-awards)" />
            <Awardlist />
        </div>
    );
}
