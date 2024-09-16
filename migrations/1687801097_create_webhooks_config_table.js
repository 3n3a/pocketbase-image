migrate((db) => {
    // up
    const dao = new Dao(db);
    // Create Webhooks collection
    const webhookCollection = new Collection({
        // id autogenerated
        name: "webhook",
        type: "base",
        listRule: null, // null = admin only
        viewRule: null,
        createRule: null,
        updateRule: null,
        deleteRule: null,
        schema: [
            {
                name: "name",
                type: "text",
                required: true,
                options: {
                    max: 100,
                },
            },
            {
                name: "url",
                type: "text",
                required: true,
            },
            {
                name: "collection",
                type: "text",
                required: true,
            },
            {
                name: "trigger",
                type: "text",
                required: true,
            },
            {
                name: "request_method",
                type: "text",
                required: true,
            },
            {
                name: "request_body",
                type: "text",
                required: true,
            },
        ],
        indexes: [
        ],
        options: {}
    })
    dao.saveCollection(webhookCollection);
}, (db) => {
    // down
    const dao = new Dao(db);

    try {
        const webhookCollection = dao.findCollectionByNameOrId("webhook")
        dao.deleteCollection(webhookCollection)
    } catch (_) {
        /* most likely already gone */
    }
})