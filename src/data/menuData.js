export const menuCategories = [
  { id: 'combos-asados', name: 'Combos Asados' },
  { id: 'combos-apanados', name: 'Combos Apanados' },
  { id: 'combos-especiales', name: 'Combos Especiales' },
  { id: 'ensaladas', name: 'Ensaladas' },
  { id: 'sopas', name: 'Sopas' },
  { id: 'adicionales', name: 'Adicionales' },
  { id: 'limonadas', name: 'Limonadas' },
  { id: 'jugos', name: 'Jugos Naturales' },
];

export const menuProducts = [
  // COMBOS ASADOS
  { id: 101, name: '1 Asado (8 Presas)', category: 'combos-asados', price: 43000, desc: 'Incluye 8 presas de pollo asado, 4 papas y 4 arepas.', img: '/IMG/19.jpeg' },
  { id: 102, name: '3/4 Asado (6 Presas)', category: 'combos-asados', price: 37000, desc: 'Incluye 6 presas de pollo asado, 3 papas y 3 arepas.', img: '/IMG/48.jpeg' },
  { id: 103, name: '1/2 Asado (4 Presas)', category: 'combos-asados', price: 24000, desc: 'Incluye 4 presas de pollo asado, 2 papas y 2 arepas.', img: '/IMG/47.jpeg' },
  { id: 104, name: '1/4 Asado (2 Presas)', category: 'combos-asados', price: 14000, desc: 'Incluye 2 presas de pollo asado, 1 papa y 1 arepa.', img: '/IMG/46.jpeg' },

  // COMBOS APANADOS
  { id: 201, name: '1 Apanado (8 Presas)', category: 'combos-apanados', price: 43000, desc: 'Incluye 8 presas de pollo apanado, 4 papas y 4 arepas.', img: '/IMG/5.jpeg' },
  { id: 202, name: '3/4 Apanado (6 Presas)', category: 'combos-apanados', price: 37000, desc: 'Incluye 6 presas de pollo apanado, 3 papas y 3 arepas.', img: '/IMG/53.jpeg' },
  { id: 203, name: '1/2 Apanado (4 Presas)', category: 'combos-apanados', price: 24000, desc: 'Incluye 4 presas de pollo apanado, 2 papas y 2 arepas.', img: '/IMG/4.jpeg' },
  { id: 204, name: '1/4 Apanado (2 Presas)', category: 'combos-apanados', price: 14000, desc: 'Incluye 2 presas de pollo apanado, 1 papa y 1 arepa.', img: '/IMG/12.jpeg' },

  // COMBOS ESPECIALES
  { id: 301, name: 'Bandeja Caleña', category: 'combos-especiales', price: 26000, desc: 'Plátano, arroz, fríjol, ensalada de lechuga, 1/4 asado o apanado, papa, arepa y bebida.', img: '/IMG/bandeja.jpg' },
  { id: 302, name: 'Combo Personal', category: 'combos-especiales', price: 23000, desc: '1/4 asado o apanado, papas a la francesa, ensalada agridulce y bebida.', img: '/IMG/42.jpeg' },
  { id: 303, name: 'Combo Familiar', category: 'combos-especiales', price: 68000, desc: '1 pollo asado, 4 papas, 4 arepas, ensalada agridulce familiar y 1.5L gaseosa.', img: '/IMG/2.jpeg' },
  { id: 304, name: 'Seco Caleño', category: 'combos-especiales', price: 24000, desc: 'Plátano, arroz, ensalada de lechuga, 1/4 asado o apanado, papa, arepa y bebida.', img: '/IMG/43.jpeg' },

  // ENSALADAS
  { id: 801, name: 'Ensalada Agridulce Pequeña (260g)', category: 'ensaladas', price: 8000, desc: 'Ensalada agridulce especial de la casa.', img: '/IMG/agridulce.jpg' },
  { id: 802, name: 'Ensalada Agridulce Mediana (360g)', category: 'ensaladas', price: 10000, desc: 'Ensalada agridulce especial ideal para acompañar.', img: '/IMG/agridulce.jpg' },
  { id: 803, name: 'Ensalada Agridulce Grande (1000g)', category: 'ensaladas', price: 20000, desc: 'Ensalada agridulce especial para compartir en familia.', img: '/IMG/agridulce.jpg' },
  { id: 804, name: 'Porción Ensalada Lechuga Mediana (360g)', category: 'ensaladas', price: 7000, desc: 'Porción de ensalada fresca de lechuga mediana.', img: '/IMG/lechuga.jpg' },
  { id: 805, name: 'Porción Ensalada Lechuga Grande (1000g)', category: 'ensaladas', price: 15000, desc: 'Porción grande de ensalada fresca de lechuga.', img: '/IMG/lechuga.jpg' },

  // SOPAS
  { id: 401, name: 'Consomé de Menudencia', category: 'sopas', price: 10000, desc: 'Consomé tradicional con menudencias frescas.', img: '/IMG/menudencia.jpg' },
  { id: 402, name: 'Consomé de Pescado', category: 'sopas', price: 11000, desc: 'Consomé concentrado sabor de mar.', img: '/IMG/pescado.jpg' },
  { id: 403, name: 'Porción de Fríjol', category: 'sopas', price: 9000, desc: 'Porción de fríjoles estilo caleño.', img: '/IMG/frijoles.jpg' },

  // ADICIONALES
  { id: 501, name: 'Porción de Arroz', category: 'adicionales', price: 5000, desc: 'Arroz blanco suelto.', img: '/IMG/arroz.jpg' },
  { id: 505, name: 'Papitas a la Francesa', category: 'adicionales', price: 9000, desc: 'Naturales, sabor a queso, tocineta o BBQ dulce.', img: '/IMG/papas.jpg' },
  { id: 506, name: 'Papa Criolla Naturales', category: 'adicionales', price: 6000, desc: 'Opciones: Queso, tocineta o BBQ dulce.', img: '/IMG/criolla.jpg' },
  { id: 507, name: 'Porción de Yuca', category: 'adicionales', price: 6000, desc: 'Sabor natural, queso, tocineta o BBQ dulce.', img: '/IMG/yuca.jpg' },
  { id: 508, name: 'Porción de Plátano', category: 'adicionales', price: 3500, desc: 'Tajada o tronco de plátano maduro.', img: '/IMG/16.jpeg' },
  { id: 509, name: 'Aborrajao Caleño', category: 'adicionales', price: 9000, desc: 'Plátano, queso, bocadillo y lecherita.', img: '/IMG/aborrajado.jpg' },
  { id: 510, name: 'Salsas Adicionales', category: 'adicionales', price: 1000, desc: 'Salsas variadas de la casa.', img: '/IMG/6.jpeg' },

  // BEBIDAS Y LIMONADAS
  { id: 601, name: 'Limonada Natural', category: 'limonadas', price: 8000, desc: 'Limonada refrescante natural.', img: '/IMG/limonadas.jpg' },
  { id: 602, name: 'Limonada de CEREZA / COCO', category: 'limonadas', price: 8000, desc: 'Sabores especiales de limonada.', img: '/IMG/limonadas.jpg' },
  { id: 603, name: 'Guandolo Caleño', category: 'limonadas', price: 6000, desc: 'Bebida tradicional de panela y limón.', img: '/IMG/13.jpeg' },
  { id: 604, name: 'Jarra de Guandolo', category: 'limonadas', price: 13000, desc: 'Jarra para compartir.', img: '/IMG/13.jpeg' },
  { id: 701, name: 'Jugo Natural (Agua / Leche)', category: 'jugos', price: 6000, desc: 'Mora, Mango, Maracuyá, Guanábana o Fresa.', img: '/IMG/jugos.jpg' },
];