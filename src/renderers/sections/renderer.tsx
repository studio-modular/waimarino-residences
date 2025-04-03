import type { Home } from "@/payload-types";

import { AnimatedRenderer } from "../animated";
import { Section01 } from "./section-01";
import { Section02 } from "./section-02";
import { Section03 } from "./section-03";
import { Section04 } from "./section-04";
import { Section05 } from "./section-05";
import { Section06 } from "./section-06";
import { Section07 } from "./section-07";
import { Section08 } from "./section-08";
import { Section09 } from "./section-09";
import { Section10 } from "./section-10";
import { Section11 } from "./section-11";
import { Section12 } from "./section-12";
import { Section13 } from "./section-13";
import { Section14 } from "./section-14";
import { Section15 } from "./section-15";
import { Section16 } from "./section-16";
import { Section17 } from "./section-17";
import { Section18 } from "./section-18";
import { Section19 } from "./section-19";
import { Section20 } from "./section-20";
import { Section21 } from "./section-21";
import { Section22 } from "./section-22";
import { Section23 } from "./section-23";
import { Section24 } from "./section-24";
import { SectionCarouselWithThumbnail } from "./section-carousel-with-thumbnails";
import { SectionHighlights } from "./section-highlights";
import { SectionMediaRenderer } from "./section-media";
import { SectionProperty } from "./section-property";
import { SectionQuestions } from "./section-question";
import { SectionQuote } from "./section-quote";
import { SectionSeparator } from "./section-separator";
import { SectionTestimonials } from "./section-testimonial";

export default async function SectionRenderer({
  animate = true,
  content,
}: {
  animate?: boolean;
  content: Home["content"];
}) {
  if (!content) return null;
  const mappedSections = content.map((section) => {
    let elem: null | React.ReactNode = null;
    if (section.blockType === "section-01-block") elem = <Section01 key={section.id} {...section} />;
    else if (section.blockType === "section-02-block") elem = <Section02 key={section.id} {...section} />;
    else if (section.blockType === "section-03-block") elem = <Section03 key={section.id} {...section} />;
    else if (section.blockType === "section-04-block") elem = <Section04 key={section.id} {...section} />;
    else if (section.blockType === "section-05-block") elem = <Section05 key={section.id} {...section} />;
    else if (section.blockType === "section-06-block") elem = <Section06 key={section.id} {...section} />;
    else if (section.blockType === "section-07-block") elem = <Section07 key={section.id} {...section} />;
    else if (section.blockType === "section-08-block") elem = <Section08 key={section.id} {...section} />;
    else if (section.blockType === "section-09-block") elem = <Section09 key={section.id} {...section} />;
    else if (section.blockType === "section-10-block") elem = <Section10 key={section.id} {...section} />;
    else if (section.blockType === "section-11-block") elem = <Section11 key={section.id} {...section} />;
    else if (section.blockType === "section-12-block") elem = <Section12 key={section.id} {...section} />;
    else if (section.blockType === "section-13-block") elem = <Section13 key={section.id} {...section} />;
    else if (section.blockType === "section-14-block") elem = <Section14 key={section.id} {...section} />;
    else if (section.blockType === "section-15-block") elem = <Section15 key={section.id} {...section} />;
    else if (section.blockType === "section-16-block") elem = <Section16 key={section.id} {...section} />;
    else if (section.blockType === "section-17-block") {
      elem = <Section17 key={section.id} {...section} />;
    } else if (section.blockType === "section-18-block") elem = <Section18 key={section.id} {...section} />;
    else if (section.blockType === "section-19-block") elem = <Section19 key={section.id} {...section} />;
    else if (section.blockType === "section-20-block" || section.blockType === "full-screen-block") {
      elem = <Section20 key={section.id} {...section} />;
    } else if (section.blockType === "section-21-block") elem = <Section21 key={section.id} {...section} />;
    else if (section.blockType === "section-22-block") elem = <Section22 key={section.id} {...section} />;
    else if (section.blockType === "section-23-block") elem = <Section23 key={section.id} {...section} />;
    else if (section.blockType === "section-24-block" || section.blockType === "carousel-block") {
      elem = <Section24 key={section.id} {...section} />;
    } else if (section.blockType === "section-separator-block") {
      elem = <SectionSeparator key={section.id} {...section} />;
    } else if (section.blockType === "questions-block") {
      elem = <SectionQuestions key={section.id} {...section} />;
    } else if (section.blockType === "testimonial-block") {
      elem = <SectionTestimonials key={section.id} {...section} />;
    } else if (section.blockType === "highlights") {
      elem = <SectionHighlights key={section.id} {...section} />;
    } else if (section.blockType === "section-carousel-with-thumbnail") {
      elem = <SectionCarouselWithThumbnail key={section.id} {...section} />;
    } else if (section.blockType === "quote") {
      elem = <SectionQuote key={section.id} {...section} />;
    } else if (section.blockType === "property-block") {
      elem = <SectionProperty key={section.id} {...section} />;
    } else if (section.blockType === "section-media") {
      elem = <SectionMediaRenderer key={section.id} {...section} />;
    }
    if (!elem) console.log(section);
    if (animate) {
      return (
        <AnimatedRenderer blockType={section.blockType} key={section.id}>
          {elem}
        </AnimatedRenderer>
      );
    }
    return elem;
  });
  return mappedSections;
}
