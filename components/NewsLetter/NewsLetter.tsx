import React from "react";
import Container from "@/components/Container/Container";
const NewsLetter = () => {
  return (
    <Container>
      <div className="relative xl:mt-24 lg:mt-20 mt-16 lg:px-20 md:px-16 px-6 overflow-hidden lg:py-16 py-12">
        <div className="mx-auto max-w-6xl h-auto md:px-[120px]  md:py-8 py-7 border border-[#69C1ED] px-9 md:rounded-lg rounded md:flex justify-center items-center">
          <div className="md:w-[574px] w-full flex flex-col justify-center items-center gap-4">
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="md:text-[32px] text-xl font-bold text-center tracking-tight text-[#69C1ED]">
                Don’t Miss Out The Drop
              </h1>
              <p className="md:mt-4 mt-0 md:text-base text-sm items-center text-center tracking-[-0.28px ] xl:text-left leading-8 text-gray-300">
                Submit your email for email reminder
              </p>
            </div>
            <div className="w-full h-auto flex lg:flex-row flex-col justify-center items-center gap-4">
              <div className="lg:h-[52px] h-auto w-full md:mt-6 mt-0 gap-x-4 flex lg:flex-row flex-col justify-center items-center md:pl-4 lg:border-[#69C1ED] lg:border border-0 rounded-full">
                <div className="lg:w-3/2 w-full h-full flex gap-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="lg:w-96 w-full placeholder:text-[10px] lg:h-full md:h-[52px] h-10 border border-[#69C1ED] flex-auto rounded-[32px] bg-[#3c3c3b] outline-none lg:border-0 px-3.5 text-white shadow-sm sm:text-sm sm:leading-6"
                    placeholder="Email"
                  />
                </div>
                <button
                  type="submit"
                  className="lg:w-[180px] flex-none w-full mt-3 lg:mt-0 rounded-full bg-[#69C1ED] md:h-[52px] h-10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <p className="md:mt-4 mt-0 text-xs text-center font-light leading-[17px] tracking-[-0.24px] text-gray-300">
                By submitting your email above, you confirm to receive our drop
                date reminder in your email. We will never trade, give or sale
                your email adress to another party. This email collection is
                solely for Dirty Sockers pre-drop email reminder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsLetter;
