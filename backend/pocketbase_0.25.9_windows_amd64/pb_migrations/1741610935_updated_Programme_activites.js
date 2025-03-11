/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3225463077")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3337894172",
    "max": 0,
    "min": 0,
    "name": "Type_activite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
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

  // add field
  collection.fields.addAt(3, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor3706144822",
    "maxSize": 0,
    "name": "Lieu_activite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text398124858",
    "max": 0,
    "min": 0,
    "name": "Description_activite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3225463077")

  // remove field
  collection.fields.removeById("text3337894172")

  // remove field
  collection.fields.removeById("date3359536966")

  // remove field
  collection.fields.removeById("editor3706144822")

  // remove field
  collection.fields.removeById("text398124858")

  return app.save(collection)
})
