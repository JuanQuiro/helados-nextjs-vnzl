import { createClient, groq } from "next-sanity";
import { Helado } from "./modals/helados";

export async function getHelados(): Promise<Helado[]> {
  const client = createClient({
    projectId: "a8claon8",
    dataset: "production",
  });
  return client.fetch(groq`*[_type == 'helado']{
_id,
_createdAt,
name,
description,
price
}`);
}
