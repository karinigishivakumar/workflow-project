exports.delete_substage = async (event, context, callback) => {

    event = event.pathParameters

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
        message: "substage delete successfully",
        type: "object",
        object: []
    };

    try {
        if (event.id) {

            const res = await client.query(`DELETE FROM substage WHERE id = $1`, [event.id]);

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