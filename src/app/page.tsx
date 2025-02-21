"use client"; // If using Next.js 13 app router, remove if not needed

import React from "react";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4">
      {/*
        CONTAINER C: <700px
          - Single column, all centered
          - Phone images in the middle
          - Beta testing card with QR code between text & waitlist box
      */}
      <div className="flex flex-col items-center c700:hidden">
        {/* HEADER & SUBTEXT (centered) */}
        <div className="mt-[30px] text-center">
          <h1 className="font-semibold leading-tight text-3xl sm:text-5xl md:text-[70px]">
            Live Capacity Tracker
            <br />
            for UVA Buildings
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-[20px] text-[#606060]">
            find out when and where to study on UVA grounds.
          </p>
        </div>

        {/* PHONE IMAGES in the middle, side by side */}
        <div className="flex flex-row gap-8 mt-8 justify-center">
          <img
            src="/capacity-screen.png"
            alt="Phone 1"
            className="w-[120px] h-[250px] sm:w-[200px] sm:h-[420px] object-contain"
          />
          <img
            src="/clem-screen.png"
            alt="Phone 2"
            className="w-[120px] h-[250px] sm:w-[200px] sm:h-[420px] object-contain -ml-4"
          />
        </div>

        {/* BETA TESTING CARD - Container C */}
        <div className="mt-8 w-full max-w-[666px] bg-white rounded-[15px] p-6 border border-gray-300 text-center">
          <h2 className="mt-[-1] text-[25px] font-medium">
            We are currently beta testing!
          </h2>
          <p className="mt-1 text-[16px] text-[#606060]">
            Scan the QR code on the right or click the
            <br />
            button below to join our waitlist.
          </p>
          <img
            src="/qrcode.png"
            alt="QR Code"
            className="mt-4 mx-auto w-[230px] h-[230px] border border-gray-300 rounded-[10px]"
          />
          <div className="mt-4 w-full max-w-[360px] mx-auto bg-white border border-gray-300 rounded-[10px] p-4">
            <p className="mt-[-5] text-[15px] font-medium text-[#606060]">
              Sign up now and be one of the first to test our application!
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://form.typeform.com/to/ydXMYRhY",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="mt-3 w-full h-10 bg-uva-orange text-white text-[15px] font-medium rounded-[10px]"
            >
              Join Cap@UVA Waitlist
            </button>
          </div>
        </div>
      </div>

      {/*
        CONTAINER A: ≥700px & <1300px
          - Single column layout
          - Header/subtext centered
          - Phone images between header & beta card
      */}
      <div className="hidden c700:flex c1300:hidden flex-col items-center">
        {/* HEADER & SUBTEXT (centered) */}
        <div className="mt-[30px] text-center">
          <h1 className="font-medium leading-tight text-3xl sm:text-5xl md:text-[70px] pl-[13px]">
            Live Capacity Tracker
            <br />
            for UVA Buildings
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-[20px] text-[#606060] pl-[18px]">
            find out when and where to study on UVA grounds.
          </p>
        </div>

        {/* PHONE IMAGES */}
        <div className="flex flex-row gap-8 mt-8 justify-center">
          <img
            src="/capacity-screen.png"
            alt="Phone 1"
            className="w-[120px] h-[250px] sm:w-[200px] sm:h-[420px] object-contain"
          />
          <img
            src="/clem-screen.png"
            alt="Phone 2"
            className="w-[120px] h-[250px] sm:w-[200px] sm:h-[420px] object-contain -ml-4"
          />
        </div>

        {/* BETA TESTING CARD (Container A) */}
        <div className="mt-8 w-full max-w-[666px] bg-white rounded-[15px] p-6 border border-gray-300">
          <div className="flex items-start justify-between">
            <div className="flex flex-col max-w-[400px]">
              <h2 className="mt-[-1] text-[25px] font-medium">
                We are currently beta testing!
              </h2>
              <p className="mt-1 text-[16px] text-[#606060]">
                Scan the QR code on the right or click the
                <br />
                button below to join our waitlist.
              </p>
              <div className="mt-4 w-full max-w-[360px] bg-white border border-gray-300 rounded-[10px] p-4">
                <p className="mt-[-5] text-[15px] font-medium text-[#606060]">
                  Sign up now and be one of the first to test our application!
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://form.typeform.com/to/ydXMYRhY",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="mt-3 w-full h-10 bg-uva-orange text-white text-[15px] font-medium rounded-[10px]"
                >
                  Join Cap@UVA Waitlist
                </button>
              </div>
            </div>
            <img
              src="/qrcode.png"
              alt="QR Code"
              className="w-[230px] h-[230px] border border-gray-300 rounded-[10px] ml-4"
            />
          </div>
        </div>
      </div>

      {/*
        CONTAINER B: ≥1300px
          - Two column layout
            Left: Header/subtext + beta testing card
            Right: phone images
      */}
      <div className="hidden c1300:flex flex-row items-start justify-between gap-8">
        {/* LEFT COLUMN: Header & Subtext + Beta Testing Card */}
        <div className="flex-1 flex flex-col">
          <div className="mt-[58px] text-left">
            <h1 className="pl-[13px] font-medium leading-tight text-5xl md:text-[70px]">
              Live Capacity Tracker
              <br />
              for UVA Buildings
            </h1>
            <p className="mt-4 pl-[18px] text-lg md:text-[20px] text-[#606060]">
              find out when and where to study on UVA grounds.
            </p>
          </div>
          <div className="mt-8 w-full max-w-[666px] bg-white rounded-[15px] p-6 border border-gray-300">
            <div className="flex items-start justify-between">
              <div className="flex flex-col max-w-[400px]">
                <h2 className="mt-[-1] text-[25px] font-medium">
                  We are currently beta testing!
                </h2>
                <p className="mt-1 text-[16px] text-[#606060]">
                  Scan the QR code on the right or click the
                  <br />
                  button below to join our waitlist.
                </p>
                <div className="mt-4 w-full max-w-[360px] bg-white border border-gray-300 rounded-[10px] p-4">
                  <p className="mt-[-5] text-[15px] font-medium text-[#606060]">
                    Sign up now and be one of the first to test our application!
                  </p>
                  <button
                    onClick={() =>
                      window.open(
                        "https://form.typeform.com/to/ydXMYRhY",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="mt-3 w-full h-10 bg-uva-orange text-white text-[15px] font-medium rounded-[10px]"
                  >
                    Join Cap@UVA Waitlist
                  </button>
                </div>
              </div>
              <img
                src="/qrcode.png"
                alt="QR Code"
                className="w-[230px] h-[230px] border border-gray-300 rounded-[10px] ml-4"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Phone Images
            Changed 'mt-20' to 'mt-8' to reduce vertical space
        */}
        <div className="flex flex-row flex-nowrap items-center gap-4 mt-20 -ml-10">
          <img
            src="/capacity-screen.png"
            alt="Phone 1"
            className="w-[237px] h-[491px] object-contain"
          />
          <img
            src="/clem-screen.png"
            alt="Phone 2"
            className="w-[237px] h-[491px] object-contain -ml-20"
          />
        </div>
      </div>
      {/* End of containers */}

      {/* FOOTER */}
      <footer className="mt-10 py-2 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Cap@UVA. All rights reserved.
      </footer>
    </main>
  );
}
