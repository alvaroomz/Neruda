// EDITAR AQUÍ: categorías, productos, precios, descripciones y rutas de fotografías.
// image: null indica fotografía pendiente. No requiere servidor ni fetch.
const MENU = [
  {
    "id": "categoria-1",
    "name": "Entradas",
    "page": 1,
    "note": "",
    "items": [
      {
        "id": "p-1",
        "name": "Papas bravas",
        "price": 95,
        "description": "Papas confitadas, acompañadas de ali oli, salsa picante y paprika.",
        "variants": [],
        "image": null,
        "sourcePage": 1
      },
      {
        "id": "p-2",
        "name": "Camarones Nueva Orleans",
        "price": 240,
        "description": "Camarones salteados en mantequilla con ajo, chile comapeño, chimichurri y un toque de parmesano.",
        "variants": [],
        "image": null,
        "sourcePage": 1
      },
      {
        "id": "p-3",
        "name": "Papas gratinadas",
        "price": null,
        "description": "",
        "variants": [
          {
            "name": "Con arrachera",
            "price": 150
          },
          {
            "name": "Con jamón",
            "price": 120
          },
          {
            "name": "Con chistorra",
            "price": 150
          }
        ],
        "image": null,
        "sourcePage": 1
      },
      {
        "id": "p-4",
        "name": "Puré de papa con chistorra al gratín",
        "price": 160,
        "description": "Cremoso puré de papa acompañado de 150 g de chistorra; gratinado con nuestro tradicional queso holandés.",
        "variants": [],
        "image": null,
        "sourcePage": 1
      },
      {
        "id": "p-5",
        "name": "Fondue",
        "price": null,
        "description": "",
        "variants": [
          {
            "name": "Con camarón",
            "price": 190
          },
          {
            "name": "Con chistorra",
            "price": 170
          },
          {
            "name": "Con portobello",
            "price": 150
          }
        ],
        "image": null,
        "sourcePage": 1
      },
      {
        "id": "p-6",
        "name": "Tabla de quesos",
        "price": 320,
        "description": "",
        "variants": [],
        "image": "images/tabla-quesos.webp",
        "sourcePage": 1
      },
      {
        "id": "p-7",
        "name": "Mollejas de ternera",
        "price": 180,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 1
      },
      {
        "id": "p-8",
        "name": "Guacamole",
        "price": 90,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 1
      },
      {
        "id": "p-9",
        "name": "Papas gajo",
        "price": 80,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 1
      },
      {
        "id": "p-10",
        "name": "Papas a la francesa",
        "price": 60,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 1
      }
    ]
  },
  {
    "id": "categoria-2",
    "name": "Tapas",
    "page": 2,
    "note": "Especialidades: salmón (+$15 por orden), jamón serrano con queso, camarón y Filadelphia (+$15 por orden), pollo con chipotle.",
    "items": [
      {
        "id": "p-11",
        "name": "Tapas",
        "price": null,
        "description": "",
        "variants": [
          {
            "name": "3 piezas",
            "price": 80
          },
          {
            "name": "6 piezas",
            "price": 120
          }
        ],
        "image": null,
        "sourcePage": 2
      }
    ]
  },
  {
    "id": "categoria-3",
    "name": "Tacos",
    "page": 2,
    "note": "",
    "items": [
      {
        "id": "p-12",
        "name": "Camarón al gratín",
        "price": 150,
        "description": "3 piezas. Preparados con tortilla de harina.",
        "variants": [],
        "image": null,
        "sourcePage": 2
      },
      {
        "id": "p-13",
        "name": "Fajitas de pollo al gratín",
        "price": 100,
        "description": "3 piezas. Preparados con tortilla de harina.",
        "variants": [],
        "image": null,
        "sourcePage": 2
      },
      {
        "id": "p-14",
        "name": "Arrachera gratinada",
        "price": 150,
        "description": "3 piezas. Preparados con tortilla de harina.",
        "variants": [],
        "image": null,
        "sourcePage": 2
      },
      {
        "id": "p-15",
        "name": "Carne asada",
        "price": 150,
        "description": "4 piezas. Preparados con tortilla de maíz y guacamole.",
        "variants": [],
        "image": null,
        "sourcePage": 2
      },
      {
        "id": "p-16",
        "name": "Chistorra",
        "price": 140,
        "description": "3 piezas. Preparados con tortilla de harina.",
        "variants": [],
        "image": null,
        "sourcePage": 2
      }
    ]
  },
  {
    "id": "categoria-4",
    "name": "Baguettes",
    "page": 3,
    "note": "",
    "items": [
      {
        "id": "p-17",
        "name": "Arrachera",
        "price": 150,
        "description": "Arrachera gratinada, con pimientos y cebollas salteadas y tomate. Acompañado de papas chips.",
        "variants": [],
        "image": null,
        "sourcePage": 3
      },
      {
        "id": "p-18",
        "name": "Pollo",
        "price": 120,
        "description": "Pechuga gratinada y tomate. Acompañado de papas chips.",
        "variants": [],
        "image": null,
        "sourcePage": 3
      },
      {
        "id": "p-19",
        "name": "Chistorra",
        "price": 140,
        "description": "Chistorra gratinada y tomate.",
        "variants": [],
        "image": null,
        "sourcePage": 3
      },
      {
        "id": "p-20",
        "name": "Jamón serrano",
        "price": 140,
        "description": "Acompañado de tomates salteados con orégano, aceite de oliva y queso. Acompañado de papas chips.",
        "variants": [],
        "image": null,
        "sourcePage": 3
      }
    ]
  },
  {
    "id": "categoria-5",
    "name": "Hamburguesas",
    "page": 3,
    "note": "",
    "items": [
      {
        "id": "p-21",
        "name": "Clásica",
        "price": 130,
        "description": "Jugosa carne a la parrilla con delicioso pan artesanal 100% de leche y mantequilla, tomate fresco y lechuga italiana.",
        "variants": [],
        "image": null,
        "sourcePage": 3
      },
      {
        "id": "p-22",
        "name": "Uruapan Burguer",
        "price": 160,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 3
      },
      {
        "id": "p-23",
        "name": "Hamburguesa Neruda",
        "price": 180,
        "description": "Jugosa carne de nuestra selección gratinada con queso holandés y champiñones frescos.",
        "variants": [],
        "image": null,
        "sourcePage": 3
      }
    ]
  },
  {
    "id": "categoria-6",
    "name": "Pastas",
    "page": 4,
    "note": "",
    "items": [
      {
        "id": "p-24",
        "name": "El poder del ahora",
        "price": 140,
        "description": "Pasta alfredo acompañada de fajitas de pollo y cremosa salsa de brócoli.",
        "variants": [],
        "image": null,
        "sourcePage": 4
      },
      {
        "id": "p-25",
        "name": "Fetuccini Neruda",
        "price": 180,
        "description": "Cremosa pasta con salsa de espinacas, camarón y tocino.",
        "variants": [],
        "image": null,
        "sourcePage": 4
      },
      {
        "id": "p-26",
        "name": "Spaguetti a la boloñesa",
        "price": 145,
        "description": "Preparada con salsa pomodoro y carne al laurel.",
        "variants": [],
        "image": null,
        "sourcePage": 4
      },
      {
        "id": "p-27",
        "name": "Frutti di mare",
        "price": 240,
        "description": "Pasta frutti di mare con camarones, calamares, mejillones y pulpo, en una exquisita salsa de tomate con un toque mediterráneo.",
        "variants": [],
        "image": null,
        "sourcePage": 4
      },
      {
        "id": "p-28",
        "name": "Pasta fusion",
        "price": null,
        "description": "",
        "variants": [
          {
            "name": "Con vacío",
            "price": 590
          },
          {
            "name": "Con Rib Eye",
            "price": 690
          },
          {
            "name": "Con arrachera",
            "price": 430
          }
        ],
        "image": null,
        "sourcePage": 4
      }
    ]
  },
  {
    "id": "categoria-7",
    "name": "Ensaladas",
    "page": 4,
    "note": "",
    "items": [
      {
        "id": "p-29",
        "name": "Arrachera",
        "price": 150,
        "description": "Lechuga italiana, queso gouda, chimichurri, tomate cherry y vinagre balsámico.",
        "variants": [],
        "image": null,
        "sourcePage": 4
      },
      {
        "id": "p-30",
        "name": "Manzana y frutos rojos",
        "price": 140,
        "description": "Lechuga silvestre, manzana, arándano, fresa, queso de cabra, nuez y vinagreta de mango y chabacano.",
        "variants": [],
        "image": null,
        "sourcePage": 4
      },
      {
        "id": "p-31",
        "name": "Salmón (nuevo)",
        "price": 150,
        "description": "Lechuga italiana, queso gouda, chimichurri, tomate cherry y vinagre balsámico.",
        "variants": [],
        "image": null,
        "sourcePage": 4
      },
      {
        "id": "p-32",
        "name": "Cesar con camarones",
        "price": 150,
        "description": "Camarón con aderezo cesar de la casa, crutones y queso espolvoreado.",
        "variants": [],
        "image": null,
        "sourcePage": 4
      },
      {
        "id": "p-33",
        "name": "Pollo con jamón",
        "price": 120,
        "description": "Pollo con aderezo mil islas, queso manchego y pimiento rojo.",
        "variants": [],
        "image": null,
        "sourcePage": 4
      }
    ]
  },
  {
    "id": "categoria-8",
    "name": "Parrilla Neruda",
    "page": 5,
    "note": "Guarnición a elegir: ensalada mixta o puré de papa.",
    "items": [
      {
        "id": "p-34",
        "name": "Salmón a la plancha",
        "price": 320,
        "description": "Acompañado de exquisitas verduras salteadas y cremoso puré de papa, con nuestra salsa verde. Sugerencia de maridaje: vino blanco / Zinfandel.",
        "variants": [],
        "image": "images/salmon.webp",
        "sourcePage": 5
      },
      {
        "id": "p-35",
        "name": "Pulpo al chimichurri",
        "price": "Según peso",
        "description": "Acompañado de puré de papa. Sugerencia de maridaje: vino tinto Malbec.",
        "variants": [],
        "image": "images/pulpo.webp",
        "sourcePage": 5
      },
      {
        "id": "p-36",
        "name": "Rib Eye a la parrilla",
        "price": 550,
        "description": "Su principal característica es su suavidad, su intenso sabor y marmoleo mixto, lo vuelve irresistible.",
        "variants": [],
        "image": null,
        "sourcePage": 5
      },
      {
        "id": "p-37",
        "name": "Arrachera a la parrilla",
        "price": 350,
        "description": "En Argentina se conoce como entraña, corte famoso por su suavidad y 0 grasa.",
        "variants": [],
        "image": null,
        "sourcePage": 5
      },
      {
        "id": "p-38",
        "name": "Picaña a la parrilla",
        "price": 400,
        "description": "Asada al punto perfecto, esta delicia se realza con un toque de sal gruesa y especias selectas, resaltando su sabor natural.",
        "variants": [],
        "image": null,
        "sourcePage": 5
      },
      {
        "id": "p-39",
        "name": "Vacío a la parrilla",
        "price": 450,
        "description": "Corte de carne magra, su intenso sabor lo hace incomparable. Se recomienda término 3/4. Sugerencia de maridaje: vino tinto Cabernet.",
        "variants": [],
        "image": null,
        "sourcePage": 5
      }
    ]
  },
  {
    "id": "categoria-9",
    "name": "Crepa salada",
    "page": 6,
    "note": "",
    "items": [
      {
        "id": "p-40",
        "name": "Jamón, queso y espinaca",
        "price": 90,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 6
      },
      {
        "id": "p-41",
        "name": "Champiñón y queso gouda",
        "price": 105,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 6
      }
    ]
  },
  {
    "id": "categoria-10",
    "name": "Dulces",
    "page": 6,
    "note": "",
    "items": [
      {
        "id": "p-42",
        "name": "Cajeta",
        "price": 85,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 6
      },
      {
        "id": "p-43",
        "name": "Nutella y Filadelphia",
        "price": 85,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 6
      },
      {
        "id": "p-44",
        "name": "Frutos rojos",
        "price": 85,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 6
      }
    ]
  },
  {
    "id": "categoria-11",
    "name": "Postres",
    "page": 6,
    "note": "",
    "items": [
      {
        "id": "p-45",
        "name": "Cheesecake",
        "price": 90,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 6
      },
      {
        "id": "p-46",
        "name": "Pan de nata",
        "price": 80,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 6
      },
      {
        "id": "p-47",
        "name": "Pastel de zanahoria",
        "price": 90,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 6
      },
      {
        "id": "p-48",
        "name": "Pan de elote con helado de vainilla",
        "price": 120,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 6
      }
    ]
  },
  {
    "id": "categoria-12",
    "name": "Bebidas calientes",
    "page": 7,
    "note": "",
    "items": [
      {
        "id": "p-49",
        "name": "Americano",
        "price": 45,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 7
      },
      {
        "id": "p-50",
        "name": "Espresso",
        "price": 45,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 7
      },
      {
        "id": "p-51",
        "name": "Latte",
        "price": 55,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 7
      },
      {
        "id": "p-52",
        "name": "Capuccino",
        "price": 55,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 7
      },
      {
        "id": "p-53",
        "name": "Chocolate artesanal",
        "price": 60,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 7
      }
    ]
  },
  {
    "id": "categoria-13",
    "name": "Especiales",
    "page": 7,
    "note": "",
    "items": [
      {
        "id": "p-54",
        "name": "Capuccino sabor",
        "price": 60,
        "description": "Vainilla, cajeta, moka.",
        "variants": [],
        "image": null,
        "sourcePage": 7
      },
      {
        "id": "p-55",
        "name": "Capuccino especial",
        "price": 75,
        "description": "Baileys, rompope, whisky.",
        "variants": [],
        "image": null,
        "sourcePage": 7
      },
      {
        "id": "p-56",
        "name": "Irlandés",
        "price": 80,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 7
      },
      {
        "id": "p-57",
        "name": "Té Chai",
        "price": 75,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 7
      },
      {
        "id": "p-58",
        "name": "Té Chai + espresso",
        "price": 75,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 7
      }
    ]
  },
  {
    "id": "categoria-14",
    "name": "Tés",
    "page": 7,
    "note": "",
    "items": [
      {
        "id": "p-59",
        "name": "Té",
        "price": 35,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 7
      },
      {
        "id": "p-60",
        "name": "Té frío",
        "price": 35,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 7
      },
      {
        "id": "p-61",
        "name": "Té frutos rojos natural (tisana)",
        "price": 60,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 7
      },
      {
        "id": "p-62",
        "name": "Té frutos rojos natural frío (tisana)",
        "price": 60,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 7
      }
    ]
  },
  {
    "id": "categoria-15",
    "name": "Frappés",
    "page": 8,
    "note": "",
    "items": [
      {
        "id": "p-63",
        "name": "Clásicos",
        "price": 75,
        "description": "Oreo, tradicional, moka, cajeta, vainilla.",
        "variants": [],
        "image": null,
        "sourcePage": 8
      },
      {
        "id": "p-64",
        "name": "Especiales",
        "price": 95,
        "description": "Nutella, Baileys, rompope, Té Chai.",
        "variants": [],
        "image": null,
        "sourcePage": 8
      },
      {
        "id": "p-65",
        "name": "Malteada",
        "price": 60,
        "description": "Fresa, chocolate.",
        "variants": [],
        "image": null,
        "sourcePage": 8
      },
      {
        "id": "p-66",
        "name": "Escocés",
        "price": 75,
        "description": "Whisky, espresso frío, canela.",
        "variants": [],
        "image": null,
        "sourcePage": 8
      },
      {
        "id": "p-67",
        "name": "Carajillo",
        "price": 105,
        "description": "Espresso + Licor 43.",
        "variants": [],
        "image": null,
        "sourcePage": 8
      },
      {
        "id": "p-68",
        "name": "Carajillo Baileys",
        "price": 105,
        "description": "Espresso + Baileys + Leche Clavel.",
        "variants": [],
        "image": null,
        "sourcePage": 8
      },
      {
        "id": "p-69",
        "name": "Neruda",
        "price": 105,
        "description": "Ristreto + Licor 43 + Leche Clavel.",
        "variants": [],
        "image": null,
        "sourcePage": 8
      },
      {
        "id": "p-70",
        "name": "Niño dorado",
        "price": 110,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 8
      }
    ]
  },
  {
    "id": "categoria-16",
    "name": "Cerveza",
    "page": 9,
    "note": "Preparaciones publicadas: Chelada $5 · Michelada $10 · Clamatada $15.",
    "items": [
      {
        "id": "p-71",
        "name": "Negra Modelo",
        "price": 60,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-72",
        "name": "Modelo Especial",
        "price": 60,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-73",
        "name": "Victoria",
        "price": 55,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-74",
        "name": "Artesanal importada",
        "price": 120,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      }
    ]
  },
  {
    "id": "categoria-17",
    "name": "Aguas",
    "page": 9,
    "note": "",
    "items": [
      {
        "id": "p-75",
        "name": "Limonada",
        "price": null,
        "description": "",
        "variants": [
          {
            "name": "Mineral",
            "price": 55
          },
          {
            "name": "Natural",
            "price": 45
          }
        ],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-76",
        "name": "Naranjada",
        "price": null,
        "description": "",
        "variants": [
          {
            "name": "Mineral",
            "price": 55
          },
          {
            "name": "Natural",
            "price": 45
          }
        ],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-77",
        "name": "Limonada Pepino/Hie",
        "price": null,
        "description": "",
        "variants": [
          {
            "name": "Mineral",
            "price": 55
          },
          {
            "name": "Natural",
            "price": 45
          }
        ],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-78",
        "name": "Jarra de agua",
        "price": null,
        "description": "",
        "variants": [
          {
            "name": "Mineral",
            "price": 150
          },
          {
            "name": "Natural",
            "price": 150
          }
        ],
        "image": null,
        "sourcePage": 9
      }
    ]
  },
  {
    "id": "categoria-18",
    "name": "Destilados",
    "page": 9,
    "note": "Porción indicada en el menú: 2 oz.",
    "items": [
      {
        "id": "p-79",
        "name": "Old Parr 12",
        "price": 130,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-80",
        "name": "Macalan 12",
        "price": 190,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-81",
        "name": "Don Julio 70",
        "price": 120,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-82",
        "name": "Tanqueray",
        "price": 100,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-83",
        "name": "Licor 43",
        "price": 90,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-84",
        "name": "Glenlivet 12",
        "price": 170,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-85",
        "name": "Glenlivet",
        "price": 150,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-86",
        "name": "Mezcal",
        "price": 120,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-87",
        "name": "Maestro Dobel",
        "price": 130,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-88",
        "name": "Etiqueta negra",
        "price": 130,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-89",
        "name": "Sangrita",
        "price": 50,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-90",
        "name": "Torres 10",
        "price": 100,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-91",
        "name": "Buchanans 12",
        "price": 130,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-92",
        "name": "Black and white",
        "price": 85,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-93",
        "name": "Cuervo Especial",
        "price": 120,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-94",
        "name": "Baileys",
        "price": 85,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-95",
        "name": "Bacardi Blanco",
        "price": 85,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-96",
        "name": "Copa de vino tinto",
        "price": 100,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-97",
        "name": "Brandy",
        "price": 130,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-98",
        "name": "Etiqueta roja",
        "price": 80,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-99",
        "name": "Frangelico",
        "price": 110,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-100",
        "name": "Sambuca",
        "price": 110,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-101",
        "name": "Posh",
        "price": 60,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-102",
        "name": "Posh con trufa",
        "price": 120,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      }
    ]
  },
  {
    "id": "categoria-19",
    "name": "Coctelería",
    "page": 9,
    "note": "",
    "items": [
      {
        "id": "p-103",
        "name": "Copa de Clericot",
        "price": 90,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-104",
        "name": "Jarra de Clericot",
        "price": 230,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-105",
        "name": "Mojito",
        "price": 90,
        "description": "Kiwi, fresa.",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-106",
        "name": "Mojito por litro",
        "price": 190,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-107",
        "name": "Hawaiano Azul",
        "price": 85,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-108",
        "name": "Daiquiri",
        "price": 100,
        "description": "Fresa, limón.",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-109",
        "name": "Sex on the beach",
        "price": 85,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-110",
        "name": "Tequila sunrise",
        "price": 90,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-111",
        "name": "Cielo rojo",
        "price": 105,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-112",
        "name": "Margarita",
        "price": 85,
        "description": "Limón, fresa.",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-113",
        "name": "Piña Colada",
        "price": 85,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-114",
        "name": "Sangría",
        "price": 85,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-115",
        "name": "Jarra Sangría",
        "price": 260,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-116",
        "name": "Gin Tonic",
        "price": 100,
        "description": "Clásico, fresa, pepino.",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-117",
        "name": "Mezcalina maracuyá",
        "price": 105,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      },
      {
        "id": "p-118",
        "name": "Tinto de verano",
        "price": 100,
        "description": "",
        "variants": [],
        "image": null,
        "sourcePage": 9
      }
    ]
  }
];
