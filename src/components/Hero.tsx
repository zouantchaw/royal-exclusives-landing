import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GoogleIcon } from "./Icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              The Royal Experience
            </span>{" "}
            cigars, vapes, and hookah
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              lounge
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Royal Exclusives Vape, Cigar, and Hookah Lounge in Germantown,
          Maryland offers an A+ experience for the DMV area and Greater
          Washington DC. Enjoy a wide selection of cigars, vapes, and hookahs in
          a comfortable setting.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">
            <a href="#menu">Explore Menu</a>
          </Button>

          <a
            rel="noreferrer noopener"
            href="https://www.google.com/search?q=royal+exclusives+germantown+&sca_esv=bf0162ff70821237&sca_upv=1&sxsrf=ADLYWIISrIoHkZELuLZSZbeJGeEjYf4n3w:1716654989862&source=hp&ei=jRNSZoipMrLy0PEPkOiN-Aw&iflsig=AL9hbdgAAAAAZlIhnYVhmQEa2zlMwwBVAGOUbJxMdMVr&ved=0ahUKEwjIo_uWnqmGAxUyOTQIHRB0A88Q4dUDCBc&uact=5&oq=royal+exclusives+germantown+&gs_lp=Egdnd3Mtd2l6Ihxyb3lhbCBleGNsdXNpdmVzIGdlcm1hbnRvd24gMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRigAUj2QlAAWJxBcAB4AJABAJgBc6AB9hSqAQUxNy4xMbgBA8gBAPgBAZgCHKAC2xXCAgQQIxgnwgIKECMYgAQYJxiKBcICHRAuGIAEGJECGMcBGJgFGJkFGIoFGJ4FGI4FGK8BwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QLhiABBixAxjRAxjHAcICCxAAGIAEGLEDGIMBwgILEC4YgAQYsQMYgwHCAgsQLhiABBiRAhiKBcICCxAAGIAEGJECGIoFwgIOEC4YgAQYsQMYgwEYigXCAg4QABiABBixAxiDARiKBcICGhAuGIAEGJECGLEDGNEDGIMBGMcBGMkDGIoFwgITEC4YgAQYFBiHAhjHARiOBRivAcICCxAAGIAEGJIDGIoFwgIKEAAYgAQYFBiHAsICCxAuGIAEGNEDGMcBwgIIEAAYgAQYsQPCAgUQABiABMICBRAuGIAEwgILEC4YgAQYxwEYrwHCAhQQLhiABBjHARiYBRiZBRieBRivAcICBxAAGIAEGArCAgYQABgWGB7CAggQABgWGAoYHsICCBAAGIAEGKIEwgIIEAAYogQYiQXCAgcQIRigARgKwgIEECEYFZgDAJIHBTE2LjEyoAfT-gE&sclient=gws-wiz#lpg=cid:CgIgAQ%3D%3D,ik:CAoSLEFGMVFpcE95M3hTdTN1S3hpSXJ0Sk9nVllubHlSdzgyTTl6OVpNT0dleXNq&lrd=0x89b62db1967a3c35:0x5577489564cc6762,1,,,,"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Write a review <GoogleIcon />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
