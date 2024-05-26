import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services does Royal Exclusives vape & More offer?",
    answer: "Our vape/cigar/hookah lounge offers a comfortable and relaxed atmosphere, with plenty of seating and a homey feel to enjoy your time spent with us. The best part about our hangout spot is that it's right inside our storefront, giving you access to all of the items we sell without having to go anywhere. Take some time to check out our wide selection of vape supplies, extensive cigar collection, Kratom, hookah, and much more.",
    value: "item-1",
  },
  {
    question: "What is the rating of Royal Exclusives vape & More?",
    answer: "Royal Exclusives vape & More has a rating of 4.3 based on 6 Google reviews.",
    value: "item-2",
  },
  {
    question: "Where is Royal Exclusives vape & More located?",
    answer: "Royal Exclusives vape & More is located at 13501 Clopper Rd, Germantown, MD 20874, United States.",
    value: "item-3",
  },
  {
    question: "What are the hours of operation for Royal Exclusives vape & More?",
    answer: "The hours of operation are as follows:\nSaturday: 9 a.m.-2 a.m.\nSunday: 10 a.m.-11 p.m.\nMonday (Memorial Day): 9 a.m.-12 a.m. (Hours might differ)\nTuesday: 9 a.m.-12 a.m.\nWednesday: 9 a.m.-12 a.m.\nThursday: 9 a.m.-12 a.m.\nFriday: 9 a.m.-2 a.m.",
    value: "item-4",
  },
  {
    question: "How can I get directions to Royal Exclusives vape & More?",
    answer: "You can get directions to Royal Exclusives vape & More by searching for the address 13501 Clopper Rd, Germantown, MD 20874, United States on your preferred maps application.",
    value: "item-5",
  },
  {
    question: "What type of atmosphere does Royal Exclusives vape & More provide?",
    answer: "Royal Exclusives vape & More provides a comfortable and relaxed atmosphere with plenty of seating and a homey feel, perfect for enjoying your time spent with us.",
    value: "item-6",
  },
  {
    question: "What products can I find at Royal Exclusives vape & More?",
    answer: "At Royal Exclusives vape & More, you can find a wide selection of vape supplies, an extensive cigar collection, Kratom, hookah, and much more.",
    value: "item-7",
  },
  {
    question: "Can I shop for products while enjoying the lounge at Royal Exclusives vape & More?",
    answer: "Yes, the best part about our hangout spot is that it's right inside our storefront, giving you access to all of the items we sell without having to go anywhere.",
    value: "item-8",
  },
  {
    question: "How can I contact Royal Exclusives vape & More?",
    answer: "You can contact Royal Exclusives vape & More by visiting our store at 13501 Clopper Rd, Germantown, MD 20874, United States or by searching for us online.",
    value: "item-9",
  },
  {
    question: "Are there any special hours for holidays at Royal Exclusives vape & More?",
    answer: "Yes, hours might differ on holidays. For example, on Memorial Day, we are open from 9 a.m. to 12 a.m.",
    value: "item-10",
  },
  {
    question: "What is the best way to stay updated with the latest news and offers from Royal Exclusives vape & More?",
    answer: "The best way to stay updated with the latest news and offers is to visit our store or search for us online.",
    value: "item-11",
  },
  {
    question: "Is there parking available at Royal Exclusives vape & More?",
    answer: "Yes, there is parking available at our location at 13501 Clopper Rd, Germantown, MD 20874, United States.",
    value: "item-12",
  },
  {
    question: "Do you offer any loyalty programs or discounts at Royal Exclusives vape & More?",
    answer: "Please visit our store or contact us to learn more about any loyalty programs or discounts we may offer.",
    value: "item-13",
  },
  {
    question: "Can I host events or parties at Royal Exclusives vape & More?",
    answer: "For information about hosting events or parties, please contact us directly or visit our store.",
    value: "item-14",
  },
  {
    question: "Do you sell gift cards at Royal Exclusives vape & More?",
    answer: "Please visit our store or contact us to inquire about the availability of gift cards.",
    value: "item-15",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="https://www.facebook.com/share/Ah9gHTh4NgpzfjML/?mibextid=LQQJ4d"
          className="text-primary transition-all border-primary hover:border-b-2"
          target="_blank"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
