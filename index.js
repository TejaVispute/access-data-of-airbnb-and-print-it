const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://Tejas:Tejas123@airbnb.gh86ace.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
        // await listDatabases(client);
        await FindData(client);
        
    } catch (e) {
        console.log(e);
    }
    //   finally {
    //      await client.close();
    //  }
}

async function FindData(client) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").find();
    console.log("found Data " + result[0].name);
    // result.forEach(element => {
    //     console.log(element);
    // });

}


// async function listDatabases(client) {
//     dblist = await client.db().admin().listDatabases();
//     console.log("Available databases: ");

//     dblist.databases.forEach(element => {
//         console.log(`${element.name}`)
//     });


// }

main().catch(err => console.err);





// https://github.com/aquibtestbook/FSD-Batch-2/tree/main/Playing%20with%20MongoDB