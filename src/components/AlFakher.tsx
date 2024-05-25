import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const alFakherProducts = {
  "Al Fakher": {
    price: 24.99,
    items: [
      "Strawberry - A sweet and juicy flavor of fresh strawberries",
      "Grape with mint - A refreshing blend of grape and mint",
      "Kiwi - A tangy and sweet kiwi flavor",
      "Rose - Powerful floral flavors of rose petals for a soothing, fragrant smoking experience",
      "Lemon with mint - A zesty lemon flavor with a hint of mint",
      "Mango - A tropical and sweet mango flavor",
      "Citrus with mint - A citrusy blend with a refreshing mint finish",
      "Vanilla - A smooth and creamy vanilla flavor",
      "Cherry - A rich and sweet cherry flavor",
      "Lemon - A tangy and zesty lemon flavor",
      "Grapefruit - A tart and tangy grapefruit flavor",
      "Coconut - A creamy and tropical coconut flavor",
      "Magic Love - Passion fruit and melon with sweet spices blended with mint",
      "Gum - A classic bubblegum flavor",
      "Fresh flavor - A crisp and refreshing flavor",
      "Banana - A sweet and creamy banana flavor",
      "Grape with berry - A blend of grape and mixed berries",
      "Mojito - A refreshing blend of lime and mint",
      "Cream with mint - A creamy flavor with a hint of mint",
      "Mint - A cool and refreshing mint flavor",
      "Blueberry mint - A sweet blueberry flavor with a minty finish",
      "Watermelon with mint - A juicy watermelon flavor with a hint of mint",
      "Guava - A tropical and sweet guava flavor",
      "Diamond Dust - Mix of orange, raspberry, pineapple, and lime",
      "Dream Scape - Blueberry mixed with a touch of citrus and mint",
      "Harvest Moon - Mix of green tea with a hint of lemon and lime",
    ],
  },
};

export const AlFakher = () => {
  return (
    <section id="menu" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Al Fakher
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Price: ${alFakherProducts["Al Fakher"].price}
      </p>

      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-[90%] mx-auto"
      >
        <CarouselContent className="">
          {alFakherProducts["Al Fakher"].items.map((item, index) => (
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
