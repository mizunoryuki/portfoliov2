import { Aboutme } from "@/components/element/aboutme/Aboutme";
import { Title } from "@/components/element/title/Title";

export default function Page() {
    return (
        <div>
            <Title text="Aboutme" color="#FF5B12" />
            <Aboutme />
            <Title text="History" color="#FF5B12" />
        </div>
    );
}
