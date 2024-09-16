//
// There is no support for functions as of yet
// only via modules, but i was tired.

// fires for every collection
onRecordAfterCreateRequest((e) => {
    var collectionName = e.collection.name
    var collectionTrigger = "create"
    if (collectionName != "webhook") {
        const result = arrayOf(new DynamicModel({
            "name": "",
            "url": "",
            "trigger": "",
            "request_method": "",
            "request_body": "",
        }))
        $app.dao().db()
            .select("name", "url", "trigger", "request_method", "request_body")
            .from("webhook")
            .where($dbx.hashExp({
                collection: collectionName,
                trigger: collectionTrigger,
            }))
            .all(result)

        for (const webhook of result) {
            console.log("[TRIGGER] Webhook '" + webhook.name + "', event: " + "CREATE")
            try {
                const res = $http.send({
                    url: webhook.url,
                    method: webhook.request_method,
                    body: webhook.request_body,
                    headers: { "content-type": "application/json" },
                    timeout: 5, // in seconds
                })
            } catch (err) {
                console.log("[FAILED] Webhook '" + webhook.name + "', event: " + "CREATE", err)
            }
        }
    }
})

// fires for every collection
onRecordAfterUpdateRequest((e) => {
    var collectionName = e.collection.name
    var collectionTrigger = "update"
    if (collectionName != "webhook") {
        const result = arrayOf(new DynamicModel({
            "name": "",
            "url": "",
            "trigger": "",
            "request_method": "",
            "request_body": "",
        }))
        $app.dao().db()
            .select("name", "url", "trigger", "request_method", "request_body")
            .from("webhook")
            .where($dbx.hashExp({
                collection: collectionName,
                trigger: collectionTrigger,
            }))
            .all(result)

        for (const webhook of result) {
            console.log("[TRIGGER] Webhook '" + webhook.name + "', event: " + "CREATE")
            try {
                const res = $http.send({
                    url: webhook.url,
                    method: webhook.request_method,
                    body: webhook.request_body,
                    headers: { "content-type": "application/json" },
                    timeout: 5, // in seconds
                })
            } catch (err) {
                console.log("[FAILED] Webhook '" + webhook.name + "', event: " + "CREATE", err)
            }
        }
    }
})

// fires for every collection
onRecordAfterDeleteRequest((e) => {
    var collectionName = e.collection.name
    var collectionTrigger = "delete"
    if (collectionName != "webhook") {
        const result = arrayOf(new DynamicModel({
            "name": "",
            "url": "",
            "trigger": "",
            "request_method": "",
            "request_body": "",
        }))
        $app.dao().db()
            .select("name", "url", "trigger", "request_method", "request_body")
            .from("webhook")
            .where($dbx.hashExp({
                collection: collectionName,
                trigger: collectionTrigger,
            }))
            .all(result)

        for (const webhook of result) {
            console.log("[TRIGGER] Webhook '" + webhook.name + "', event: " + "CREATE")
            try {
                const res = $http.send({
                    url: webhook.url,
                    method: webhook.request_method,
                    body: webhook.request_body,
                    headers: { "content-type": "application/json" },
                    timeout: 5, // in seconds
                })
            } catch (err) {
                console.log("[FAILED] Webhook '" + webhook.name + "', event: " + "CREATE", err)
            }
        }
    }
})