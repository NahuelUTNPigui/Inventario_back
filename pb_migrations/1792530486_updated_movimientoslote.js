/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_817169957")

  // update collection data
  unmarshal({
    "viewQuery": "select\n    d.id,\n    m.codigo,\n    m.id as idmovimiento,\n    m.fecha,\n    m.observacion,\n    m.ingreso,\n    m.active,\n    d.cantidad,\n    d.lote,\n\td.eliminado,\n\td.remito,\n\td.pendiente\nfrom detallemovimientos d\njoin movimientos m on d.movimiento = m.id\nwhere m.active"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_b4Tx")

  // remove field
  collection.fields.removeById("_clone_ic0t")

  // remove field
  collection.fields.removeById("_clone_0CPU")

  // remove field
  collection.fields.removeById("_clone_tDaC")

  // remove field
  collection.fields.removeById("_clone_hoNn")

  // remove field
  collection.fields.removeById("_clone_wesz")

  // remove field
  collection.fields.removeById("_clone_S24p")

  // remove field
  collection.fields.removeById("_clone_F6L2")

  // remove field
  collection.fields.removeById("_clone_9JWe")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_ZNT7",
    "max": 0,
    "min": 0,
    "name": "codigo",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_lqEH",
    "max": "",
    "min": "",
    "name": "fecha",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_kBiR",
    "max": 0,
    "min": 0,
    "name": "observacion",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_MxPF",
    "max": null,
    "min": null,
    "name": "ingreso",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_rLRF",
    "name": "active",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_DmWs",
    "max": null,
    "min": null,
    "name": "cantidad",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2963098375",
    "help": "",
    "hidden": false,
    "id": "_clone_i0Oc",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "lote",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_3xFI",
    "name": "eliminado",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_Ad4d",
    "max": 0,
    "min": 0,
    "name": "remito",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_QViv",
    "max": null,
    "min": null,
    "name": "pendiente",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_817169957")

  // update collection data
  unmarshal({
    "viewQuery": "select\n    d.id,\n    m.codigo,\n    m.id as idmovimiento,\n    m.fecha,\n    m.observacion,\n    m.ingreso,\n    m.active,\n    d.cantidad,\n    d.lote,\n\td.eliminado,\n\td.remito\nfrom detallemovimientos d\njoin movimientos m on d.movimiento = m.id\nwhere m.active"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_b4Tx",
    "max": 0,
    "min": 0,
    "name": "codigo",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_ic0t",
    "max": "",
    "min": "",
    "name": "fecha",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_0CPU",
    "max": 0,
    "min": 0,
    "name": "observacion",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_tDaC",
    "max": null,
    "min": null,
    "name": "ingreso",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_hoNn",
    "name": "active",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_wesz",
    "max": null,
    "min": null,
    "name": "cantidad",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2963098375",
    "help": "",
    "hidden": false,
    "id": "_clone_S24p",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "lote",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "help": "",
    "hidden": false,
    "id": "_clone_F6L2",
    "name": "eliminado",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_9JWe",
    "max": 0,
    "min": 0,
    "name": "remito",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("_clone_ZNT7")

  // remove field
  collection.fields.removeById("_clone_lqEH")

  // remove field
  collection.fields.removeById("_clone_kBiR")

  // remove field
  collection.fields.removeById("_clone_MxPF")

  // remove field
  collection.fields.removeById("_clone_rLRF")

  // remove field
  collection.fields.removeById("_clone_DmWs")

  // remove field
  collection.fields.removeById("_clone_i0Oc")

  // remove field
  collection.fields.removeById("_clone_3xFI")

  // remove field
  collection.fields.removeById("_clone_Ad4d")

  // remove field
  collection.fields.removeById("_clone_QViv")

  return app.save(collection)
})
