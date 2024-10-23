"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutButtons() {
  const pathname = usePathname();

  const isAboutPage = pathname === "/about";
  const isFaqPage = pathname === "/faq";
  const isShopPage =pathname === "/shop"

  if (isAboutPage) {

    return (
      <div className="flex gap-2">
        <Link href="/" className="btn btn-outline">
          Home
        </Link>
        <Link href="/faq" className="btn btn-outline">
          FAQ
        </Link>
      </div>
    );
  }

  if (isFaqPage) {

    return (
      <div className="flex gap-2">
        <Link href="/" className="btn btn-outline">
          Home
        </Link>
        <Link href="/about" className="btn btn-outline">
          About
        </Link>
      </div>
    );
  }

   if (isShopPage) {

    return (
      <div className="flex gap-2">
        <Link href="/" className="btn btn-outline">
          Home
        </Link>
        <Link href="/faq" className="btn btn-outline">
          FAQ
        </Link>
      </div>
    );
  }

  return (
    <Link href="/about" className="btn btn-outline">
      About
    </Link>
  );
}
