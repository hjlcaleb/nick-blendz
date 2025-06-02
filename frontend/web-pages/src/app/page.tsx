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
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center p-8 pb-20 gap-8 sm:p-20">
        <NavBar />

        {/* Instagram Section */}
        <div className="text-center">
          <h1 className="font-bold text-2xl sm:text-3xl pt-20">FOLLOW ME ON INSTAGRAM</h1>
          <a target="_blank" href="https://www.instagram.com/nickkblendz/">
            <h3 className="underline">@nickkblendz</h3>
          </a>

          <div className="sticky grid grid-cols-2 sm:grid-cols-4 gap-4 position-fixed px-4 sm:px-8 lg:px-20 mt-4">
            {instagramImageUrls.map((url, index) => (
              <InstagramPhoto key={index} src={url} alt={"Instagram post"} dim={300} />
            ))}
          </div>
        </div>

        {/* About Nick Header */}
        <div className="w-full text-center mt-16">
          <h1 className="font-bold text-2xl sm:text-3xl">ABOUT NICK</h1>
        </div>

        {/* About Nick Content */}
        <div className="w-full flex justify-center mt-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 max-w-4xl">
            <Image
              className="rounded-lg"
              src="/photos/nick.png"
              alt="Photo of Nick Ngo"
              width={300}
              height={400}
              priority
            />

            <div className="text-center max-w-md">
              <p className="mb-2">
                Nick is a barber based in the Renton area. He specializes in fades, tapers, and cuts for all ages.
              </p>
              <p className="mb-2">
                Known for top quality lineups, custom designs, and attention to detail.
              </p>
              <p>📍 Renton, WA</p>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="w-full flex justify-center mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5392.751923219898!2d-122.1564362230273!3d47.48258887117889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549067c4be3d723b%3A0x458a96e3c59cf7b9!2s120%20Elma%20Pl%20SE%2C%20Renton%2C%20WA%2098059!5e0!3m2!1sen!2sus!4v1748838305214!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md max-w-3xl"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}



