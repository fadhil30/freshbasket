'use client';

import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { CartTotalPriceContext } from '@/context/cart-total-price-provider';

export function Bill() {
  const cartPrice = useContext(CartTotalPriceContext);

  // pengen masukin endpoint itemOrder
  useEffect(() => {}, []);

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  if (!cartPrice) return null;

  return (
    <div className="w-full lg:w-[30%] sticky top-10 bg-white shadow-2xl p-4 border-2 border-lime-600 h-full rounded-2xl ">
      <h2 className="text-2xl font-semibold mb-2">Bill</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between mb-2 mt-1">
          <p>Total Price:</p>
          <p className="text-lg font-semibold">
            {formatter.format(cartPrice.totalPrice)}
          </p>
        </div>
        <button
          className={`w-full ${
            cartPrice.totalPrice === 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-lime-600'
          } text-black py-2 text-lg rounded-md font-semibold hover:bg-lime-500 transition`}
          disabled={cartPrice.totalPrice === 0}
        >
          <Link href={'/checkout'} className="block w-full">
            Go To Checkout
          </Link>
        </button>
      </div>
    </div>
  );
}
