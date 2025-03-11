/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3225463077")

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date3359536966",
    "max": "",
    "min": "",
    "name": "Date_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3225463077")

  // remove field
  collection.fields.removeById("date3359536966")

  return app.save(collection)
})
