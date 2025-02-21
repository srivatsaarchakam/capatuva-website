"use client"; // If using Next.js 13 app router, remove if not needed

import React from "react";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-[600px] px-4 pt-8 flex flex-col items-center">
      <div className="w-full max-w-[500px] bg-white border border-gray-300 rounded-[15px] p-6 text-center">
        <p>
          If you’re looking to join the team or learn more about Cap@UVA, 
          please email us at:
        </p>
        <p className="mt-2 font-semibold">capacityuva@gmail.com</p>
      </div>

      {/* FOOTER */}
      <footer className="mt-10 py-2 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Cap@UVA. All rights reserved.
      </footer>
    </main>
  );
}

