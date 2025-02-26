import Image from "next/image";
export default function NotFound() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "97vw",
                height: "80vh",
            }}
        >
            <Image src={"/not.png"} width={400} height={400} alt="notFound" />
        </div>
    );
}
