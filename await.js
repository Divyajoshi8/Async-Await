
console.log('Person1 : Show tickets');
console.log('Person2 : Show tickets');
const preMovie = async () => {

    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000)
    });
const getPopcorn = new Promise((resolve, reject) => resolve (`popcorn`));
const addButter = new Promise((resolve, reject) => resolve (`butter`));
const addColdDrinks = new Promise((resolve, reject) => resolve (`ColdDrinks`));
   let ticket = await promiseWifeBringingTickets;

    console.log(`wife: i have ${ticket}`);
    console.log('husband: We should go in');
    console.log('wife: No i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: We should go in');
    console.log('wife: No i need butter on popcorn');

    let butter = await addButter;

    console.log(`husband: i got some ${butter}`);
    console.log('husband: Anything else ?');
    console.log('wife: i want cold drinks');

    let ColdDrinks = await addColdDrinks;

    console.log(`husband: i got some ${ColdDrinks}`);
    console.log('husband: Anything else ?');
    console.log('wife: lets go to the movie');

   return ticket;
}
preMovie().then((m) => console.log(`Person3: show ${m}`));                                              
console.log('Person4 : Show tickets');
console.log('Person5 : Show tickets');