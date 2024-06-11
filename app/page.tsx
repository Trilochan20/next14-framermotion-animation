"use client";

import AnimatedDiv from "./component/ui/AnimatedDiv";

export default function Home() {
  return (
    <main>
      <section className="bg-white h-screen flex justify-center items-center dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>
            <span className="text-sm font-medium">
              Lorem ipsum picsum lorem ispum
            </span>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            We invest in the world’s potential
          </h1>
          <AnimatedDiv
            animationType="wiper"
            children={
              <img
                src="https://images.pexels.com/photos/20697751/pexels-photo-20697751/free-photo-of-shot-with-oldroll-classic-m.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mockup"
                className="w-full h-[256px] object-cover "
              />
            }
          />
        </div>
      </section>

      <section className="bg-white h-screen flex justify-center items-center dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <AnimatedDiv animationType="windshieldWiper">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                voluptatum deleniti atque corrupti
              </h1>
              <p className="max-w-2xl mb-6 font-light text-blue-500 lg:mb-8 md:text-lg lg:text-xl dark:text-light-blue-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </AnimatedDiv>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://images.pexels.com/photos/20697751/pexels-photo-20697751/free-photo-of-shot-with-oldroll-classic-m.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section className="bg-white h-screen flex justify-center items-center dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full dark:hidden"
            src="https://images.pexels.com/photos/20697751/pexels-photo-20697751/free-photo-of-shot-with-oldroll-classic-m.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dashboard image"
          />
          <img
            className="w-full hidden dark:block"
            src="https://images.pexels.com/photos/20697751/pexels-photo-20697751/free-photo-of-shot-with-oldroll-classic-m.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Perspiciatis unde omnis iste natus error sit
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
