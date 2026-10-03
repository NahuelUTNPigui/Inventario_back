/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3657475630")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    c.id AS id,\n    c.nombre AS nombre,\n    COUNT(l.id) AS lotes\nFROM clientes c\n-- 1. LEFT JOIN para asegurar que se traigan todos los clientes, tengan producto o no\nLEFT JOIN productos p ON c.id = p.cliente  \n-- 2. LEFT JOIN para traer lotes, pero aplicando los filtros AQUÍ dentro del ON\nLEFT JOIN lotes l ON p.id = l.producto  \n                  AND l.cerrado = 0 \n                  AND l.active = TRUE   -- Asumiendo que 'active' es booleano o 1/0\nWHERE c.active = TRUE                   -- El filtro del cliente sí va en WHERE porque queremos excluir clientes inactivos totalmente\nGROUP BY c.id, c.nombre;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_HjRm")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_z91s",
    "max": 0,
    "min": 0,
    "name": "nombre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3657475630")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    c.id AS id,\n    c.nombre AS nombre,\n    COUNT(l.id) AS lotes\nFROM clientes c\nJOIN productos p ON c.id = p.cliente  \nJOIN lotes l ON p.id = l.producto  \nWHERE l.cerrado = 0 and l.active and c.active\nGROUP BY c.id, c.nombre;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_HjRm",
    "max": 0,
    "min": 0,
    "name": "nombre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("_clone_z91s")

  return app.save(collection)
})
