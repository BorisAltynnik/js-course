/*
var bills = [124, 48, 268, 180, 42];

var tipCalculator  = function(bill){
    if (bill <= 50) {
        return bill*0.2;
    }
    else if (bill>50 && bill<= 200){
        return bill*0.15;
    }
    else if (bill>200){
        return bill*0.1;
    }
}

var tips = [];
var amoutToBePaid = [];

for (var i=0; i<bills.length;i++){
    tips[i] = tipCalculator(bills[i]);
    amoutToBePaid[i]= bills[i] + tips[i];
}

console.log(tips,amoutToBePaid)

*/
/*
var John = {
    
    fullName: 'Huanmyhuan',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    amoutToBePaid: [],
    calcTips: function(){
        for (var i=0; i <this.bills.length;i++){
            bill = this.bills[i]; 
            if (bill <= 50) {
                this.tips[i] = bill * .2 ;
                this.amoutToBePaid[i] = bill + this.tips[i];
            }
            else if (bill>50 && bill<= 200){
                this.tips[i] = bill * .15 ;
                this.amoutToBePaid[i] = bill + this.tips[i];
            
            }
            else if (bill>200){
                this.tips[i] = bill * .1 ;
                this.amoutToBePaid[i] = bill + this.tips[i];  
            }
        }

    }
    
    
}
John.calcTips();
console.log(John.tips, John.amoutToBePaid);
*/

var dog = {
    name : 'good boy',
    sex : 'unisex',
    nickName: 'Jack'
}

dog.age = 12
console.log(dog.age)