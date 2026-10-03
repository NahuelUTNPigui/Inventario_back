/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "_clone_Gyq0",
        "max": 0,
        "min": 0,
        "name": "nombre",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "help": "",
        "hidden": false,
        "id": "number2078012908",
        "max": null,
        "min": null,
        "name": "lotes",
        "onlyInt": true,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      }
    ],
    "id": "pbc_3657475630",
    "indexes": [],
    "listRule": "",
    "name": "clienteslote",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n    c.id AS id,\n    c.nombre AS nombre,\n    COUNT(l.id) AS lotes\nFROM clientes c\nJOIN productos p ON c.id = p.cliente  -- Asumiendo que la FK en productos se llama cliente_id\nJOIN lotes l ON p.id = l.producto    -- Asumiendo que la FK en lotes se llama producto_id\nWHERE l.cerrado = 0\nGROUP BY c.id, c.nombre;",
    "viewRule": ""
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3657475630");

  return app.delete(collection);
})
