import { logIn } from "@/actions/login";
import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import Form from "next/form";

export function PasswordProtection() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-200 z-[100] flex items-center justify-center">
      <div className="max-w-prose w-full text-center inline-flex gap-4 flex-col">
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
