/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1569729562")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text141593680",
    "max": 0,
    "min": 0,
    "name": "Nom_invite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1269543700",
    "max": 0,
    "min": 0,
    "name": "Prenom_invite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3931668145",
    "max": 0,
    "min": 0,
    "name": "Role_invite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file2322381831",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "Photo_invite",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "email2722699487",
    "name": "Email_invite",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3308415637",
    "max": 0,
    "min": 0,
    "name": "Biographie_invite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1569729562")

  // remove field
  collection.fields.removeById("text141593680")

  // remove field
  collection.fields.removeById("text1269543700")

  // remove field
  collection.fields.removeById("text3931668145")

  // remove field
  collection.fields.removeById("file2322381831")

  // remove field
  collection.fields.removeById("email2722699487")

  // remove field
  collection.fields.removeById("text3308415637")

  return app.save(collection)
})
