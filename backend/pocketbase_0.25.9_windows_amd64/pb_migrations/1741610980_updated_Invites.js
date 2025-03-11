/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1569729562")

  // update collection data
  unmarshal({
    "name": "Invite"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1569729562")

  // update collection data
  unmarshal({
    "name": "Invites"
  }, collection)

  return app.save(collection)
})
