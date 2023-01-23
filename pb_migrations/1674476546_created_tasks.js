migrate((db) => {
  const collection = new Collection({
    "id": "z6f9deqf9qavxom",
    "created": "2023-01-23 12:22:26.037Z",
    "updated": "2023-01-23 12:22:26.037Z",
    "name": "tasks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "79kw5oeb",
        "name": "task",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "btplhvhz",
        "name": "done",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z6f9deqf9qavxom");

  return dao.deleteCollection(collection);
})
