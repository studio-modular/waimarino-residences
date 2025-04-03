import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { cn } from "../../utils";
import { Button } from "./button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { ScrollArea } from "./scroll-area";

type PhoneInputProps = Omit<React.ComponentProps<"input">, "onChange" | "ref" | "value"> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
  };

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> = React.forwardRef<
  React.ComponentRef<typeof RPNInput.default>,
  PhoneInputProps
>(({ className, onChange, ...props }, ref) => {
  return (
    <RPNInput.default
      className={cn("flex", className)}
      countrySelectComponent={CountrySelect}
      flagComponent={FlagComponent}
      inputComponent={InputComponent}
      /**
       * Handles the onChange event.
       *
       * react-phone-number-input might trigger the onChange event as undefined
       * when a valid phone number is not entered. To prevent this,
       * the value is coerced to an empty string.
       *
       * @param {E164Number | undefined} value - The entered value
       */
      onChange={(value) => onChange?.(value ?? ("" as RPNInput.Value))}
      ref={ref}
      smartCaret={false}
      {...props}
    />
  );
});
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => <Input className={cn("rounded-none", className)} {...props} ref={ref} />,
);
InputComponent.displayName = "InputComponent";

interface CountryEntry {
  label: string;
  value: RPNInput.Country | undefined;
}

interface CountrySelectProps {
  disabled?: boolean;
  onChange: (country: RPNInput.Country) => void;
  options: CountryEntry[];
  value: RPNInput.Country;
}

const CountrySelect = ({ disabled, onChange, options: countryList, value: selectedCountry }: CountrySelectProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="flex gap-1 rounded-e-none rounded-s-lg border-r-0 pr-3 pl-0 focus:z-10 !bg-transparent border-transparent !rounded-none border-b border-b-white"
          disabled={disabled}
          type="button"
          variant="outline"
        >
          <FlagComponent country={selectedCountry} countryName={selectedCountry} />
          <ChevronsUpDown className={cn("-mr-2 size-4 opacity-50 stroke-1", disabled ? "hidden" : "opacity-100")} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <ScrollArea className="h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countryList.map(({ label, value }) =>
                  value ? (
                    <CountrySelectOption
                      country={value}
                      countryName={label}
                      key={value}
                      onChange={onChange}
                      selectedCountry={selectedCountry}
                    />
                  ) : null,
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

interface CountrySelectOptionProps extends RPNInput.FlagProps {
  onChange: (country: RPNInput.Country) => void;
  selectedCountry: RPNInput.Country;
}

const CountrySelectOption = ({ country, countryName, onChange, selectedCountry }: CountrySelectOptionProps) => {
  return (
    <CommandItem
      className="gap-2 !bg-none"
      onSelect={() => {
        onChange(country);
      }}
    >
      <FlagComponent country={country} countryName={countryName} />
      <span className="flex-1 text-sm">{countryName}</span>
      <span className="text-sm text-foreground/50">{`+${RPNInput.getCountryCallingCode(country)}`}</span>
      <CheckIcon className={`ml-auto size-4 stroke-1 ${country === selectedCountry ? "opacity-100" : "opacity-0"}`} />
    </CommandItem>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInput };
