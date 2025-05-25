import Image from "next/image";
import NavBar from "./components/navbar";
import InstagramPhoto from "./components/instagram-photo";
import Footer from "./components/footer";

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
        <div className="text-center">
          <h1 className="font-bold">FOLLOW ME ON INSTAGRAM</h1>
          <a target="_blank" href="https://www.instagram.com/nickkblendz/">
            <h3 className="underline">@nickkblendz</h3>
          </a>

          <div className="sticky grid grid-cols-2 sm:grid-cols-4 gap-4 position-fixed">
            {instagramImageUrls.map((url, index) => (
              <InstagramPhoto key={index} src={url} alt={"Instagram post"} dim={300} />
            ))}
          </div>

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
    </div>
  );
}
