"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ShopButtons() {
  const pathname = usePathname();

  const isAboutPage = pathname === "/about";
    const isFaqPage = pathname === "/faq";
    const isShopPage = pathname === "/shop";

    let shopButton;

      if (isShopPage) {
    return null;
  }

  if (isAboutPage || isFaqPage) {
    shopButton = (
      <Link href="/shop" className="btn btn-outline">
        Shop
      </Link>
    );
  } else {
    shopButton = (
      <Link href="/shop" className="btn btn-outline">
        Shop
      </Link>
    );
  }
  return (
    <div className="flex gap-2">
      {shopButton}
    </div>
  );
}
