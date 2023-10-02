/** pegue todos os nomes da pasta temp */

(() => {
  const fs = require('fs');
  const names = fs.readdirSync('./temp');
  console.log('[');
  names.map((name) => {
    console.log(`"${name}",`);
  })
  console.log(']');
})()