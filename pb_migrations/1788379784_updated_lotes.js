/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2963098375")

  // add field
  collection.fields.addAt(15, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3566049674",
    "help": "",
    "hidden": false,
    "id": "relation2752446503",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "detallemovimiento",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2963098375")

  // remove field
  collection.fields.removeById("relation2752446503")

  return app.save(collection)
})
