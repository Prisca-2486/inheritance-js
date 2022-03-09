console.log('This is inheritance');

/* INHERITANCE:-

Process where one class acquires properties (methods and fields) from another class.

Parent---->child
super----->sub
base------>derived
*/

class Car{

    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log('Engine startes for ' + this.name);
    }

    stopEngine(){
        console.log('Engine stopped for ' + this.name);
    }
}

class Toyota extends Car{
    
    topSpeed(speed){
        console.log('Top speed for ' + this.name + ' is ' + speed);
    }
    
}

const myCar = new Toyota();
myCar.setName('Maruti');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(150);