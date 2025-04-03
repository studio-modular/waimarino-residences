"use client";

import * as React from "react";
import { useImperativeHandle } from "react";

import { cn } from "../../utils";

interface UseAutosizeTextAreaProps {
  maxHeight?: number;
  minHeight?: number;
  textAreaRef: React.MutableRefObject<HTMLTextAreaElement | null>;
  triggerAutoSize: string;
}

export const useAutosizeTextArea = ({
  maxHeight = Number.MAX_SAFE_INTEGER,
  minHeight = 0,
  textAreaRef,
  triggerAutoSize,
}: UseAutosizeTextAreaProps) => {
  const [init, setInit] = React.useState(true);
  React.useEffect(() => {
    // We need to reset the height momentarily to get the correct scrollHeight for the textarea
    const offsetBorder = 6;
    const textAreaElement = textAreaRef.current;
    if (textAreaElement) {
      if (init) {
        textAreaElement.style.minHeight = `${minHeight + offsetBorder}px`;
        if (maxHeight > minHeight) {
          textAreaElement.style.maxHeight = `${maxHeight}px`;
        }
        setInit(false);
      }
      textAreaElement.style.height = `${minHeight + offsetBorder}px`;
      const scrollHeight = textAreaElement.scrollHeight;
      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      if (scrollHeight > maxHeight) {
        textAreaElement.style.height = `${maxHeight}px`;
      } else {
        textAreaElement.style.height = `${scrollHeight + offsetBorder}px`;
      }
    }
  }, [textAreaRef, triggerAutoSize, init, maxHeight, minHeight]);
};

export type AutosizeTextAreaRef = {
  maxHeight: number;
  minHeight: number;
  textArea: HTMLTextAreaElement;
};

type AutosizeTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  maxHeight?: number;
  minHeight?: number;
};

export const AutosizeTextarea = React.forwardRef<AutosizeTextAreaRef, AutosizeTextAreaProps>(
  (
    {
      className,
      maxHeight = Number.MAX_SAFE_INTEGER,
      minHeight = 52,
      onChange,
      value,
      ...props
    }: AutosizeTextAreaProps,
    ref: React.Ref<AutosizeTextAreaRef>,
  ) => {
    const textAreaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const [triggerAutoSize, setTriggerAutoSize] = React.useState("");

    useAutosizeTextArea({
      maxHeight,
      minHeight,
      textAreaRef,
      triggerAutoSize: triggerAutoSize,
    });

    useImperativeHandle(ref, () => ({
      focus: () => textAreaRef?.current?.focus(),
      maxHeight,
      minHeight,
      textArea: textAreaRef.current as HTMLTextAreaElement,
    }));

    React.useEffect(() => {
      setTriggerAutoSize(value as string);
    }, [props?.defaultValue, value]);

    return (
      <textarea
        {...props}
        className={cn(
          "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        onChange={(e) => {
          setTriggerAutoSize(e.target.value);
          onChange?.(e);
        }}
        ref={textAreaRef}
        value={value}
      />
    );
  },
);
AutosizeTextarea.displayName = "AutosizeTextarea";
