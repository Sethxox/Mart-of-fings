import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/shopping.png";
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AboutButton from "./AboutButton";
// import ShopButtons from "./ShopBtton";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const cart = await getCart();

  return (
    <div className=" bg-yellow-50">
      <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl normal-case" href="/">
            <Image src={logo} alt="Horimazo logo" width={40} height={40} />
            Mart-Of-Fings
          </Link>
        </div>
{/* <ShopButtons/> */}
         <AboutButton />
        <div className="flex-none gap-2">
          <form action={searchProducts}>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                name="searchQuery"
                id=""
                className="input input-bordered w-full min-w-[100px]"
              />
            </div>
          </form>

          <ShoppingCartButton cart={cart} />
          <UserMenuButton session={session} />
        </div>
      </div>
    </div>
  );
}
