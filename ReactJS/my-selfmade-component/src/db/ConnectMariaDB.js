const mariaDB = require('mysql');

// Global variable to use database
var pool = mariaDB.createConnection({
    host: '172.19.0.3',
    user: 'root',
    password: 'root-laundryOrder',
    database: "laundryorders",
    connectionLimit: 5
});

//~ Connect & Disconnect services
/**
 * Connects to database
 * @throws throws as error if connection is not established
 */
async function connectDatabase() {
    pool.connect(function(err) {
        if (err) throw err; // throws error if connect goes wrong
        console.log("Successfully connected to Database");
    });
}

/**
 * Disconnect to database
 */
function disconnectDatabase() {
    pool.end();
    console.log("Successfully disconnected from database");
}


//~ SELECT data services
function getEntrys(querryCommand) {
    pool.query(querryCommand, function (err, result, fields) {
        if (err) throw err; // throws error if query goes wrong
        console.log(result);
    });
}

//~ INSERT data services
/**
 * Insert entry into Reservation database
 * @param {JSON} entry - The whole entry as JSON object
 */
 function insertEntry(entry) {
    let databaseName = "Reservations";
    let reservationEntry;
    //pool.ins
}

//~ Additional services
/**
 * Builds querry string
 * @param {String} opt_one - INSERT, SELECT, DELETE or UPDATE 
 * @param {String} opt_two - Second option
 * @param {String} opt_three - Third option 
 * @param {String} opt_four - Fourthd option 
 * @returns {String} querryCall - Querry command
 */
function buildQuerryCall(opt_one, opt_two, opt_three, opt_four) {
    opt_one = opt_one || "SELECT";
    opt_two = opt_two || "*";
    opt_three = opt_three || "FROM";
    opt_four = opt_four || "Reservations";
    return opt_one + " " + opt_two + " " + opt_three + " " + opt_four;
}

/**
 * Create a entry as JSON object
 * @param {SMALLINT} roomNumber - Number of Room
 * @param {String} firstName - First name
 * @param {String} lastName - Sure name
 * @param {String} eMail - E-Mail address
 * @param {DateTime} dateTime - Date and Time
 * @param {TINYINT} machine - Machine number 
 * @returns {JSON} insertEntry - Created object
 */
function createEntry(roomNumber, firstName, lastName, eMail, dateTime, machine) {
    let insertEntry = {
        RoomNumber: roomNumber,
        FirstName: firstName,
        LastName: lastName,
        Email: eMail,
        DateTime: dateTime,
        Machine: machine
    };
    console.log("Insert created: " + insertEntry);
    return insertEntry;
}


/*
let myPromise = new Promise((myResolve, myReject) => {
// "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject(); // when error
});

myPromise.then(
    
    // code if successful
    function(value) { 
        console.log("Promise was successfull");
    },

    // code if some error
    function(error) { 
        console.log("Promise was successfull");
    }
);
*/


connectDatabase();
let sqlCommand = buildQuerryCall();
getEntrys(buildQuerryCall());
disconnectDatabase();
console.log(createEntry(1, "1", "1", 1, "1111-11-11T11:11:11.111Z", 1));