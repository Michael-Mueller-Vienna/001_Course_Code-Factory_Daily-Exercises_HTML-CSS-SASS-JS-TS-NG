/*            

* This is the file which will call

* our javascript file that need to be tested.

* Each describe block is equivalent to one test case    

*    

*/   

// describe your code

describe("greetings", function (){

    // what it should do

    it("should Return Happy Coding" ,function(){

            //expect something

            expect(greetings ()).toEqual('Happy Coding');

    });

});

/*

Note how describe - it() argument reads like a sentence.

*/