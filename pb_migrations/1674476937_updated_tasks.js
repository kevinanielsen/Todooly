migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z6f9deqf9qavxom")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cbpypoff",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z6f9deqf9qavxom")

  // remove
  collection.schema.removeField("cbpypoff")

  return dao.saveCollection(collection)
})
