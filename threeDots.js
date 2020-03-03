const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);

//it will be a dynamic array
// const allAges2 = [ages, ages2, 5, ages3];

const allAges3 = [...ages, ...ages2, 5, ...ages3];

// console.log(allAges3);



const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];
// const maximum = Math.max(business, minister, sochib);


// const maximum1 = Math.max(takaPoisa);
const maximum1 = Math.max(...takaPoisa);
console.log(maximum1);