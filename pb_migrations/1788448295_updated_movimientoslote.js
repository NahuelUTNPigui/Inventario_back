/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_817169957")

  // update collection data
  unmarshal({
    "viewQuery": "select\n    d.id,\n    m.codigo,\n    m.id as idmovimiento,\n    m.fecha,\n    m.observacion,\n    m.ingreso,\n    m.active,\n    d.cantidad,\n    d.lote,\n\td.eliminado\nfrom detallemovimientos d\njoin movimientos m on d.movimiento = m.id\nwhere m.active"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_Rg2X")

  // remove field
  collection.fields.removeById("_clone_4c6G")

  // remove field
  collection.fields.removeById("_clone_iJi1")

  // remove field
  collection.fields.removeById("_clone_60tH")

  // remove field
  collection.fields.removeById("_clone_SLFo")

  // remove field
  collection.fields.removeById("_clone_lD1C")

  // remove field
  collection.fields.removeById("_clone_RHH7")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_kOKM",
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
    "id": "_clone_JYQj",
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
    "id": "_clone_zA6Q",
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
    "id": "_clone_u5cP",
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
    "id": "_clone_mLkB",
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
    "id": "_clone_uz1v",
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
    "id": "_clone_fDeo",
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
    "id": "_clone_GVZl",
    "name": "eliminado",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_817169957")

  // update collection data
  unmarshal({
    "viewQuery": "select\n    d.id,\n    m.codigo,\n    m.id as idmovimiento,\n    m.fecha,\n    m.observacion,\n    m.ingreso,\n    m.active,\n    d.cantidad,\n    d.lote\nfrom detallemovimientos d\njoin movimientos m on d.movimiento = m.id\nwhere m.active"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "_clone_Rg2X",
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
    "id": "_clone_4c6G",
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
    "id": "_clone_iJi1",
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
    "id": "_clone_60tH",
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
    "id": "_clone_SLFo",
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
    "id": "_clone_lD1C",
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
    "id": "_clone_RHH7",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "lote",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("_clone_kOKM")

  // remove field
  collection.fields.removeById("_clone_JYQj")

  // remove field
  collection.fields.removeById("_clone_zA6Q")

  // remove field
  collection.fields.removeById("_clone_u5cP")

  // remove field
  collection.fields.removeById("_clone_mLkB")

  // remove field
  collection.fields.removeById("_clone_uz1v")

  // remove field
  collection.fields.removeById("_clone_fDeo")

  // remove field
  collection.fields.removeById("_clone_GVZl")

  return app.save(collection)
})
