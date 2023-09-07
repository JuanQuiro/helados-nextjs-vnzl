import { title } from "@/components/primitives";

const WhatsAppShare = () => {
  const phoneNumber = "584244125805"; // Aquí debes colocar tu número de WhatsApp

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-green-400">
        Compartir por WhatsApp
      </h2>
      <p className="text-lg mb-4">
        ¡Comparte nuestra página con tus amigos a través de WhatsApp!
        Simplemente haz clic en el enlace de abajo para abrir una conversación
        con nuestro número de WhatsApp.
      </p>
      <a
        href={`https://wa.me/${phoneNumber}`}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        target="_blank"
        rel="noopener noreferrer"
      >
        Compartir en WhatsApp
      </a>
    </div>
  );
};

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Contacto</h1>
      <WhatsAppShare />
    </div>
  );
}
