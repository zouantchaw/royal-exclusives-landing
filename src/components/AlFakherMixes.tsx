import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const alFakherMixes = {
  "Al Fakher Mixes": {
    price: 29.99,
    items: [
      "Florida Orange Creamsicle - Creamy, citrusy symphony with a mini-vacation vibe",
      "California Breeze - Fruity tango of orange, lemon, and grapefruit with cooling mint",
      "Georgia Peach Pie - Spicy peaches with zesty orange, jasmine, and green apple",
    ],
  },
};

export const AlFakherMixes = () => {
  return (
    <section id="mixes" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Al Fakher Mixes
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Price: ${alFakherMixes["Al Fakher Mixes"].price}
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-[90%] mx-auto"
      >
        <CarouselContent className="">
          {alFakherMixes["Al Fakher Mixes"].items.map((item, index) => (
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
        <CarouselNext/>
      </Carousel>
    </section>
  );
};
