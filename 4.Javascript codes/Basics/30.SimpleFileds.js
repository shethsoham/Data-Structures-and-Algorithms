// write a concise objects literal declaration using simple fields

const createPerson = (name,age,gender) => {

    return {
        name:name,
        age: age,
        gender: gender
    };
};

console.log(createPerson("SOham","23","male"))

const createPerson1 = (name,age,gender) => ({name,age,gender})
console.log(createPerson1("John","33","female"))