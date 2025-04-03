"use client";

import { offerAction } from "@/actions/offer";
import { OfferSchema } from "@/schemas/offer";
import { Button } from "@/shadcn/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shadcn/components/ui/form";
import { Input } from "@/shadcn/components/ui/input";
import { PhoneInput } from "@/shadcn/components/ui/phone-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { sendGTMEvent } from "@next/third-parties/google";
import { toast } from "sonner";

import { AutosizeTextarea } from "../shadcn/components/ui/autosize-textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../shadcn/components/ui/select";

export function ContactForm() {
  const { form, handleSubmitWithAction, resetFormAndAction } = useHookFormAction(
    offerAction,
    zodResolver(OfferSchema),
    {
      actionProps: {
        onError: () => {
          toast.error("Something went wrong!");
        },
        onSuccess: ({ input }) => {
          sendGTMEvent({ event: "ENQUIRE_SUBMISSION", value: input.email });
          toast.success("You have successfully submitted your request!");
          resetFormAndAction();
        },
      },
      errorMapProps: {},
      formProps: {
        defaultValues: {
          email: "",
          message: "",
          name: "",
          phoneNumber: "",
          postalAddress: "",
          preferredMethodOfContact: undefined,
        },
      },
    },
  );

  return (
    <Form {...form} key={`enquire-${form.formState.submitCount}`}>
      <form className="w-full flex space-y-6 flex-wrap items-start [&_div]:w-full" onSubmit={handleSubmitWithAction}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className="!border-b-dg-off-black placeholder:text-dg-off-black/80  text-dg-off-black"
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="!border-b-dg-off-black placeholder:text-dg-off-black/80  text-dg-off-black"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <PhoneInput
                  {...field}
                  className="*:border-b-dg-off-black [&_input]:!border-b-dg-off-black [&_input]:!text-dg-off-black [&_input]:placeholder:text-dg-off-black/80 [&_input]:rounded-none"
                  value={field.value ?? undefined}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postalAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <AutosizeTextarea
                  className="border-black placeholder:text-dg-off-black/80  text-dg-off-black"
                  placeholder="Postal Address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <AutosizeTextarea
                  className="border-black placeholder:text-dg-off-black/80  text-dg-off-black"
                  placeholder="Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferredMethodOfContact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Method of Contact</FormLabel>
              <Select {...field} defaultValue={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className="w-full text-left px-3 py-2 text-sm data-[placeholder]:text-dg-off-black/80 border border-black rounded-none bg-transparent">
                    <SelectValue placeholder="Preferred Method of Contact" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="block">
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="email-or-phone">Phone or Email</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="!mt-8 px-12 py-4 !bg-[#3C3A2C] text-white uppercase font-skia tracking-widest rounded-none"
          disabled={form.formState.isSubmitting || form.formState.isLoading || form.formState.isValidating}
          type="submit"
        >
          Enquire
        </Button>
      </form>
    </Form>
  );
}

export default function ContactFormRenderer() {
  return (
    <div className="max-w-screen-sm mx-auto gap-8 flex flex-col py-20">
      {/* {data.heading && <h2 className="text-xl uppercase font-semibold leading-none mb-0">{data.heading}</h2>}
			{data.beforeText && <RichText className="flex flex-col gap-4 richtext" data={data.beforeText} />} */}
      <ContactForm />
      {/* {data.afterText && <RichText className="flex flex-col gap-4 text-center richtext" data={data.afterText} />} */}
    </div>
  );
}
