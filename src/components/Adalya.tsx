import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const adalyaProducts = {
  Adalya: {
    price: 26.99,
    items: [
      "Skyfall - Juicy watermelon, sweet peach, and refreshing menthol",
      "Mi Amor - Juicy pineapple, ripe banana, and refreshing mint",
      "Grape mint - A refreshing blend of grape and mint",
      "Love 66 - Juicy watermelons and exotic passion fruit with icy notes",
      "Lady Killer - Sweet melon, juicy mango, forest berries, and refreshing mint",
      "Angel Lips - Ripe raspberries, honey melon, and fresh mint",
      "Mint - A cool and refreshing mint flavor",
      "Bagdadi - Grapes, peaches, mixed berries, and a hint of mint",
      "Madagascar Nights - Lychee with blueberries and refreshing coolness",
      "The Two Apples - A classic blend of sweet and tart apples",
      "Blue Mln - A mix of blueberries and melon",
      "Mng Tings - A tropical mango flavor",
      "Strawberry Splash - A sweet and juicy strawberry flavor",
      "Double Apple Mint - A blend of double apple with a hint of mint",
      "Blue Dragon - A mix of blueberries and dragon fruit",
      "Gum Mint - A classic bubblegum flavor with a minty finish",
      "Watermelon - A juicy and refreshing watermelon flavor",
      "JK777 - A secret blend of exotic fruits",
      "Egyptian Double Apple - A traditional double apple flavor with a hint of anise",
    ],
  },
};

export const Adalya = () => {
  return (
    <section id="menu" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Adalya
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Price: ${adalyaProducts["Adalya"].price}
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-[90%] mx-auto"
      >
        <CarouselContent className="">
          {adalyaProducts["Adalya"].items.map((item, index) => (
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
