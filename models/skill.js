const skills = [
    {id: 554512, skill: 'Javascript', done: true},
    {id: 332132, skill: 'CSS', done: false},
    {id: 212311, skill: 'HTML', done: true}
]
module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteSkill,
    update
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

function create (skill) {
  skill.id = Date.now() & 1000000;
  skill.done = false;
  skills.push(skill);
}
function deleteSkill (id) {
  id = parseInt(id);
  const skillIdx = skills.findIndex( (skill) => skill.id === id)
  skills.splice(skillIdx, 1);
}
function update (id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find( (skill) => skill.id === id);
  Object.assign(skill, updatedSkill);
}