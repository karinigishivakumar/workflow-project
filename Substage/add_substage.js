exports.add_substage = async (event, context, callback) => {


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
        message: "substage added successfully",
        type: "object",
        object: []
    };

    // console.log(event.body == null, event.body, JSON.stringify(event.body) == "{}")
    try {

        if (JSON.stringify(event) == '{}') {

            objReturn.code = 400
            objReturn.message = "body is null"
            client.end();

            return {
                "statusCode": 400,
                "headers": {
                    "Access-Control-Allow-Origin": "*"
                },
                "body": JSON.stringify(objReturn)
            };

        } else {
            const res = await client.query(`insert into substage ("details") VALUES ($1::jsonb)`, [event]);

        }

        client.end();
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*"
            },
            "body": JSON.stringify(objReturn)
        };

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