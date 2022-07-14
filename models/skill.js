const skills = [
    {id: 5545, skill: 'Javascript', done: true},
    {id: 3321, skill: 'CSS', done: false},
    {id: 2123, skill: 'HTML', done: true}
]
module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }
  

function getAll () {
    return skills;
}
