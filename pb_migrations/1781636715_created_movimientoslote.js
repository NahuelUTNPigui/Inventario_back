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
        "id": "_clone_ZEwE",
        "max": 0,
        "min": 0,
        "name": "codigo",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_1541901133",
        "help": "",
        "hidden": false,
        "id": "relation89525568",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "idmovimiento",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "help": "",
        "hidden": false,
        "id": "_clone_Eza6",
        "max": "",
        "min": "",
        "name": "fecha",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "autogeneratePattern": "",
        "help": "",
        "hidden": false,
        "id": "_clone_bB2E",
        "max": 0,
        "min": 0,
        "name": "observacion",
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
        "id": "_clone_hHgh",
        "max": null,
        "min": null,
        "name": "ingreso",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "help": "",
        "hidden": false,
        "id": "_clone_xSlB",
        "name": "active",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "bool"
      },
      {
        "help": "",
        "hidden": false,
        "id": "_clone_dRj0",
        "max": null,
        "min": null,
        "name": "cantidad",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_2963098375",
        "help": "",
        "hidden": false,
        "id": "_clone_p6t1",
        "maxSelect": 0,
        "minSelect": 0,
        "name": "lote",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      }
    ],
    "id": "pbc_817169957",
    "indexes": [],
    "listRule": null,
    "name": "movimientoslote",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "select\n    d.id,\n    m.codigo,\n    m.id as idmovimiento,\n    m.fecha,\n    m.observacion,\n    m.ingreso,\n    m.active,\n    d.cantidad,\n    d.lote\nfrom detallemovimientos d\njoin movimientos m on d.movimiento = m.id\nwhere m.active",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_817169957");

  return app.delete(collection);
})
