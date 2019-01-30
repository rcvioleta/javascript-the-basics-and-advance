const someText = 'In case of fire dial 192-168-1010 or 168.254.1234. Also you can call the fire department head at (082)567-6789.';
const regex = /\(?(\d{3})[-.)]\d{3}[-.]\d{4}/g;

let result = undefined;
while (result = regex.exec(someText)) {
    console.log(result[1]);
}