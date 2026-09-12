const luthiers = [
  {
    id: "rosa",
    nombre: "Rosa María Cifuentes",
    ciudad: "Pasto, Nariño",
    especialidad: "Tiples de concierto",
    bio: "Aprendió con su padre en un taller de San Juan de Pasto. Trabaja el cedro y el nogal nariñense, y deja la tapa armónica con un espesor distinto en cada zona para que el tiple no se ahogue en el registro grave.",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&h=600&q=80",
    alt: "Rosa María Cifuentes, luthier de tiples, en su taller"
  },
  {
    id: "hernan",
    nombre: "Hernán Quintero",
    ciudad: "Ibagué, Tolima",
    especialidad: "Bandola andina",
    bio: "Salió del Conservatorio de Ibagué tocando bandola y se quedó construyéndola. Sus instrumentos se reconocen por el diapasón ligeramente más estrecho, pensado para manos que vienen del tiple.",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80",
    alt: "Hernán Quintero, constructor de bandolas andinas"
  },
  {
    id: "yara",
    nombre: "Yara Mamani",
    ciudad: "El Alto / Bogotá",
    especialidad: "Charango y ronroco",
    bio: "Trabaja con palosanto y, cuando el cliente lo pide, con tapa de pino abeto. No usa caparazón de quirquincho: todas sus cajas son de madera, con la misma proyección que busca un charango de escenario.",
    foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&h=600&q=80",
    alt: "Yara Mamani, luthier de charangos"
  },
  {
    id: "tomas",
    nombre: "Tomás Restrepo",
    ciudad: "Medellín, Antioquia",
    especialidad: "Cuatro llanero y restauración",
    bio: "Restaura cuatros de los años 70 y construye copias de esos mismos moldes. Si un instrumento llega con el mango abierto, lo vuelve a encolar con la misma madera, no con un injerto genérico.",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&h=600&q=80",
    alt: "Tomás Restrepo, luthier de cuatros llaneros"
  }
];

const instrumentos = [
  {
    id: "tiple-nariño",
    nombre: "Tiple de concierto Nariño",
    categoria: "tiple",
    luthierId: "rosa",
    precio: 1850000,
    descripcion: "Doce cuerdas en cuatro órdenes. Tapa de cedro, aros de nogal y un puente bajo para no tapar la voz de quien canta al lado.",
    foto: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&h=560&q=80",
    alt: "Tiple de concierto de madera clara sobre un fondo oscuro"
  },
  {
    id: "tiple-estudio",
    nombre: "Tiple de estudio",
    categoria: "tiple",
    luthierId: "rosa",
    precio: 980000,
    descripcion: "Escala un poco más corta y acción baja. Pensado para quien empieza en la escuela y no quiere pelearse con el instrumento.",
    foto: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?auto=format&fit=crop&w=800&h=560&q=80",
    alt: "Tiple de estudio apoyado en un taller de madera"
  },
  {
    id: "bandola-ibague",
    nombre: "Bandola andina Ibagué",
    categoria: "bandola",
    luthierId: "hernan",
    precio: 2100000,
    descripcion: "Catorce cuerdas, caja más profunda que una bandola de serenata. El sonido aguanta un formato de trío sin microfonía.",
    foto: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&h=560&q=80",
    alt: "Bandola andina vista de frente en un estudio"
  },
  {
    id: "bandola-serenata",
    nombre: "Bandola de serenata",
    categoria: "bandola",
    luthierId: "hernan",
    precio: 1450000,
    descripcion: "Más liviana, con tapa más delgada. Sirve para tocar sentado en un patio, no para un teatro.",
    foto: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=800&h=560&q=80",
    alt: "Cuerpo de instrumento de cuerda con vetas de madera"
  },
  {
    id: "charango-escenario",
    nombre: "Charango de escenario",
    categoria: "charango",
    luthierId: "yara",
    precio: 1250000,
    descripcion: "Caja de palosanto, tapa de pino. Diez cuerdas. El mango tiene un radio suave para púas rápidas en huaynos.",
    foto: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&h=560&q=80",
    alt: "Charango de madera oscura sobre un fondo neutro"
  },
  {
    id: "ronroco",
    nombre: "Ronroco en re",
    categoria: "charango",
    luthierId: "yara",
    precio: 1680000,
    descripcion: "La voz grave de la familia del charango. Sirve para acompañar, no para competir con el charango principal.",
    foto: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=800&h=560&q=80",
    alt: "Manos afinando un instrumento de cuerda pequeño"
  },
  {
    id: "cuatro-llanero",
    nombre: "Cuatro llanero 17 trastes",
    categoria: "cuatro",
    luthierId: "tomas",
    precio: 890000,
    descripcion: "Cuatro cuerdas de nylon, tapa de pino canadiense y aros de sapán. El golpe de joropo no lo desentona a la tercera canción.",
    foto: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=800&h=560&q=80",
    alt: "Cuatro llanero de cuerdas de nylon"
  },
  {
    id: "cuatro-restaurado",
    nombre: "Cuatro restaurado, década de 1970",
    categoria: "cuatro",
    luthierId: "tomas",
    precio: 720000,
    descripcion: "Llegó con el mango abierto y el puente levantado. Se reencoló, se cambió el cejillo y se dejó la pátina original.",
    foto: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=800&h=560&q=80",
    alt: "Instrumento de cuerda vintage en un taller"
  },
  {
    id: "set-cuerdas-tiple",
    nombre: "Juego de cuerdas para tiple",
    categoria: "accesorios",
    luthierId: "rosa",
    precio: 48000,
    descripcion: "Acero y entorchado según el calibre que usa Rosa en sus tiples de concierto. Incluye las doce cuerdas.",
    foto: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&h=560&q=80",
    alt: "Cuerdas y clavijas de un instrumento de cuerda vistas de cerca"
  }
];

function formatearPrecio(valor) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(valor);
}

function buscarLuthier(id) {
  return luthiers.find(function (persona) {
    return persona.id === id;
  });
}
