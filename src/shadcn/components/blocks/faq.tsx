"use client";

import { ChevronDown, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

import { cn } from "../../utils";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  contactInfo?: {
    buttonText: string;
    description: string;
    onContact?: () => void;
    title: string;
  };
  description?: string;
  items: {
    answer: string;
    question: string;
  }[];
  title: string;
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, contactInfo, items, ...props }, ref) => {
    return (
      <section className={cn("w-11/12 mx-auto", className)} ref={ref} {...props}>
        <Separator className="mx-auto bg-foreground" />
        <h2 className="text-base md:text-lg lg:text-xl my-8 text-center uppercase !font-skia tracking-widest">
          Frequently Asked Questions
        </h2>
        <Separator className="mx-auto bg-foreground" />
        <div className="max-w-screen-sm mx-auto">
          {/* Header */}

          <div className="mt-16 max-w-2xl mx-auto space-y-2">
            {items.map((item, index) => (
              <FaqItem answer={item.answer} index={index} key={index} question={item.question} />
            ))}
          </div>
          {contactInfo && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto mt-12 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center p-1.5 rounded-full mb-4">
                <Mail className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-foreground mb-1">{contactInfo.title}</p>
              <p className="text-xs text-muted-foreground mb-4">{contactInfo.description}</p>
              <Button onClick={contactInfo.onContact} size="sm">
                {contactInfo.buttonText}
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    );
  },
);
FaqSection.displayName = "FaqSection";

// Internal FaqItem component
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    answer: string;
    index: number;
    question: string;
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { answer, index, question } = props;

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "group rounded-lg",
        "transition-all duration-200 ease-in-out",
        "border border-border/50 bg-white hover:bg-white",
        isOpen ? "bg-white hover:bg-white" : "",
      )}
      initial={{ opacity: 0, y: 10 }}
      ref={ref}
      transition={{ delay: index * 0.1, duration: 0.2 }}
    >
      <Button
        className="w-full px-6 py-4 !bg-white h-auto justify-between"
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
      >
        <h3
          className={cn(
            "text-base font-medium transition-colors duration-200 text-left",
            "text-foreground/70 whitespace-break-spaces",
            isOpen && "text-foreground",
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          className={cn(
            "p-0.5 rounded-full flex-shrink-0",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground",
          )}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
            initial={{ height: 0, opacity: 0 }}
          >
            <div className="px-6 pb-4 pt-2">
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: answer }}
                exit={{ opacity: 0, y: -10 }}
                initial={{ opacity: 0, y: -10 }}
              >
                {/* {answer} */}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = "FaqItem";

export { FaqSection };
