/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_461325450")

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "date543929717",
    "max": "",
    "min": "",
    "name": "Date_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_461325450")

  // remove field
  collection.fields.removeById("date543929717")

  return app.save(collection)
})
