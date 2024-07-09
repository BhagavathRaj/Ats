class Pizza {
  constructor(typepizza) {
    this.type = typepizza;
  }
  bake() {
    return console.log('Hi there ' + this.type);
  }
}

const mypizza = new Pizza('Hell');
mypizza.type = 'Pizza2';
mypizza.bake();

const obj1 = {
  id: 1,
  name: 'Bhagavath',
  form: function (para) {
    return console.log('formula testing' + para);
  },
};
const ob2 = { ...obj1 };
ob2.form('hi');
console.log(ob2);

for (let i = 0; i < 4; i++) {
  return console.log('increment' + i);
}

function remove(id){
    return (prev=>prev.filter(i=>i.id!==id))
}