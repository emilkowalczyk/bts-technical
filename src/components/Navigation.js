import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <nav className='w-full bg-white'>
      <div className='w-full max-w-6xl mx-auto flex justify-center items-center'>
        <Link href={'/'} className='my-2'>
          <Image src={'/logo.jpg'} alt='BTS Logo' width={100} height={0} />
        </Link>
        {/* <button className='bg-black text-white h-max px-4 py-2'>Kontakt</button> */}
      </div>
    </nav>
  );
}
