// let test = '';
// for (let i = 0; i < 9; i++) {
//   if (i === 4) {
//     break;
//   }
//   test = test + i;
// }
// console.log(test);
// for (let i = 0; i < 100; i++) {
//   if (i === 3) {
//     console.log('Another console statement');
//   } else {
//     console.log('I Love You Di Karuva');
//   }
// }
// let x = 'Bhagavth is my name';
// let ords = x.split(' ');
// console.log(ords);
// let tx = 'Bhagavth is my name';
// let ed = [];
// for (let i = 0; i < tx.length; i++) {
//   ed.push(tx[i]);
// }
// let reversedString = ed.reverse().join('');

// console.log(reversedString);

class Pro {
  constructor() {
    this.pizza = 'Hi Pizza';
  }
  bake() {
    return console.log(`${this.pizza}`);
  }
}

const myPro = new Pro();

class My extends Pro {
  constructor(medium) {
    super(medium);
    this.pizza = 'New';
    this.medium = medium;
  }
  nw() {
    return console.log(`${this.medium}`);
  }
}
const MYY = new My('Nj');
MYY.nw();
