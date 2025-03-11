/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_461325450")

  // remove field
  collection.fields.removeById("date1886527766")

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "number1886527766",
    "max": null,
    "min": null,
    "name": "Anne_film",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_461325450")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date1886527766",
    "max": "",
    "min": "",
    "name": "Anne_film",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // remove field
  collection.fields.removeById("number1886527766")

  return app.save(collection)
})
