// "use client";

// import React, { useState, useEffect } from "react";
// import { PaystackButton } from "react-paystack";
// import { getCart } from "@/lib/db/cart"; // Adjust based on how you retrieve your cart data
// import { formatPrice } from "@/lib/format";
// import { env } from "@/lib/env";

// interface ShoppingCart {
//   items: {
//     product: {
//       id: string;
//       name: string;
//       price: number;
//       // Add other product properties if necessary
//     };
//     quantity: number;
//   }[];
// }

// const CheckoutPage = () => {
//   const [cart, setCart] = useState<ShoppingCart | null>(null);
//     const publicKey = env.REACT_APP_PAYSTACK_PUBLIC_KEY || "pk_test_d77b870829a65ce9d2a4ff24b49749f3587e5330";
    
//     if (!publicKey) {
//     console.error("Paystack public key is not defined.");
//   }

//   // Fetch cart data
//   useEffect(() => {
//     const fetchCart = async () => {
//       const cartData: ShoppingCart | null = await getCart();
//       setCart(cartData);
//     };
    
//     fetchCart();
//   }, []);

//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");

//   // Calculate total amount safely
//   const totalAmount = cart?.items?.reduce((total, item) => total + item.product.price * item.quantity, 0) || 0;

//   const componentProps = {
//     email,
//     amount: totalAmount * 100, // Convert to kobo
//     metadata: {
//       name,
//       phone,
//       custom_fields: [
//         {
//           value: phone,
//           variable_name: "phone_number",
//           display_name: "Phone Number",
//         },
//       ],
//     },
//     publicKey,
//     text: "Pay Now",
//     onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
//     onClose: () => alert("Wait! Don't leave :("),
//   };

//   return (
//     <div className="p-4">
//       <h1 className="mb-6 text-3xl font-bold">Checkout</h1>
//       {cart?.items && cart.items.length > 0 ? ( // Add null check here
//         <div>
//           {cart.items.map((cartItem) => (
//             <div key={cartItem.product.id} className="flex items-center mb-4">
//               <div className="flex-1">
//                 <p className="text-lg font-semibold">{cartItem.product.name}</p>
//                 <p>{formatPrice(cartItem.product.price * cartItem.quantity)}</p>
//               </div>
//             </div>
//           ))}
//           <div className="total mb-6">
//             <p className="font-bold">Total: {formatPrice(totalAmount)}</p>
//           </div>
//           <form>
//             <label className="block mb-2">Name</label>
//             <input
//               type="text"
//               id="name"
//               className="input w-full mb-4 p-2 border rounded"
//               onChange={(e) => setName(e.target.value)}
//             />
//             <label className="block mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="input w-full mb-4 p-2 border rounded"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <label className="block mb-2">Phone</label>
//             <input
//               type="tel"
//               id="phone"
//               className="input w-full mb-4 p-2 border rounded"
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </form>
//           <PaystackButton 
//             {...componentProps} 
//                       className="btn-primary mt-4" 
//                       disabled={!name || !email || !phone || totalAmount === 0}
//           />
//           <input 
//             type="hidden" 
//             value={totalAmount * 100} 
//           /> {/* This hidden input holds the amount for Paystack */}
//         </div>
//       ) : (
//         <p className="text-red-500">Your cart is empty.</p>
//       )}
//     </div>
//   );
// };
const CheckoutPage = () =>
{
    return (
        <div>
            <h1>Still on process....</h1>
        </div>
    )
};

export default CheckoutPage;