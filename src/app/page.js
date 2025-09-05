'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdAcUnit, MdBusiness, MdComputer, MdElectricBolt, MdLocalFireDepartment, MdLock, MdPersonPin, MdPhoneInTalk, MdSettingsSuggest } from 'react-icons/md';

export default function Home() {
  const scrollToFooter = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='space-y-24'>
      {/* HERO */}
      <header className='mt-20 flex flex-col justify-center items-center space-y-5 text-center'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>Kompleksowa obsługa obiektów</h1>
        <p className='text-lg text-gray-600 max-w-2xl'>Dbamy o bezpieczeństwo, sprawność i komfort Twojej nieruchomości</p>
        <button onClick={scrollToFooter} className='cursor-pointer px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition'>
          Skontaktuj się z nami
        </button>
        <Image src={'/home2.jpg'} alt='Homepage background' width={1920} height={380} className='mt-16 w-full max-h-[480px] object-cover rounded-xl shadow-lg' />
      </header>

      {/* ABOUT */}
      <section className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl mx-auto px-4'>
        <div className='space-y-5'>
          <h3 className='text-3xl font-bold text-gray-800'>Kim jest BTS</h3>
          <p className='text-gray-600 leading-relaxed'>
            BTS to zespół specjalistów z wieloletnim doświadczeniem w branży technicznej. Firma koncentruje się na kompleksowej obsłudze nowoczesnych obiektów biurowych, przemysłowych i usługowych.
          </p>
        </div>
        <Image src={'/home3.jpg'} alt='Kim jest BTS' width={1920} height={480} className='rounded-xl shadow-lg hidden md:block' />
      </section>

      {/* SPECIALIZATIONS */}
      <section className='space-y-10 px-4'>
        <h3 className='text-3xl font-bold text-center text-gray-800'>Specjalizacje BTS</h3>
        <div className='w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[
            { icon: <MdElectricBolt size={50} />, text: 'Instalacje elektryczne i systemy zasilania' },
            { icon: <MdComputer size={50} />, text: 'Informatyka i integracja systemów' },
            { icon: <MdBusiness size={50} />, text: 'Systemy BMS (Building Management System)' },
            { icon: <MdAcUnit size={50} />, text: 'Klimatyzacja i wentylacja' },
            { icon: <MdLock size={50} />, text: 'Kontrola dostępu i monitoring' },
            { icon: <MdLocalFireDepartment size={50} />, text: 'Systemy przeciwpożarowe, w tym gaszenie gazem' },
          ].map((item, i) => (
            <div key={i} className='space-y-4 bg-white shadow-lg rounded-xl p-8 flex flex-col justify-center items-center text-center hover:shadow-2xl hover:-translate-y-1 transition'>
              <div className='text-blue-600'>{item.icon}</div>
              <h3 className='font-semibold text-gray-700'>{item.text}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BTS */}
      <section className='space-y-10 px-4 py-20 bg-gray-50'>
        <h3 className='text-3xl text-center font-bold text-gray-800'>Dlaczego BTS</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
          <div className='bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition'>
            <MdBusiness size={40} className='text-blue-600' />
            <h4 className='mt-3 font-semibold text-gray-800'>Doświadczenie</h4>
            <p className='text-sm text-gray-600'>Zdobywane od lat w obsłudze dużych budynków</p>
          </div>

          <div className='bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition'>
            <MdSettingsSuggest size={40} className='text-green-600' />
            <h4 className='mt-3 font-semibold text-gray-800'>Znajomość systemów</h4>
            <p className='text-sm text-gray-600'>Kluczowe rozwiązania w nowoczesnych obiektach</p>
          </div>

          <div className='bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition'>
            <MdPhoneInTalk size={40} className='text-orange-600' />
            <h4 className='mt-3 font-semibold text-gray-800'>Szybki kontakt</h4>
            <p className='text-sm text-gray-600'>Profesjonalne podejście i dostępność</p>
          </div>

          <div className='bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition'>
            <MdPersonPin size={40} className='text-red-600' />
            <h4 className='mt-3 font-semibold text-gray-800'>Indywidualne podejście</h4>
            <p className='text-sm text-gray-600'>Dopasowanie do każdego zlecenia</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id='kontakt' className='bg-gray-900 text-gray-300 py-12'>
        <div className='w-full max-w-6xl mx-auto px-4 space-y-6 text-center'>
          <h3 className='text-2xl font-bold text-white'>Skontaktuj się z nami</h3>
          <div className='space-y-2'>
            <h4 className='font-semibold text-white'>Piotr Klimek</h4>
            <p>Prezes zarządu</p>
            <p>Tel: +48 606 694 539</p>
            <p>E-mail: piotrklimek@bts-technical.pl</p>
          </div>
          <p className='mt-10 text-sm text-gray-500'>Copyright &copy; 2025 Wszelkie prawa zastrzeżone</p>
          <Link href='/' className='text-blue-400 hover:text-blue-300 transition'>
            bts-technical.pl
          </Link>
        </div>
      </footer>
    </div>
  );
}
