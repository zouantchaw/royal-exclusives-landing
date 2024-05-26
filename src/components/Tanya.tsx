import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const tanyaProducts = {
  Tanya: {
    price: 26.89,
    items: [
      "Passion Fruit - A tropical delight with a tangy twist",
      "Orange Mint - Refreshing citrus with a cool minty finish",
      "White Gummy Bear - Sweet and chewy candy flavor",
      "Watermelon - Juicy and refreshing summer favorite",
      "Double Apple Mist - Crisp apple with a hint of anise",
    ],
  },
};

export const Tanya = () => {
  return (
    <section id="menu" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Tanya
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Price: ${tanyaProducts["Tanya"].price}
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-[90%] mx-auto"
      >
        <CarouselContent className="">
          {tanyaProducts["Tanya"].items.map((item, index) => (
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
