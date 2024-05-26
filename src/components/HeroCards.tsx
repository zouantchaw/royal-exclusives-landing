import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import royalFour from "../assets/royal-4.jpeg";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://lh3.googleusercontent.com/a-/ALV-UjWkbCUYDqpaHxHcIeV1nFMDwkwx1Tw-n91SSRqLrsCjEb24dcU=w120-h120-p-rp-mo-br100"
            />
            <AvatarFallback>T</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">AFNAN SHAFIQ</CardTitle>
            <CardDescription>
              <i>Google Review</i>
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          One stop smoke shop with a HOOKAH lounge/Cigar Lounge. Super helpful
          and friendly staff. Located on clopper rd with ample parking.
        </CardContent>
      </Card>

      {/* Lounge */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10 rounded-lg overflow-hidden">
        <CardHeader className="w-full text-center py-4">
          <CardTitle className=" text-xl">Unwind in our cozy lounge</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <img
            src={royalFour}
            alt="Royal Exclusives"
            className="w-full h-auto rounded-md"
          />
        </CardContent>
        <CardFooter className="w-full p-4">
          <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary transition-all duration-300" disabled>Reserve - Coming Soon</Button>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[220px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Al Fakher
            <Badge variant="secondary" className="text-sm text-primary">
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$24.99</span>
          </div>

          <CardDescription>
            Indulge in the sweet and juicy flavor of Al Fakher Strawberry shisha tobacco. Perfect for a refreshing and fruity smoking experience.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Service */}
      {/* <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Light & dark mode</CardTitle>
            <CardDescription className="text-md mt-2">
              Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
              natusm.
            </CardDescription>
          </div>
        </CardHeader>
      </Card> */}
    </div>
  );
};
