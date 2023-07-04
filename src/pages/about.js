import Testimonial from '@/components/testimonial'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
     <Head>
      <title>About</title>
    </Head>
    <section className="pt-10 overflow-hidden bg-white md:pt-0 sm:pt-16 2xl:pt-16">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="grid items-center grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl animate-fade-left animate-delay-300">
          Hey 👋 I am <br className="block sm:hidden" />
          Jenny Carter
        </h2>
        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8 animate-fade-right animate-delay-300">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <p className="mt-4 text-xl text-gray-600 md:mt-8 animate-fade-slow animate-delay-500">
          <span className="relative inline-block">
            <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300" />
            <span className="relative"> Have a question? </span>
          </span>
          <br className="block sm:hidden" />
          Ask me on{" "}
          <a
            href="#"
            title=""
            className="text-teal-500 transition-all duration-200 hover:text-teal-600 hover:underline"
          >
            Twitter
          </a>
        </p>
      </div>
      <div className="relative">
        <img
          className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
          alt=""
        />
        <img
          className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 animate-fade animate-delay-300"
          src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
          alt=""
        />
      </div>
    </div>
  </div>
</section>

    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Meet the brains
        </h2>
        <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis.
        </p>
      </div>
      <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0">
        <div>
          <img
            className="object-cover mx-auto rounded-lg w-28 h-28"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-1.jpg"
            alt=""
          />
          <p className="mt-8 text-lg font-semibold leading-tight text-black">
            Jenny Wilson
          </p>
          <p className="mt-1 text-base leading-tight text-gray-600">Founder</p>
        </div>
        <div className="hidden lg:block" />
        <div>
          <img
            className="object-cover mx-auto rounded-lg w-28 h-28"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-2.jpg"
            alt=""
          />
          <p className="mt-8 text-lg font-semibold leading-tight text-black">
            Darrell Steward
          </p>
          <p className="mt-1 text-base leading-tight text-gray-600">CTO</p>
        </div>
        <div className="hidden lg:block" />
        <div>
          <img
            className="object-cover mx-auto rounded-lg w-28 h-28"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-3.jpg"
            alt=""
          />
          <p className="mt-8 text-lg font-semibold leading-tight text-black">
            Bessie Cooper
          </p>
          <p className="mt-1 text-base leading-tight text-gray-600">CMO</p>
        </div>
        <div className="hidden lg:block" />
        <div>
          <img
            className="object-cover mx-auto rounded-lg w-28 h-28"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-4.jpg"
            alt=""
          />
          <p className="mt-8 text-lg font-semibold leading-tight text-black">
            Arlene McCoy
          </p>
          <p className="mt-1 text-base leading-tight text-gray-600">
            Senior Developer
          </p>
        </div>
        <div className="hidden lg:block" />
        <div>
          <img
            className="object-cover mx-auto rounded-lg w-28 h-28"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-5.jpg"
            alt=""
          />
          <p className="mt-8 text-lg font-semibold leading-tight text-black">
            Brooklyn Simmons
          </p>
          <p className="mt-1 text-base leading-tight text-gray-600">
            Product Designer
          </p>
        </div>
        <div className="hidden lg:block" />
        <div>
          <img
            className="object-cover mx-auto rounded-lg w-28 h-28"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-6.jpg"
            alt=""
          />
          <p className="mt-8 text-lg font-semibold leading-tight text-black">
            Jerome Bell
          </p>
          <p className="mt-1 text-base leading-tight text-gray-600">
            Customer Success
          </p>
        </div>
        <div className="hidden lg:block" />
        <div>
          <img
            className="object-cover mx-auto rounded-lg w-28 h-28"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-7.jpg"
            alt=""
          />
          <p className="mt-8 text-lg font-semibold leading-tight text-black">
            Dianne Russell
          </p>
          <p className="mt-1 text-base leading-tight text-gray-600">
            Front-end Developer
          </p>
        </div>
        <div className="hidden lg:block" />
        <div>
          <img
            className="object-cover mx-auto rounded-lg w-28 h-28"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-8.jpg"
            alt=""
          />
          <p className="mt-8 text-lg font-semibold leading-tight text-black">
            Kristin Watson
          </p>
          <p className="mt-1 text-base leading-tight text-gray-600">H.R</p>
        </div>
        <div className="hidden lg:block" />
        <div>
          <img
            className="object-cover mx-auto rounded-lg w-28 h-28"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-9.jpg"
            alt=""
          />
          <p className="mt-8 text-lg font-semibold leading-tight text-black">
            Eleanor Pena
          </p>
          <p className="mt-1 text-base leading-tight text-gray-600">
            UI Designer
          </p>
        </div>
      </div>
    </div>
  </section>
  <Testimonial/>
    </>
  
  )
}

export default about