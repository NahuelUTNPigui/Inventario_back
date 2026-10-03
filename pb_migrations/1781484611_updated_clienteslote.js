/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3657475630")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    c.id AS id,\n    c.nombre AS nombre,\n    COUNT(l.id) AS lotes\nFROM clientes c\nJOIN productos p ON c.id = p.cliente  -- Asumiendo que la FK en productos se llama cliente_id\nJOIN lotes l ON p.id = l.producto    -- Asumiendo que la FK en lotes se llama producto_id\nWHERE l.cerrado = 0 and l.active and c.active\nGROUP BY c.id, c.nombre;"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_vdOw")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_BTs8",
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
    "viewQuery": "SELECT \n    c.id AS id,\n    c.nombre AS nombre,\n    COUNT(l.id) AS lotes\nFROM clientes c\nJOIN productos p ON c.id = p.cliente  -- Asumiendo que la FK en productos se llama cliente_id\nJOIN lotes l ON p.id = l.producto    -- Asumiendo que la FK en lotes se llama producto_id\nWHERE l.cerrado = 0 and l.active\nGROUP BY c.id, c.nombre;"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_vdOw",
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
  collection.fields.removeById("_clone_BTs8")

  return app.save(collection)
})
