/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3566049674")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2963098375",
    "help": "",
    "hidden": false,
    "id": "relation1706308255",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "lote",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3566049674")

  // remove field
  collection.fields.removeById("relation1706308255")

  return app.save(collection)
})
