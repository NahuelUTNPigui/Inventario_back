/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3566049674")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_279994318",
    "help": "",
    "hidden": false,
    "id": "relation4095515429",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "cliente",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3566049674")

  // remove field
  collection.fields.removeById("relation4095515429")

  return app.save(collection)
})
