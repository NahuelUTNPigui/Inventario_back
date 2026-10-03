/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2963098375")

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2168577384",
    "help": "",
    "hidden": false,
    "id": "relation2805567879",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "destinatario",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text3203328542",
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
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text1706308255",
    "max": 0,
    "min": 0,
    "name": "lote",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2963098375")

  // remove field
  collection.fields.removeById("relation2805567879")

  // remove field
  collection.fields.removeById("text3203328542")

  // remove field
  collection.fields.removeById("text1706308255")

  return app.save(collection)
})
