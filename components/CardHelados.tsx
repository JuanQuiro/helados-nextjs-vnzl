"use client";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

type Prop = {
  index: number;
  nombre: string;
  leyenda: string;
  alt: string;
  precio: number;
  img: string;
  description: string;
};

const CardHelado = (prop: Prop) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card isFooterBlurred className="w-full h-[300px] col-span-1">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-black uppercase font-bold bg-white rounded-full">
            {prop.index}
          </p>
          <h4 className="text-white font-medium text-2xl">{prop.nombre}</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={prop.img}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">{prop.leyenda}</p>
            <p className="text-black text-tiny">Compra ahora 😍</p>
          </div>
          <Button
            className="text-tiny bg-green-700"
            color="primary"
            radius="full"
            size="sm"
            onPress={onOpen}
          >
            Ver mas
          </Button>
        </CardFooter>
      </Card>
      <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-orange-500">
                {prop.nombre}
              </ModalHeader>
              <ModalBody>
                <Image
                  alt={prop.alt}
                  className="w-2/6 h-2/5 object-cover"
                  src={prop.img}
                />
                <p>{prop.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button
                  className="bg-green-700"
                  color="primary"
                  onPress={onClose}
                >
                  WhatsApp
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardHelado;
