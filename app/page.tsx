import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center mb-5">
        <h1 className={title()}>
          Los Helados <br />{" "}
        </h1>
        <h1 className={title({ color: "violet" })}>
          Mas Ricos al Mejor Precio
        </h1>
      </div>

      <div className="flex gap-8">
        <Link href={"precios"}>
          <Button color="default" className="bg-blue-500">
            Precios
          </Button>
        </Link>

        <Link href={siteConfig.navMenuItems[4].href}>
          <Button color="default" variant="bordered">
            Contacto
          </Button>
        </Link>
      </div>
    </section>
  );
}
