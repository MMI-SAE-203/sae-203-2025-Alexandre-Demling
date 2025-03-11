/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_461325450")

  // update collection data
  unmarshal({
    "name": "film"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_461325450")

  // update collection data
  unmarshal({
    "name": "Programme_films"
  }, collection)

  return app.save(collection)
})
