import { add, format } from "date-fns";
import { enUS, type Locale } from "date-fns/locale";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Clock } from "lucide-react";
import * as React from "react";
import { useImperativeHandle, useRef } from "react";
import { DayPicker } from "react-day-picker";

import type { CalendarProps } from "./calendar";

import { cn } from "../../utils";
import { Button, buttonVariants } from "./button";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

type GetValidArrowNumberConfig = {
  max: number;
  min: number;
  step: number;
};

type GetValidNumberConfig = { loop?: boolean; max: number; min?: number };

type Period = "AM" | "PM";

type TimePickerType = "12hours" | "hours" | "minutes" | "seconds";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  yearRange = 50,
  ...props
}: CalendarProps & { yearRange?: number }) {
  const MONTHS = React.useMemo(() => {
    let locale: Pick<Locale, "formatLong" | "localize" | "options"> = enUS;
    const { formatLong, localize, options } = props.locale || {};
    if (options && localize && formatLong) {
      locale = {
        formatLong,
        localize,
        options,
      };
    }
    return genMonths(locale);
  }, [props.locale]);

  const YEARS = React.useMemo(() => genYears(yearRange), [yearRange]);
  const disableLeftNavigation = () => {
    const today = new Date();
    const startDate = new Date(today.getFullYear() - yearRange, 0, 1);
    if (props.month) {
      return props.month.getMonth() === startDate.getMonth() && props.month.getFullYear() === startDate.getFullYear();
    }
    return false;
  };
  const disableRightNavigation = () => {
    const today = new Date();
    const endDate = new Date(today.getFullYear() + yearRange, 11, 31);
    if (props.month) {
      return props.month.getMonth() === endDate.getMonth() && props.month.getFullYear() === endDate.getFullYear();
    }
    return false;
  };

  return (
    <DayPicker
      className={cn("p-3", className)}
      classNames={{
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-5 top-5",
          disableRightNavigation() && "pointer-events-none",
        ),
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-5 top-5",
          disableLeftNavigation() && "pointer-events-none",
        ),
        caption_label: "text-sm font-medium",
        day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 rounded-1",
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-l-md rounded-r-md",
        ),
        disabled: "text-muted-foreground opacity-50",
        hidden: "invisible",
        month: "flex flex-col items-center space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        month_grid: "w-full border-collapse space-y-1",
        months: "flex flex-col sm:flex-row space-y-4  sm:space-y-0 justify-center",
        nav: "space-x-1 flex items-center ",
        outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        range_end: "day-range-end",
        range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-l-md rounded-r-md",
        today: "bg-accent text-accent-foreground",
        week: "flex w-full mt-2",
        weekday: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        weekdays: cn("flex", props.showWeekNumber && "justify-end"),
        ...classNames,
      }}
      components={{
        Chevron: ({ ...props }) =>
          props.orientation === "left" ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />,
        MonthCaption: ({ calendarMonth }) => {
          return (
            <div className="inline-flex gap-2">
              <Select
                defaultValue={calendarMonth.date.getMonth().toString()}
                onValueChange={(value) => {
                  const newDate = new Date(calendarMonth.date);
                  newDate.setMonth(Number.parseInt(value, 10));
                  props.onMonthChange?.(newDate);
                }}
              >
                <SelectTrigger className="w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {MONTHS.map((month) => (
                    <SelectItem key={month.value} value={month.value.toString()}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                defaultValue={calendarMonth.date.getFullYear().toString()}
                onValueChange={(value) => {
                  const newDate = new Date(calendarMonth.date);
                  newDate.setFullYear(Number.parseInt(value, 10));
                  props.onMonthChange?.(newDate);
                }}
              >
                <SelectTrigger className="w-fit gap-1 border-none p-0 focus:bg-accent focus:text-accent-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {YEARS.map((year) => (
                    <SelectItem key={year.value} value={year.value.toString()}>
                      {year.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          );
        },
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
}

/**
 * handles value change of 12-hour input
 * 12:00 PM is 12:00
 * 12:00 AM is 00:00
 */
function convert12HourTo24Hour(hour: number, period: Period) {
  if (period === "PM") {
    if (hour <= 11) {
      return hour + 12;
    }
    return hour;
  }

  if (period === "AM") {
    if (hour === 12) return 0;
    return hour;
  }
  return hour;
}

/**
 * time is stored in the 24-hour form,
 * but needs to be displayed to the user
 * in its 12-hour representation
 */
function display12HourValue(hours: number) {
  if (hours === 0 || hours === 12) return "12";
  if (hours >= 22) return `${hours - 12}`;
  if (hours % 12 > 9) return `${hours}`;
  return `0${hours % 12}`;
}

function genMonths(locale: Pick<Locale, "formatLong" | "localize" | "options">) {
  return Array.from({ length: 12 }, (_, i) => ({
    label: format(new Date(2021, i), "MMMM", { locale }),
    value: i,
  }));
}

function genYears(yearRange = 50) {
  const today = new Date();
  return Array.from({ length: yearRange * 2 + 1 }, (_, i) => ({
    label: (today.getFullYear() - yearRange + i).toString(),
    value: today.getFullYear() - yearRange + i,
  }));
}

function getArrowByType(value: string, step: number, type: TimePickerType) {
  switch (type) {
    case "12hours":
      return getValidArrow12Hour(value, step);
    case "hours":
      return getValidArrowHour(value, step);
    case "minutes":
      return getValidArrowMinuteOrSecond(value, step);
    case "seconds":
      return getValidArrowMinuteOrSecond(value, step);
    default:
      return "00";
  }
}

function getDateByType(date: Date | null, type: TimePickerType) {
  if (!date) return "00";
  switch (type) {
    case "12hours":
      return getValid12Hour(String(display12HourValue(date.getHours())));
    case "hours":
      return getValidHour(String(date.getHours()));
    case "minutes":
      return getValidMinuteOrSecond(String(date.getMinutes()));
    case "seconds":
      return getValidMinuteOrSecond(String(date.getSeconds()));
    default:
      return "00";
  }
}

function getValid12Hour(value: string) {
  if (isValid12Hour(value)) return value;
  return getValidNumber(value, { max: 12, min: 1 });
}

function getValidArrow12Hour(value: string, step: number) {
  return getValidArrowNumber(value, { max: 12, min: 1, step });
}

function getValidArrowHour(value: string, step: number) {
  return getValidArrowNumber(value, { max: 23, min: 0, step });
}

function getValidArrowMinuteOrSecond(value: string, step: number) {
  return getValidArrowNumber(value, { max: 59, min: 0, step });
}

function getValidArrowNumber(value: string, { max, min, step }: GetValidArrowNumberConfig) {
  let numericValue = parseInt(value, 10);
  if (!Number.isNaN(numericValue)) {
    numericValue += step;
    return getValidNumber(String(numericValue), { loop: true, max, min });
  }
  return "00";
}

function getValidHour(value: string) {
  if (isValidHour(value)) return value;
  return getValidNumber(value, { max: 23 });
}

function getValidMinuteOrSecond(value: string) {
  if (isValidMinuteOrSecond(value)) return value;
  return getValidNumber(value, { max: 59 });
}
function getValidNumber(value: string, { loop = false, max, min = 0 }: GetValidNumberConfig) {
  let numericValue = parseInt(value, 10);

  if (!Number.isNaN(numericValue)) {
    if (!loop) {
      if (numericValue > max) numericValue = max;
      if (numericValue < min) numericValue = min;
    } else {
      if (numericValue > max) numericValue = min;
      if (numericValue < min) numericValue = max;
    }
    return numericValue.toString().padStart(2, "0");
  }

  return "00";
}

/**
 * regular expression to check for valid 12 hour format (01-12)
 */
function isValid12Hour(value: string) {
  return /^(0[1-9]|1[0-2])$/.test(value);
}

// ---------- utils start ----------
/**
 * regular expression to check for valid hour format (01-23)
 */
function isValidHour(value: string) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(value);
}

/**
 * regular expression to check for valid minute format (00-59)
 */
function isValidMinuteOrSecond(value: string) {
  return /^[0-5][0-9]$/.test(value);
}

function set12Hours(date: Date, value: string, period: Period) {
  const hours = parseInt(getValid12Hour(value), 10);
  const convertedHours = convert12HourTo24Hour(hours, period);
  date.setHours(convertedHours);
  return date;
}

function setDateByType(date: Date, value: string, type: TimePickerType, period?: Period) {
  switch (type) {
    case "12hours": {
      if (!period) return date;
      return set12Hours(date, value, period);
    }
    case "hours":
      return setHours(date, value);
    case "minutes":
      return setMinutes(date, value);
    case "seconds":
      return setSeconds(date, value);
    default:
      return date;
  }
}

function setHours(date: Date, value: string) {
  const hours = getValidHour(value);
  date.setHours(parseInt(hours, 10));
  return date;
}

function setMinutes(date: Date, value: string) {
  const minutes = getValidMinuteOrSecond(value);
  date.setMinutes(parseInt(minutes, 10));
  return date;
}

// ---------- utils end ----------

function setSeconds(date: Date, value: string) {
  const seconds = getValidMinuteOrSecond(value);
  date.setSeconds(parseInt(seconds, 10));
  return date;
}
Calendar.displayName = "Calendar";

interface PeriodSelectorProps {
  date?: Date | null;
  onDateChange?: (date: Date | undefined) => void;
  onLeftFocus?: () => void;
  onRightFocus?: () => void;
  period: Period;
  setPeriod?: (m: Period) => void;
}

const TimePeriodSelect = React.forwardRef<HTMLButtonElement, PeriodSelectorProps>(
  ({ date, onDateChange, onLeftFocus, onRightFocus, period, setPeriod }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "ArrowRight") onRightFocus?.();
      if (e.key === "ArrowLeft") onLeftFocus?.();
    };

    const handleValueChange = (value: Period) => {
      setPeriod?.(value);

      /**
       * trigger an update whenever the user switches between AM and PM;
       * otherwise user must manually change the hour each time
       */
      if (date) {
        const tempDate = new Date(date);
        const hours = display12HourValue(date.getHours());
        onDateChange?.(setDateByType(tempDate, hours.toString(), "12hours", period === "AM" ? "PM" : "AM"));
      }
    };

    return (
      <div className="flex h-10 items-center">
        <Select defaultValue={period} onValueChange={(value: Period) => handleValueChange(value)}>
          <SelectTrigger
            className="w-[65px] focus:bg-accent focus:text-accent-foreground"
            onKeyDown={handleKeyDown}
            ref={ref}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="AM">AM</SelectItem>
            <SelectItem value="PM">PM</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  },
);

TimePeriodSelect.displayName = "TimePeriodSelect";

interface TimePickerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  date?: Date | null;
  onDateChange?: (date: Date | undefined) => void;
  onLeftFocus?: () => void;
  onRightFocus?: () => void;
  period?: Period;
  picker: TimePickerType;
}

const TimePickerInput = React.forwardRef<HTMLInputElement, TimePickerInputProps>(
  (
    {
      className,
      date = new Date(new Date().setHours(0, 0, 0, 0)),
      id,
      name,
      onChange,
      onDateChange,
      onKeyDown,
      onLeftFocus,
      onRightFocus,
      period,
      picker,
      type = "tel",
      value,
      ...props
    },
    ref,
  ) => {
    const [flag, setFlag] = React.useState<boolean>(false);
    const [prevIntKey, setPrevIntKey] = React.useState<string>("0");

    /**
     * allow the user to enter the second digit within 2 seconds
     * otherwise start again with entering first digit
     */
    React.useEffect(() => {
      if (flag) {
        const timer = setTimeout(() => {
          setFlag(false);
        }, 2000);

        return () => clearTimeout(timer);
      }
    }, [flag]);

    const calculatedValue = React.useMemo(() => {
      return getDateByType(date, picker);
    }, [date, picker]);

    const calculateNewValue = (key: string) => {
      /*
       * If picker is '12hours' and the first digit is 0, then the second digit is automatically set to 1.
       * The second entered digit will break the condition and the value will be set to 10-12.
       */
      if (picker === "12hours") {
        if (flag && calculatedValue.slice(1, 2) === "1" && prevIntKey === "0") return `0${key}`;
      }

      return !flag ? `0${key}` : calculatedValue.slice(1, 2) + key;
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Tab") return;
      e.preventDefault();
      if (e.key === "ArrowRight") onRightFocus?.();
      if (e.key === "ArrowLeft") onLeftFocus?.();
      if (["ArrowDown", "ArrowUp"].includes(e.key)) {
        const step = e.key === "ArrowUp" ? 1 : -1;
        const newValue = getArrowByType(calculatedValue, step, picker);
        if (flag) setFlag(false);
        const tempDate = date ? new Date(date) : new Date();
        onDateChange?.(setDateByType(tempDate, newValue, picker, period));
      }
      if (e.key >= "0" && e.key <= "9") {
        if (picker === "12hours") setPrevIntKey(e.key);

        const newValue = calculateNewValue(e.key);
        if (flag) onRightFocus?.();
        setFlag((prev) => !prev);
        const tempDate = date ? new Date(date) : new Date();
        onDateChange?.(setDateByType(tempDate, newValue, picker, period));
      }
    };

    return (
      <Input
        className={cn(
          "w-[48px] text-center font-mono text-base tabular-nums caret-transparent focus:bg-accent focus:text-accent-foreground [&::-webkit-inner-spin-button]:appearance-none",
          className,
        )}
        id={id || picker}
        inputMode="decimal"
        name={name || picker}
        onChange={(e) => {
          e.preventDefault();
          onChange?.(e);
        }}
        onKeyDown={(e) => {
          onKeyDown?.(e);
          handleKeyDown(e);
        }}
        ref={ref}
        type={type}
        value={value || calculatedValue}
        {...props}
      />
    );
  },
);

TimePickerInput.displayName = "TimePickerInput";

interface TimePickerProps {
  date?: Date | null;
  /**
   * Determines the smallest unit that is displayed in the datetime picker.
   * Default is 'second'.
   * */
  granularity?: Granularity;
  hourCycle?: 12 | 24;
  onChange?: (date: Date | undefined) => void;
}

interface TimePickerRef {
  hourRef: HTMLInputElement | null;
  minuteRef: HTMLInputElement | null;
  secondRef: HTMLInputElement | null;
}

const TimePicker = React.forwardRef<TimePickerRef, TimePickerProps>(
  ({ date, granularity = "second", hourCycle = 24, onChange }, ref) => {
    const minuteRef = React.useRef<HTMLInputElement>(null);
    const hourRef = React.useRef<HTMLInputElement>(null);
    const secondRef = React.useRef<HTMLInputElement>(null);
    const periodRef = React.useRef<HTMLButtonElement>(null);
    const [period, setPeriod] = React.useState<Period>(date && date.getHours() >= 12 ? "PM" : "AM");

    useImperativeHandle(
      ref,
      () => ({
        hourRef: hourRef.current,
        minuteRef: minuteRef.current,
        periodRef: periodRef.current,
        secondRef: secondRef.current,
      }),
      [minuteRef, hourRef, secondRef],
    );
    return (
      <div className="flex items-center justify-center gap-2">
        <label className="cursor-pointer" htmlFor="datetime-picker-hour-input">
          <Clock className="mr-2 h-4 w-4" />
        </label>
        <TimePickerInput
          date={date}
          id="datetime-picker-hour-input"
          onDateChange={onChange}
          onRightFocus={() => minuteRef?.current?.focus()}
          period={period}
          picker={hourCycle === 24 ? "hours" : "12hours"}
          ref={hourRef}
        />
        {(granularity === "minute" || granularity === "second") && (
          <>
            :
            <TimePickerInput
              date={date}
              onDateChange={onChange}
              onLeftFocus={() => hourRef?.current?.focus()}
              onRightFocus={() => secondRef?.current?.focus()}
              picker="minutes"
              ref={minuteRef}
            />
          </>
        )}
        {granularity === "second" && (
          <>
            :
            <TimePickerInput
              date={date}
              onDateChange={onChange}
              onLeftFocus={() => minuteRef?.current?.focus()}
              onRightFocus={() => periodRef?.current?.focus()}
              picker="seconds"
              ref={secondRef}
            />
          </>
        )}
        {hourCycle === 12 && (
          <div className="grid gap-1 text-center">
            <TimePeriodSelect
              date={date}
              onDateChange={(date) => {
                onChange?.(date);
                if (date && date?.getHours() >= 12) {
                  setPeriod("PM");
                } else {
                  setPeriod("AM");
                }
              }}
              onLeftFocus={() => secondRef?.current?.focus()}
              period={period}
              ref={periodRef}
              setPeriod={setPeriod}
            />
          </div>
        )}
      </div>
    );
  },
);
TimePicker.displayName = "TimePicker";

type DateTimePickerProps = Pick<CalendarProps, "locale" | "showOutsideDays" | "showWeekNumber" | "weekStartsOn"> & {
  className?: string;
  /**
   * Show the default month and time when popup the calendar. Default is the current Date().
   **/
  defaultPopupValue?: Date;
  disabled?: boolean;
  /**
   * The format is derived from the `date-fns` documentation.
   * @reference https://date-fns.org/v3.6.0/docs/format
   **/
  displayFormat?: { hour12?: string; hour24?: string };
  /**
   * The granularity prop allows you to control the smallest unit that is displayed by DateTimePicker.
   * By default, the value is `second` which shows all time inputs.
   **/
  granularity?: Granularity;
  /** showing `AM/PM` or not. */
  hourCycle?: 12 | 24;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  value?: Date;
  /**
   * The year range will be: `This year + yearRange` and `this year - yearRange`.
   * Default is 50.
   * For example:
   * This year is 2024, The year dropdown will be 1974 to 2024 which is generated by `2024 - 50 = 1974` and `2024 + 50 = 2074`.
   * */
  yearRange?: number;
};

type DateTimePickerRef = Omit<HTMLButtonElement, "value"> & {
  value?: Date;
};

type Granularity = "day" | "hour" | "minute" | "second";

const DateTimePicker = React.forwardRef<Partial<DateTimePickerRef>, DateTimePickerProps>(
  (
    {
      className,
      defaultPopupValue = new Date(new Date().setHours(0, 0, 0, 0)),
      disabled = false,
      displayFormat,
      granularity = "second",
      hourCycle = 24,
      locale = enUS,
      onChange,
      placeholder = "Pick a date",
      value,
      yearRange = 50,
      ...props
    },
    ref,
  ) => {
    const [month, setMonth] = React.useState<Date>(value ?? defaultPopupValue);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [displayDate, setDisplayDate] = React.useState<Date | undefined>(value ?? undefined);
    /**
     * carry over the current time when a user clicks a new day
     * instead of resetting to 00:00
     */
    const handleSelect = (newDay: Date | undefined) => {
      if (!newDay) {
        return;
      }
      if (!defaultPopupValue) {
        newDay.setHours(month?.getHours() ?? 0, month?.getMinutes() ?? 0, month?.getSeconds() ?? 0);
        onChange?.(newDay);
        setMonth(newDay);
        return;
      }
      const diff = newDay.getTime() - defaultPopupValue.getTime();
      const diffInDays = diff / (1000 * 60 * 60 * 24);
      const newDateFull = add(defaultPopupValue, { days: Math.ceil(diffInDays) });
      newDateFull.setHours(month?.getHours() ?? 0, month?.getMinutes() ?? 0, month?.getSeconds() ?? 0);
      onChange?.(newDateFull);
      setMonth(newDateFull);
    };

    const onSelect = (newDay?: Date) => {
      if (!newDay) {
        return;
      }
      onChange?.(newDay);
      setMonth(newDay);
      setDisplayDate(newDay);
    };

    useImperativeHandle(
      ref,
      () => ({
        ...buttonRef.current,
        value: displayDate,
      }),
      [displayDate],
    );

    const initHourFormat = {
      hour12: displayFormat?.hour12 ?? `PP hh:mm${!granularity || granularity === "second" ? ":ss" : ""} b`,
      hour24: displayFormat?.hour24 ?? `PPP HH:mm${!granularity || granularity === "second" ? ":ss" : ""}`,
    };

    let loc = enUS;
    const { formatLong, localize, options } = locale;
    if (options && localize && formatLong) {
      loc = {
        ...enUS,
        formatLong,
        localize,
        options,
      };
    }

    return (
      <Popover>
        <PopoverTrigger asChild disabled={disabled}>
          <Button
            className={cn(
              "w-full justify-start text-left font-normal",
              !displayDate && "text-muted-foreground",
              className,
            )}
            ref={buttonRef}
            variant="outline"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {displayDate ? (
              format(displayDate, hourCycle === 24 ? initHourFormat.hour24 : initHourFormat.hour12, {
                locale: loc,
              })
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            locale={locale}
            mode="single"
            month={month}
            onMonthChange={handleSelect}
            onSelect={(newDate) => {
              if (newDate) {
                newDate.setHours(month?.getHours() ?? 0, month?.getMinutes() ?? 0, month?.getSeconds() ?? 0);
                onSelect(newDate);
              }
            }}
            selected={displayDate}
            yearRange={yearRange}
            {...props}
          />
          {granularity !== "day" && (
            <div className="border-t border-border p-3">
              <TimePicker
                date={month}
                granularity={granularity}
                hourCycle={hourCycle}
                onChange={(value) => {
                  onChange?.(value);
                  setDisplayDate(value);
                  if (value) {
                    setMonth(value);
                  }
                }}
              />
            </div>
          )}
        </PopoverContent>
      </Popover>
    );
  },
);

DateTimePicker.displayName = "DateTimePicker";

export { DateTimePicker, TimePicker, TimePickerInput };
export type { DateTimePickerProps, DateTimePickerRef, TimePickerType };
