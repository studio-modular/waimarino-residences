import { Instagram } from "lucide-react";
import Link from "next/link";

import { DesignGroupLogo } from "./logo";
import MailingList from "./mailing-list";

export default function Footer() {
  return (
    <footer className="p-8 lg:p-16 bg-[#3C3A2C] dark:bg-black text-white">
      <div className="mx-auto flex flex-col-reverse md:flex-row gap-16 lg:gap-8">
        <nav className="basis-1/4">
          <div className="flex flex-col gap-3 *:font-skia *:tracking-wider uppercase *:text-[#EAEAE5]">
            <Link className="uppercase tracking-wider text-base" href="/">
              Home
            </Link>
            <Link
              className="uppercase tracking-wider text-base"
              href="https://waimarinolodge.co.nz/properties"
              target="_blank"
            >
              Location
            </Link>
            <Link className="uppercase tracking-wider text-base" href="/properties">
              Properties
            </Link>
            <Link className="uppercase tracking-wider text-base" href="/offer">
              The Offer
            </Link>
          </div>
        </nav>
        <div className="basis-3/4 flex-1 max-w-screen-sm">
          <MailingList />
        </div>
      </div>
      <div className="flex gap-4 items-center mt-16">
        <Link href="https://thedesigngroup.co.nz" target="_blank">
          <DesignGroupLogo height="2rem" width="2rem" />
        </Link>
        <div className="flex gap-8 items-center font-skia">
          <Link href="https://thedesigngroup.co.nz" target="_blank">
            <h4 className="uppercase tracking-widest leading-none !my-0 text-xs text-white/50">The Design Group</h4>
          </Link>
          <Link href="https://www.instagram.com/waimarino_lodge/?hl=en" target="_blank">
            <Instagram className="stroke-1 text-sm size-4 !text-white !stroke-white [&_path]:stroke-white [&_path]:text-white -mt-[2px]" />
          </Link>
        </div>
      </div>
      {/* <div className="flex-1 items-center justify-end">
				<p className=" text-right">
					&copy; {new Date().getFullYear()} The Design Group.
					<br />
					All Rights Reserved.
				</p>
			</div> */}
    </footer>
  );
}
