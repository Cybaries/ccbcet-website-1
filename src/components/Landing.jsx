import React from "react";

export default function Landing() {
  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-5 mb-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 md:mt-12">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
        <div className="xl:max-w-xl">
          {/* <img className="h-10" src="/img/ccbcet-logo.svg" alt="Workcation" /> */}
          <img
            className="mt-6 rounded-lg sm:mt-8 sm:h-64 sm:w-auto sm:object-cover object-center lg:hidden"
            src="/img/landing_img.svg"
            alt="Woman workcationing on the beach"
          />
          <h1 className="mt-12 text-2xl font-headline tracking-tight font-semibold text-brand-light sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
            CodeChef BCET Chapter
          </h1>
          <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
            CodeChef BCET Chapter is a community organisation established with the help of CodeChef to instill the culture of Programming.
          </p>
          {/* button  */}
          <div className="mt-4 space-x-1 sm:mt-6">
            <a
              className="inline-block px-5 py-3 rounded-lg transform transition bg-brand-light hover:bg-brand-light hover:-translate-y-0.5 focus:ring-brand-light focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-brand-dark uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
              href="https://www.codechef.com/college-chapter/member" target="_blank" 
            >
              become a member
            </a>
          </div>
        </div>
      </div>
      {/* largest view  */}
      <div className="hidden relative lg:block 2xl:col-span-3">
        <img
          className="absolute inset-0 min-w-full h-full"
          src="/img/landing_img.svg"
          alt="Woman workcationing on the beach"
        />
      </div>
    </div>
  );
}