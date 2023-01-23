migrate((db) => {
  const collection = new Collection({
    "id": "iu0f0wmu4dqiq01",
    "created": "2023-01-23 12:32:15.259Z",
    "updated": "2023-01-23 12:32:15.259Z",
    "name": "users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bowjcakt",
        "name": "email",
        "type": "email",
        "required": true,
        "unique": true,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "7svddeai",
        "name": "password",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
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
  const collection = dao.findCollectionByNameOrId("iu0f0wmu4dqiq01");

  return dao.deleteCollection(collection);
})
