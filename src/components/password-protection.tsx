/* eslint-disable @next/next/no-img-element */
import { logIn } from "@/actions/login";
import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import Form from "next/form";

export function PasswordProtection() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-200 z-[100] flex items-center justify-center">
      <img
        alt="Waimarino Lodge"
        className="object-cover object-center w-full h-full fixed top-0 left-0"
        data-nimg="1"
        decoding="async"
        height="2500"
        loading="lazy"
        sizes="(max-width: 768px) 200vw, 100vw"
        src="https://d1et5tg8povlkp.cloudfront.net/images/indoor-outdoor-3000x1500.jpg?q=100&amp;w=3000"
        srcSet="https://d1et5tg8povlkp.cloudfront.net/images/indoor-outdoor-1500x750.jpg?q=100&amp;w=750 750w, https://d1et5tg8povlkp.cloudfront.net/images/indoor-outdoor-1500x750.jpg?q=100&amp;w=1500 1500w, https://d1et5tg8povlkp.cloudfront.net/images/indoor-outdoor-2250x1125.jpg?q=100&amp;w=2250 2250w, https://d1et5tg8povlkp.cloudfront.net/images/indoor-outdoor-3000x1500.jpg?q=100&amp;w=3000 3000w"
        width="5000"
      ></img>
      <div className="max-w-prose w-full text-center inline-flex gap-4 flex-col relative z-10 bg-dg-background p-8">
        <Form action={logIn} className="mb-8">
          <Input
            className="text-black text-center border-b-black"
            name="password"
            placeholder="Password"
            type="password"
          />
          <Button className="mt-4" variant="dg-secondary">
            Login
          </Button>
        </Form>
        <p>
          If you are interested in this project but don&apos;t have a password please contact the project principal:
          Andrew McIntosh
        </p>
        <p>
          Phone:{" "}
          <a className="underline underline-offset-4" href="tel:+61405133671">
            +61 405 133 671
          </a>
        </p>
        <p>
          Email:{" "}
          <a className="underline underline-offset-4" href="mailto:andrew@thedesigngroup.co.nz">
            andrew@thedesigngroup.co.nz
          </a>
        </p>
      </div>
    </div>
  );
}
