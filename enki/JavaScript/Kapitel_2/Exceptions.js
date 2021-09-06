try {
    throw "ERROR"; // Wirft dieses Objekt: String mit "ERROR"
} catch(e) {
    console.log(e);
} finally {
    console.log("Alles geklärt");
}

