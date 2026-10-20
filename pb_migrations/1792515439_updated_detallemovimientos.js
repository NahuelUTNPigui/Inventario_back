/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3566049674")

  // remove field
  collection.fields.removeById("bool1784012370")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3566049674")

  // add field
  collection.fields.addAt(11, new Field({
    "help": "",
    "hidden": false,
    "id": "bool1784012370",
    "name": "pendiente",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
