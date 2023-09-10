import CardHelado from "@/components/CardHelados";
import { title } from "@/components/primitives";
import { getHelados } from "@/sanity-utilis";

export default async function Home() {
  const helados = await getHelados();
  globalThis.console.log(helados);
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center mb-5">
          <h1 className={title()}>
            Los Helados <br />{" "}
          </h1>
          <h1 className={title({ color: "yellow" })}>
            Mas Ricos al Mejor Precio
          </h1>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {helados.map((helado, index) => (
          <CardHelado
            leyend={helado.leyend}
            description={helado.description}
            key={index}
            nombre={helado.name}
            precio={helado.price}
            alt={helado.alt}
            index={index}
            img={helado.image}
          />
        ))}
      </section>
    </>
  );
}
