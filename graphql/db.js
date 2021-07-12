export const people = [{
    id: "1",
    name: "chanhwi",
    age: 26,
    gender: "male"
},
{
    id: "2",
    name: "noru",
    age: 26,
    gender: "female"
},
{
    id: "3",
    name: "mingming",
    age: 26,
    gender: "hybrid"
},
{
    id: "4",
    name: "backgu",
    age: 26,
    gender: "male"
}]

export const getById = id => {
     const filteredPeople = people.filter(person => String(id) === String(person.id));
     return filteredPeople[0];
}