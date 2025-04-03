"use client";

import { mailingListAction } from "@/actions/mailing-list";
import { Button } from "@/shadcn/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/shadcn/components/ui/form";
import { Input } from "@/shadcn/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { toast } from "sonner";

import { MailingListSchema } from "../schemas/mailing-list";

export default function MailingList() {
  const { form, handleSubmitWithAction, resetFormAndAction } = useHookFormAction(
    mailingListAction,
    zodResolver(MailingListSchema),
    {
      actionProps: {
        onError: () => {
          toast.error("Something went wrong!");
        },
        onSuccess: ({}) => {
          toast.success("You have successfully signed up!");
          resetFormAndAction();
        },
      },
      errorMapProps: {},
      formProps: {
        defaultValues: {
          email: "",
          name: "",
        },
      },
    },
  );
  return (
    <>
      <h2 className="text-[#EAEAE5] uppercase text-lg tracking-widest font-skia mb-8">Sign up to the mailing list</h2>
      <Form {...form} key={`mailing-list-${form.formState.submitCount}`}>
        <form className="w-full flex flex-col gap-4 items-start" onSubmit={handleSubmitWithAction}>
          <div className="flex flex-col flex-wrap lg:flex-row w-full *:flex-1 gap-4 lg:gap-16">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-[#EAEAE5] placeholder:text-[#EAEAE5] border-b-[#EAEAE5] "
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-[#EAEAE5] placeholder:text-[#EAEAE5] border-b-[#EAEAE5] "
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            className="mt-4 lg:mt-12 px-12 py-6 uppercase font-skia tracking-widest rounded-none !bg-[#D0CDC3] text-black"
            disabled={form.formState.isSubmitting || form.formState.isLoading || form.formState.isValidating}
            type="submit"
          >
            Subscribe
          </Button>
        </form>
      </Form>
    </>
  );
}
