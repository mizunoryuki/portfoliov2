import Image from "next/image";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "80vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Image
        src={"/not.webp"}
        fill
        sizes="(max-width: 768px) 90vw, 500px"
        alt="notFound"
        priority
      />
    </div>
  );
}
