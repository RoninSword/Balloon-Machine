/**
 * Test 1:  Total 50 marks
 * 
 *  Question 1. (5 marks)
 * 
 *  initialize an npm project for this project
 * 
 *  What is the npm command to make package.json?
 *  write the command in your javascript notes then
 *  run the command to make package.json.
 * 
 * the command is 'npm init' then you keep hitting enter until it creates the package.json
 * 
 */

/**
 * Question 2. (2 marks)
 * 
 *  add lite-server to your project
 * 
 * 'npm install lite-server'
 * 
 *  What is the npm command to add lite-server
 *  as a development dependency for your project?
 * 
 * 'npm install lite-server --save-dev'
 *  
 *  Run the command to add lite-server to your project.
 */

/**
 *  Question 3. (10 marks)
 * 
 *  There are two scripts/task runners that we have used to 
 *  run projects.  lite and start.
 * 
 *  Add the two scripts(task runners) to your project, 
 *  and run the npm command to use the "start" task runer
 * 
 * '    "lite": "lite-server",
    "start": "npm run lite"  '

    'npm run start'
 * 
 */

/**
 * Question 4. (3 marks)
 * Link the javascript to the html page
 */

/**
 *  Question 5.(20 marks total)
 *  
 *  ES5 Classes:  The Balloon Machine
 *  Make an ES5 class called TheBalloonMachine
 * 
 *  Your class must contain:
 *      -a value called maxBalloons(3 marks)
 *          -make this a number between 5 and 20
 *      -an array of 6 objects(6 marks)
 *          -each object must contain
 *              -a colour - string
 *              -a size - int
 *      -a function called startMachine(11 marks)
 *          -your function must
 *              -contain an interval that will:
 *                  -make 1 random balloon per cycle up to maxBalloons
 *                  -each ballon must be shown in the console using console.log and
 *                      template literals
 *                  -call a function to shut off your interval, once you reach maxBalloons
 * 
 *      -the startMachine, and functions to stop your interval must be in the prototype.
 */

 function TheBalloonMachine(){
     this.maxBalloons = 6;
     this.counter = 5000;
     this.count = 0;

     this.balloons = [
         {color: "blue", size: 5},
         {color: "green", size: 3},
         {color: "purple", size: 7},
         {color: "red", size: 6},
         {color: "orange", size: 2},
         {color: "yellow", size: 9},
     ]


 this.init = () => {
    console.log("Balloon Machine turning on.");
    this.startMachine();
}

     this.init();
 }


 TheBalloonMachine.prototype.startMachine = function(){
     this.balloonInterval = setInterval(() =>{
         let newBalloons = [];
         if(this.count < this.maxBalloons){
         newBalloons[this.count] = this.balloons[Math.floor(Math.random() * this.balloons.length)];
         console.log(`A balloon of ${newBalloons[this.count].color} and size ${newBalloons[this.count].size} was made`);
         this.count++;
         console.log(`${this.count} balloons have been made`);
        }else{
            this.endMachine();
        }
     }, this.counter);
 }

 TheBalloonMachine.prototype.endMachine = function(){
     clearInterval(this.balloonInterval);
     console.log(`${this.maxBalloons} have been created. Shutting Down.`)
 }

 let machine = new TheBalloonMachine();

/**
 * Question 6:(10 marks)
 *  Make an ES6 class that has the same functionality as your ES5 class
 */

 class TheBaloonnMachine{
     constructor(){
         this.maxBaloons = 6;
         this.baloonCount = 0;
         this.timer = 5000;

         this.initialize = () =>{
            console.log("Balloon Machine ES6 turning on.");
            this.startMachine2();
         }

         this.initialize();

         this.baloons = [
            {color: "blue", size: 5},
            {color: "green", size: 3},
            {color: "purple", size: 7},
            {color: "red", size: 6},
            {color: "orange", size: 2},
            {color: "yellow", size: 9},
        ]
     }

     startMachine2 = () =>{
        this.balloonInterval = setInterval(() =>{
            let newBaloons = [];
            if(this.baloonCount < this.maxBaloons){
            newBaloons[this.baloonCount] = this.baloons[Math.floor(Math.random() * this.baloons.length)];
            console.log(`ES6 A balloon of ${newBaloons[this.baloonCount].color} and size ${newBaloons[this.baloonCount].size} was made`);
            this.baloonCount++;
            console.log(`ES6 ${this.baloonCount} balloons have been made`);
           }else{
               this.endMachine2();
           }
        }, this.timer);
     }

     endMachine2 = () => {
        clearInterval(this.balloonInterval);
        console.log(`ES6 ${this.maxBaloons} have been created. Shutting Down.`)
     }
 }

 let machine2 = new TheBaloonnMachine();