'use client';

import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow flex flex-col items-center p-8 pb-20 gap-8 sm:p-20 pt-20">
        {/* Page Title */}
        <div className="w-full text-center mt-8">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide">SERVICES</h1>
        </div>

        {/* Services List */}
        <div className="w-full flex justify-center mt-4">
          <div className="flex flex-col gap-6 text-center max-w-md w-full">
            <div className="border-b border-gray-600 pb-4">
              <p className="text-xl sm:text-2xl font-semibold">Haircut / Taper / Fade</p>
              <p className="text-base sm:text-lg text-gray-300 mt-1">$30</p>
            </div>
            <div className="border-b border-gray-600 pb-4">
              <p className="text-xl sm:text-2xl font-semibold">Haircut + Beard</p>
              <p className="text-base sm:text-lg text-gray-300 mt-1">$35</p>
            </div>
            <div className="border-b border-gray-600 pb-4">
              <p className="text-xl sm:text-2xl font-semibold">Kids Haircut</p>
              <p className="text-base sm:text-lg text-gray-300 mt-1">$25</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

