import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const starbuzzProducts = {
  Starbuzz: {
    price: 29.99,
    items: [
      "Passion Fruit - A tropical delight with a tangy twist",
      "Mint - Refreshing and cool minty flavor",
      "Queen of Sex - Exotic blend with a hint of mystery",
      "Citrus Mist - Zesty citrus with a refreshing finish",
      "Blue Mist - Sweet and smooth blueberry flavor",
    ],
  },
};

export const Starbuzz = () => {
  return (
    <section id="starbuzz" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Starbuzz
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Price: ${starbuzzProducts["Starbuzz"].price}
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-[90%] mx-auto"
      >
        <CarouselContent className="">
          {starbuzzProducts["Starbuzz"].items.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-muted/50 h-full">
                  <CardHeader>
                    <CardTitle className="grid gap-4 place-items-center">
                      {item.split(" - ")[0]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.split(" - ")[1] || "Delicious flavor"}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
