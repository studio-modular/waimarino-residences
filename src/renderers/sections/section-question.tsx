import type { QuestionsBlock } from "@/payload-types";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shadcn/components/ui/accordion";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { useId } from "react";

export function SectionQuestions({ questions }: QuestionsBlock) {
  const id = useId();
  return (
    <div className="w-11/12 max-w-screen-lg mx-auto flex flex-col gap-8">
      <h2 className="text-xl mb-0 lg:text-2xl tracking-wider uppercase font-serif">Questions</h2>
      <Accordion className="[&_h3]:mb-0 [&_h3]:underline-offset-2" collapsible type="single">
        {questions?.map((q) => {
          return (
            <AccordionItem className="" key={q.id + id} value={q.id + id}>
              <AccordionTrigger className="!mb-0">{q.question}</AccordionTrigger>
              <AccordionContent>
                <RichText className="richtext" data={q.answer} />
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
