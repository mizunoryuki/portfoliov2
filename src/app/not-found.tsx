import Image from "next/image";
export default function NotFound() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image
                src={"/notfound.png"}
                width={600}
                height={600}
                alt="notFound"
            />
        </div>
    );
}
