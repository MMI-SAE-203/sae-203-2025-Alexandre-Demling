/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3225463077")

  // update collection data
  unmarshal({
    "name": "activite"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3225463077")

  // update collection data
  unmarshal({
    "name": "Programme_activites"
  }, collection)

  return app.save(collection)
})
