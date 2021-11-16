const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomFloat = (min, max, fixed) => {
  return (Math.random() * (max - min) + min).toFixed(fixed);
};

function Person(fullName, age, email, gender, height, weight, address) {
    this.fullName = fullName;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.address = address;
    
    // caculate BMI method
    this.caculateBMI = () => {
      return (this.weight / Math.pow(this.height, 2))
    };
    
    // guess health method
    this.guessHealth = () => {
      const BMI = this.caculateBMI();
    
      if (BMI < 18.5) {
        return "underweight";
      } 
  
      if (BMI >= 18.5 && BMI <= 24.9) {
        return "normal weight"
      }
  
      if (BMI > 24.9 && BMI <= 29.9) {
        return "over weight"
      }
  
      return "obesity";
    };    
  
  };

    const personArr = [];
    const limit = 10;
    const genders = ["male" , "female" , "others"];
    const height = [1.52, 1.75, 1.65, 1.77, 1.64, 1.70, 1.80, 1.95, 1.88, 1.59];  
    const weight = [54.1, 52.2, 55.6, 55.7, 58.5, 60.5, 70.4, 62.3, 65.4, 66.6];
    const address = [ "abc", "xyz", "cde"];
    
    for (let count = 0; count < limit; count++) {
        const randomNum = Math.round(Math.random() * 1000);
        const person = new Person(
        `person_${randomNum}`,
        Math.round(Math.random() * 70),
        `person_${randomNum}@gmail.com`,
        genders[Math.round(Math.random() * 2)],
        height[Math.round(Math.random() * 8)],
        weight[Math.round(Math.random() * 8)],
        address[Math.round(Math.random() * 3)]
      );
      personArr.push(person);
    }
    
    const createPersonsArr = () => {
      return personArr.map((obj) => {
      obj.BMI = obj.calculateBMI().toFixed(2);
      obj.health = obj.guessHealth();
      return obj;
    });
  };