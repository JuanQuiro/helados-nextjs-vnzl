const helado = {
  name: "helado",
  title: "Helado",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre de Helado",
      type: "string",
    },
    {
      name: "description",
      title: "Descripcion del Helado",
      type: "string",
      of: [{ type: "block" }],
    },
    {
      name: "price",
      title: "Precio del helado(Poner en titulo si es al menor o detal)",
      type: "number",
    },
    {
      name: "image",
      title: "Imagenes",
      type: "image",
      options: { hotspost: true },

      fields: [{ name: "alt", title: "Contexto de imagen", type: "string" }],
    },
  ],
};

export default helado;
