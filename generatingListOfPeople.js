export const manuallyGeneratingListOfPeople = () => {
  // Manually generating the list of people
  const testObject = {
    person1: {
      name: 'Ren',
      age: '28',
    },
    person2: {
      name: 'Kim',
      age: '26',
    },
  };
  const {
    person1: { name: person1Name, age: person1Age },
    person2: { name: person2Name, age: person2Age },
  } = testObject;
  const list2 = document.createElement('ul');
  list2.id = 'personList';
  const person1Item = document.createElement('li');
  person1Item.innerText = `${person1Name} is ${person1Age} years old`;
  list2.appendChild(person1Item);
  const person2Item = document.createElement('li');
  person2Item.innerText = `${person2Name} is ${person2Age} years old`;
  list2.appendChild(person2Item);
  const body = document.querySelector('body');
  body.appendChild(list2);
};

export const automaticallyGeneratingListOfPeople = () => {
  // Automatically generating the list of people
  const testObject = {
    person1: {
      name: 'Ren',
      age: '28',
    },
    person2: {
      name: 'Kim',
      age: '26',
    },
  };

  const body = document.querySelector('body');
  const personList = document.createElement('ol');
  body.appendChild(personList);
  personList.id = 'personList';
  for (const person in testObject) {
    const personItem = document.createElement('li');
    const { name, age } = testObject[person];
    personItem.innerText = `${name} is ${age} years old`;
    personItem.id = `${name}_${age}`;
    personList.appendChild(personItem);
  }
};
