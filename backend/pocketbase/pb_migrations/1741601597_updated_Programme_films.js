/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_461325450")

  // add field
  collection.fields.addAt(14, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3094223700",
    "maxSize": 0,
    "name": "Duree_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_461325450")

  // remove field
  collection.fields.removeById("editor3094223700")

  return app.save(collection)
})
