const readFileSync = require("fs").readFileSync;

const wasmCode = readFileSync('./genKey.wasm');
const encoded = Buffer.from(wasmCode, "binary").toString("base64");
console.log(encoded)
