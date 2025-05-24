import Image from "next/image";
import NavBar from "./navbar";
import InstagramPhoto from "./instagram-photo";

const instagramImageUrls = [
  "/photos/IMG_0491.png",
  "/photos/IMG_2541.png",
  "/photos/IMG_1068.png",
  "/photos/IMG_1346.png",
  "/photos/IMG_2753.png",
  "/photos/IMG_3005.png",
  "/photos/IMG_3030.png",
  "/photos/IMG_3625.png",
]

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <NavBar />
        <h1 className="font-bold">FOLLOW ME ON INSTAGRAM</h1>
        <h2 className="">@nickkblendz</h2>
        <div className="sticky grid grid-cols-2 sm:grid-cols-4 gap-4 position-fixed">
          {instagramImageUrls.map((url, index) => (
            <InstagramPhoto key={index} src={url} alt={"Instagram post"} width={300} height={300} />
          ))}
        </div>

        <div id="section4">
          <Image
            className="nick"
            src="/photos/nick.png"
            alt="Photo of Nick Ngo"
            width={180}
            height={80}
            priority
          />
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
