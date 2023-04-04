import React from "react";
import Lottie from "lottie-react";
import education from "../../assets/28893-book-loading.json";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-between items-center lg:flex-row">
      <div className="mt-10">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          A reader lives a <br className="hidden md:block" />
          thousand lives
          <span className="inline-block text-blue-400 md:ml-2 md:pt-2">
            before he dies
          </span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>
        <div className="flex pt-6 gap-3">
          <Link to={'store'}><Button>Visit Store</Button></Link>
          <Button className="bg-blue-400">Learn More</Button>
        </div>
      </div>
      <div className="w-full">
        <Lottie animationData={education} loop={true} />
      </div>
    </div>
  );
};

export default HomePage;
