import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-300">
            🍦 Sobre Nosotros 🍦
          </h2>
          <p className="text-lg">
            Somos una heladería ubicada en San Joaquín, Valencia. Nos
            especializamos en la elaboración de helados artesanales con
            ingredientes frescos y de la más alta calidad. Nuestro objetivo es
            brindarte la mejor experiencia de sabor y textura en cada uno de
            nuestros helados. 🌈🍨
          </p>
        </div>
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-300">
            📜 Nuestra Historia 📜
          </h2>
          <p className="text-lg">
            Desde nuestra apertura, nos hemos dedicado a perfeccionar nuestras
            recetas y técnicas para ofrecerte los helados más deliciosos.
            Utilizamos métodos tradicionales de producción y seleccionamos los
            mejores ingredientes locales para garantizar la frescura y calidad
            de nuestros productos. 🍦✨
          </p>
        </div>
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-300">
            📍 Visítanos 📍
          </h2>
          <p className="text-lg">
            ¡Te invitamos a visitar nuestra heladería en San Joaquín, Valencia!
            Disfruta de una amplia variedad de sabores y combinaciones únicas.
            Nuestro amable personal estará encantado de atenderte y ayudarte a
            elegir el helado perfecto para ti. 🍧🍦😊
          </p>
        </div>
      </div>
    </>
  );
}
