import React from "react";
import { Footer, FloatingLabel } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function FooterSec() {
  return (
    <div className="bg-gray-300 py-10 mt-16">
      <Footer
        container
        className="bg-inherit shadow-none w-5/6 mx-auto flex flex-col justify-center"
      >
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:grid-cols-1 ">
            <div className="flex flex-col justify-start items-start gap-3 sm:mr-6">
              <div className="flex justify-start items-start">
                <svg
                  className="text-black w-8 h-8 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M15.954 12a17.23 17.23 0 0 1-.324.233c-.826.585-2.023.985-3.58.985h-.104c-1.556 0-2.755-.4-3.58-.985A36.43 36.43 0 0 1 8.042 12c.09-.067.196-.143.324-.234c.825-.584 2.024-.985 3.58-.985h.104c1.557 0 2.756.401 3.58.985c.129.09.235.167.325.234M24 7.181s-.709-.541-2.95-1.365c-1.968-.721-3.452-.883-3.452-.883l.006 4.243c0 .598-.162 1.143-.618 1.765c-1.672-.61-3.254-.985-4.981-.985c-1.728 0-3.308.375-4.98.985c-.457-.619-.62-1.168-.62-1.765l.007-4.243s-1.494.16-3.463.883C.709 6.642 0 7.181 0 7.181c.093 1.926 1.78 3.638 4.435 4.82C1.777 13.18.09 14.887 0 16.818c0 0 .709.54 2.949 1.365c1.968.721 3.453.883 3.453.883l-.007-4.244c0-.597.164-1.143.619-1.764c1.672.61 3.252.983 4.98.983c1.727 0 3.309-.374 4.98-.983c.457.62.62 1.167.62 1.764l-.006 4.244s1.484-.16 3.452-.883c2.241-.826 2.95-1.365 2.95-1.365c-.093-1.927-1.78-3.64-4.435-4.819c2.657-1.182 4.343-2.888 4.435-4.82"
                  />
                </svg>
                <span className=" whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white">
                  Under Armour
                </span>
              </div>
              <div className="hidden xl:flex items-center justify-between gap-5 mt-5">
                <FloatingLabel
                  variant="outlined"
                  label="Email Address"
                  className="bg-gray-300 border-gray-400 text-black pr-10 w-[20rem]"
                />

                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-md mb-2"
                >
                  Submit
                </button>
              </div>
              <p className="hidden xl:inline w-[28rem] text-sm text-gray-600">
                By providing your email, you agree to the
                <span className="underline">Terms & Conditions</span> and
                <span className="underline"> Privacy Policy</span>. You may
                unsubscribe later
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-10 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" className="font-bold" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Affiliates</Footer.Link>
                  <Footer.Link href="#">UA Rewards</Footer.Link>
                  <Footer.Link href="#">UA Access To Sports</Footer.Link>
                  <Footer.Link href="#">Careers</Footer.Link>
                  <Footer.Link href="#">Product Recalls</Footer.Link>
                  <Footer.Link href="#">UA Community</Footer.Link>
                </Footer.LinkGroup>
              </div>

              <div>
                <Footer.Title title="Legal" className="font-bold" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Need Help?" className="font-bold" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Help Center</Footer.Link>
                  <Footer.Link href="#">Size Guide</Footer.Link>
                  <Footer.Link href="#">Shipping & Delivery</Footer.Link>
                  <Footer.Link href="#">Returns & Exchanges</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Under Armour" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="#"
                icon={BsFacebook}
                className="hover:text-black transition-all duration-500"
              />
              <Footer.Icon
                href="#"
                icon={BsInstagram}
                className="hover:text-black transition-all duration-500"
              />
              <Footer.Icon
                href="#"
                icon={BsTwitter}
                className="hover:text-black transition-all duration-500"
              />
              <Footer.Icon
                href="#"
                icon={BsGithub}
                className="hover:text-black transition-all duration-500"
              />
              <Footer.Icon
                href="#"
                icon={BsDribbble}
                className="hover:text-black transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default FooterSec;
