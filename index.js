console.log('Peron1 : Show tickets');
console.log('Peron2 : Show tickets');
const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket');
    }, 3000)
});

promiseWifeBringingTickets.then((t) => {

    console.log(`Person 3: shows ${t}`);
});
console.log('Peron4 : Show tickets');
console.log('Peron5 : Show tickets');