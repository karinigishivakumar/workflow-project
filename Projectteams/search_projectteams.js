exports.search_projectteam = async (event, context, callback) => {

    const { Client } = require('pg');

    const client = new Client({
        host: "localhost",
        port: "5432",
        database: "workflow",
        user: "postgres",
        password: "Shiva420"
    });
    client.connect();
    
    let data = {};
    
    if ( event.queryStringParameters) {
        data =  event.queryStringParameters;
    }
    
    const filters = data;
    
    let keysArr = Object.keys(filters);
    let valueArr = Object.values(filters);
    let abc;
    
    let objReturn = {
        code: 200,
        message: "projectteam search successfully",
        type: "object",
        object: []
    };

    try {
        if (JSON.stringify(data) === '{}') {

            abc = await client.query(`SELECT * FROM projectteam`);
        } else if (data.id) {

            abc = await client.query(`SELECT * FROM projectteam WHERE id=$1`, [data.id]);
        }
        else {

            for (let item of keysArr) {

                abc = await client.query(`SELECT * FROM projectteam WHERE details->$1 @> $2`, [item, JSON.stringify(valueArr[keysArr.indexOf(item)])]);
            }

        }
        objReturn.object = abc.rows;
        client.end();

       
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin":"*"
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
                "Access-Control-Allow-Origin":"*"
            },
            "body": JSON.stringify(objReturn) 
        };

    }

};