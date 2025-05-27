'use client';
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
<div className="flex flex-col min-h-screen">
<main className="flex-grow flex flex-col items-center p-8 pb-20 gap-8 sm:p-20">
        <NavBar />
        <div className="text-center">
          <h1 className="font-bold pt-20">FOLLOW ME ON INSTAGRAM</h1>
          <a target="_blank" href="https://www.instagram.com/nickkblendz/">
            <h3 className="underline">@nickkblendz</h3>
          </a>

          <div className="sticky grid grid-cols-2 sm:grid-cols-4 gap-4 position-fixed px-4 sm:px-8 lg:px-20">
            {instagramImageUrls.map((url, index) => (
              <InstagramPhoto key={index} src={url} alt={"Instagram post"} dim={300} />
            ))}
          </div>
        </div>

 {/* About Nick Section */}
<div className="w-full text-center mt-16">
          <h1 className="font-bold">ABOUT NICK</h1>
</div>

<div className="w-full flex justify-center mt-8">
  <div className="flex flex-col sm:flex-row items-center gap-8 max-w-4xl">
    {/* Nick's Image */}
    <Image
      className="rounded-lg"
      src="/photos/nick.png"
      alt="Photo of Nick Ngo"
      width={300}
      height={400}
      priority
    />

    {/* About Text */}
    <div className="text-center max-w-md">
      <p className="mb-2">
        Nick is a barber based in the Renton area, he specializes in fades, tapers, and cuts for all ages.
      </p>
      <p className="mb-2">
        Known for top quality lineups, custom designs, and attention to detail. 
      </p>
      <p>📍 Renton, WA</p>
    </div>
  </div>
</div>





      </main>
      <Footer />
    </div>
  );
}


