import React, { useEffect, useRef } from "react";
export default function MobileNavBar() {
  const headerRef = useRef(null);
  const serviceIconsRef = useRef(null);
  const locationRef = useRef(null);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    // GSAP and ScrollTrigger ko load karna
    const loadGSAP = async () => {
      // GSAP load karna
      const gsapScript = document.createElement("script");
      gsapScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
      document.head.appendChild(gsapScript);

      await new Promise((resolve) => {
        gsapScript.onload = resolve;
      });

      // ScrollTrigger load karna
      const scrollTriggerScript = document.createElement("script");
      scrollTriggerScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
      document.head.appendChild(scrollTriggerScript);

      await new Promise((resolve) => {
        scrollTriggerScript.onload = resolve;
      });

      // GSAP animations setup
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      // Service Icons Animation - fade out and move up
      gsap.to(serviceIconsRef.current, {
        y: -150,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top top",
          end: "100px top",
          scrub: true,
        },
      });

      // Location Bar Animation - fade out and move up
      gsap.to(locationRef.current, {
        y: -120,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "50px top",
          end: "150px top",
          scrub: true,
        },
      });

      // Search Bar Pin - Sticky behavior with scrub
      ScrollTrigger.create({
        trigger: searchContainerRef.current,
        start: "top 0px",
        end: "max",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });

      // Search Bar Background Color Animation with scrub
      gsap.to(searchContainerRef.current, {
        backgroundColor: "rgba(249, 115, 22, 0.95)", // orange-500 with transparency
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        backdropFilter: "blur(10px)",
        scrollTrigger: {
          trigger: searchContainerRef.current,
          start: "top 0px",
          end: "50px top",
          scrub: true,
        },
      });
    };

    loadGSAP();

    // Cleanup function
    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  return (
    <>
      {/* Main Container with proper structure */}
      <div className="w-full">
        {/* Header Background Container */}
        <div
          ref={headerRef}
          className="w-full bg-gradient-to-b from-orange-400 to-orange-200 pt-4 pb-0 relative"
        >
          {/* Service Icons Grid */}
          <div
            ref={serviceIconsRef}
            className="grid grid-cols-4 gap-4 px-4 mb-4"
          >
            {/* Flipkart */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex flex-col items-center justify-center shadow-sm relative">
                <div className="text-blue-600 font-bold text-xl mb-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 7h18l-2 10H5L3 7zm0-2L1 2h3l2 3h14l-3 15H5L3 5z" />
                    <path d="M7 7h2v2H7V7zm4 0h2v2h-2V7z" />
                  </svg>
                </div>
              </div>
              <span className="text-black font-semibold text-sm mt-1">
                Flipkart
              </span>
            </div>

            {/* Pay */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm">
                <div className="w-8 h-6 bg-blue-500 rounded-sm flex items-center justify-center mb-1">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
              </div>
              <span className="text-black font-semibold text-sm mt-1">Pay</span>
            </div>

            {/* Travel */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm">
                <div className="text-2xl mb-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#4F46E5"
                  >
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                  </svg>
                </div>
              </div>
              <span className="text-black font-semibold text-sm mt-1">
                Travel
              </span>
            </div>

            {/* Grocery */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm">
                <div className="text-2xl mb-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#F59E0B"
                  >
                    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
              </div>
              <span className="text-black font-semibold text-sm mt-1">
                Grocery
              </span>
            </div>
          </div>

          {/* Location Bar - removed bottom margin */}
          <div
            ref={locationRef}
            className="flex items-center justify-between px-4 py-1"
          >
            <div className="flex items-center flex-1">
              <div className="w-6 h-6 mr-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <span className="text-black text-sm flex-1 font-medium text-wrap">
                behmpur, She...
              </span>
              <span className="text-black text-lg ml-2">›</span>
            </div>
            <div className="bg-yellow-400 rounded-full px-3 py-1.5 flex items-center ml-4 shadow-sm">
              <div className="w-4 h-4 bg-yellow-600 rounded-full flex items-center justify-center mr-1">
                <span className="text-white text-xs font-bold">⚡</span>
              </div>
              <span className="text-black text-sm font-bold">999</span>
            </div>
          </div>
        </div>

        {/* Search Container - No gap, thicker background initially */}
        <div
          ref={searchContainerRef}
          className="w-full px-4 py-1 bg-orange-200 z-50"
          style={{ backgroundColor: "rgba(254, 215, 170, 1)" }}
        >
          <div className="flex items-center space-x-3">
            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden flex-1">
              <div className="flex items-center px-4 py-3">
                <input
                  type="text"
                  placeholder="search ..."
                  className="flex-1 min-w-0 text-gray-700 text-base outline-none"
                />

                <div className="w-5 h-5 flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#6B7280"
                  >
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div className="bg-white p-3 rounded-2xl shadow-sm">
              <div className="w-7 h-7">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#6B7280">
                  <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM15 19h2v2h-2zM17 13h2v2h-2zM19 15h2v2h-2zM17 17h2v2h-2zM19 19h2v2h-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
