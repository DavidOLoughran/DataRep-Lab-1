class BMI{
    //Constructor to read in height and weight
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
    //Calculates BMI based on height and Weight
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }

}
//Assigns height and weight for instance myBMI, logs calculated BMI in console
let myBMI = new BMI(2, 90);
console.log(myBMI.calculateBMI());