import { title } from "@/components/primitives";
import { getHelados } from "@/sanity-utilis";
import { log } from "console";

export default async function Home() {
  const helados = await getHelados();
  log(helados);
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
      {helados.map((helado) => (
        <div key={helado._id}>
          <h3>{helado.name}</h3>
          <p>{helado.image}</p>
          <p>{helado.description}</p>
          <p>{helado.price}</p>
        </div>
      ))}
    </section>
  );
}
