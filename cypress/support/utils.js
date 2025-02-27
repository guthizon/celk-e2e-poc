// cy.request({
//     failOnStatusCode: false,
//     method: "POST",
//     'url': `https://slack.com/api/conversations.history`,
//     'headers': {
//         'Content-Type': 'application/json',
//         'Authorization': "Bearer xoxb-438830927618-5883545791090-W7mGFKcKahZUxolf3gkaHsf4"
//     },
//     body: {
//         "channel": "C04PTK4RBB2",
//         "limit": 3,
//         "inclusive": true
//     }
// }).then((res) => {
//     expect(res.status).eq(200);
//     expect(res.body.ok).eq(true);
// })


// const accountSid = 'AC58d0667d4aa4921a78e2aa83277415d9';
// const authToken = '221d48b298ed5f6e7b16044f49310854';

// const client = new twilio(accountSid, authToken);

// // Retrieve a list of messages
// client.messages.list()
//   .then(messages => {
//     messages.forEach(message => {
//       console.log(`Message SID: ${message.sid}`);
//       console.log(`Body: ${message.body}`);
//       console.log(`From: ${message.from}`);
//       console.log(`To: ${message.to}`);
//       console.log('---------------------');
//     });
//   })
//   .catch(error => console.error('Error fetching messages:', error));


// export function readPdf (pathToPdf) {

//   return new Promise((resolve) => {
//     const pdfPath = path.resolve(pathToPdf)
//     let dataBuffer = fs.readFileSync(pdfPath);
//     pdf(dataBuffer).then(function ({ text }) {
//       resolve(text)
//     });
//   })
// }

export function generateFictitiousName() {
  const names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Hannah", "Isaac", "Julia"];
  const lastNames = ["Smith", "Johnson", "Brown", "Davis", "Lee", "Garcia", "Martinez", "Clark", "Wang", "Lopez"];

  // Function to generate a random string of characters
  function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomCharacters = generateRandomString(5); // Change the number to desired length

  return [randomName, randomCharacters, randomLastName];
}

export function generateRandomNumber() {
  return Math.floor(100000 + Math.random() * 9000000);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generatePhoneNumber() {
  const min = 12000000000;
  const max = 12999999999;
  const random13DigitNumber = getRandomNumber(min, max).toString();
  return random13DigitNumber;
}

export function dateToString(data) {
  let month = String(data.getMonth() + 1).padStart(2, '0');
  let day = String(data.getDate()).padStart(2, '0');
  let year = data.getFullYear();
  return `${month}-${day}-${year}`;
}

export function getTodayDate(monthFirst = false) {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  if (monthFirst) {
    return `${month}${day}${year}`;

  } else {
    return `${day}${month}${year}`;
  }
}

export function getTodayMonthAndYear(monthFirst = false) {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();

  if (monthFirst) {
    return `${month}${year}`;

  } else {
    return `${month}${year}`;
  }
}


