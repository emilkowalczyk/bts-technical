import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <nav className='w-full bg-white'>
      <div className='w-full max-w-6xl mx-auto flex justify-center items-center'>
        <Link href={'/'} className='my-2'>
          <Image src={'/logo.jpg'} alt='BTS Logo' width={140} height={0} />
        </Link>
      </div>
    </nav>
  );
}
