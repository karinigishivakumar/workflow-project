exports.upadte_stage = async (event, context, callback) => {
    const id = event.pathParameters.id

    event = JSON.parse(event.body)

    const { Client } = require('pg');

    const client = new Client({
        host: "localhost",
        port: "5432",
        database: "workflow",
        user: "postgres",
        password: "Shiva420"
    });

    client.connect();

    let objReturn = {
        code: 200,
        message: "stage successfully updated",
        type: "object",
        object: []
    };

    try {

        if (id) {

            const res = await client.query(`UPDATE stage SET details= $1::jsonb WHERE id = $2`, [event, id]);

            if (res.rowCount == 1) {

                return {
                    "statusCode": 200,
                    "headers": {
                        "Access-Control-Allow-Origin": "*"
                    },
                    "body": JSON.stringify(objReturn)
                };

            } else {

                objReturn.code = 404;
                objReturn.message = "id does not exist";

                client.end();
                return {
                    "statusCode": 404,
                    "headers": {
                        "Access-Control-Allow-Origin": "*"
                    },
                    "body": JSON.stringify(objReturn)
                };
            }

        } else {

            objReturn.code = 404;
            objReturn.message = "input json must have an 'id' field";

            client.end();
            return {
                "statusCode": 404,
                "headers": {
                    "Access-Control-Allow-Origin": "*"
                },
                "body": JSON.stringify(objReturn)
            };
        }

    } catch (e) {

        objReturn.code = 400;
        objReturn.message = e;
        client.end();
        return {
            "statusCode": 400,
            "headers": {
                "Access-Control-Allow-Origin": "*"
            },
            "body": JSON.stringify(objReturn)
        };
    }


};