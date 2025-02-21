// src/app/navbar.tsx
import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      className="
         mx-auto
        mt-[15px]
        w-full
        max-w-[320px] sm:max-w-[425px]
        h-[40px] sm:h-[48px]
        bg-white
        border
        border-gray-300
        rounded-[12px]
        flex
        items-center
        justify-center
        px-2
        gap-2
        sm:gap-[22px]
      "
    >
      {/* Logo + “Cap@UVA” => single clickable link to home page */}
      <Link href="/" className="flex items-center gap-[10px]">
        <img
          src="/logo.png"
          alt="Cap@UVA Logo"
          className="h-[30px] w-[30px]"
        />
        <span
          className="
            text-sm
            sm:text-base
            font-semibold
            leading-none
          "
        >
          Cap@UVA
        </span>
      </Link>

      {/* GitHub Link */}
      <a
        href="https://github.com/shivpatel0812/Building_Cap_Track"
        className="
          text-xs
          sm:text-sm
          hover:underline
        "
      >
        GitHub
      </a>

      {/* Contact Us Link */}
      <a
        href="/contact"
        className="
          text-xs
          sm:text-sm
          hover:underline
          
        "
      >
        Contact Us
      </a>

      {/* Sign Up Button */}

      <a
        href="https://form.typeform.com/to/ydXMYRhY"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
        >
      <button
        className="
          bg-uva-orange
          text-white
          px-3
          py-1
          rounded-[5px]
          text-xs
          sm:text-sm
        "
      >
        Sign Up
      </button>
      </a>
    </nav>
  );
}
