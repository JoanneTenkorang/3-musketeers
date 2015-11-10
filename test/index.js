var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {
  describe('is.arguments', function () {
    it('should return true if passed parameter type is arguments', function () {
      var getArguments = function () {
          return arguments;
      };
      var arguments = getArguments('test');
      expect(is.arguments(arguments)).to.be.true;
    });
    it("should return false if passed parameter type is not arguments", function () {
      var notArguments = ['test'];
      expect(is.arguments(notArguments)).to.be.false;
    });

    describe('is.array',function(){
      it("should return true if passed parameter is array",function(){
        var arguments=["val1","val2"];
        expect(is.array(arguments)).to.be.true;
      });
      it("should return false if passed parameter is not an array",function(){
        var arguments=3;
        expect(is.array(arguments)).to.be.false;
      });
    });

    //is boolean

    describe('is.boolean',function(){
      it("should return true if passed argument is boolean",function(){
        var arguments=true;
        expect(is.boolean(arguments)).to.be.true;
      });
      it("should return false if passed parameter is not a boolean",function(){
        var arguments=3;
        expect(is.boolean(arguments)).to.be.false;
      });
    });

    //is date

    describe('is.date',function(){
      it("should return true if passed parameter is a  date",function(){
        var arguments=new Date();
        expect(is.date(arguments)).to.be.true;
      });
      it("should return false if passed parameter is not date",function(){
        var arguments=3;
        expect(is.date(arguments)).to.be.false;
      });
    });

    //is error

    describe('is.error',function(){
      it("should return true if passed parameter is an error",function(){
        var arguments=new Error();
        expect(is.error(arguments)).to.be.true;
      });
      it("should return false if passed parameter is not an error",function(){
        var arguments=3;
        expect(is.error(arguments)).to.be.false;
      });
    });

    //is function

    describe('is.function',function(){
      it("should return true if passed parameter is a function",function(){
        var arguments=function(){return 1;};
        expect(is.function(arguments)).to.be.true;
      });
      it("should return false if passed parameter is not a function",function(){
        var arguments=3;
        expect(is.function(arguments)).to.be.false;
      });
    });


    //is nan

    describe('is.nan',function(){
      it("should return true if passed parameter is nan",function(){
        var arguments=parseInt("blabla");
        expect(is.nan(arguments)).to.be.true;
      });
      it("should return false if passed parameter is not nan",function(){
        var arguments=3;
        expect(is.nan(arguments)).to.be.false;
      });
    });


    //is null

    describe('is.null',function(){
      it("should return true if passed parameter is null",function(){
        var arguments=null;
        expect(is.null(arguments)).to.be.true;
      });
      it("should return false if passed parameter is not null",function(){
        var arguments=3;
        expect(is.null(arguments)).to.be.false;
      });
    });


    //is number

    describe('is.number',function(){
      it("should return true if passed parameter is a number",function(){
        var arguments=4;
        expect(is.number(arguments)).to.be.true;
      });
      it("should return false if passed parameter is not a number",function(){
        var arguments="hknl";
        expect(is.number(arguments)).to.be.false;
      });
    });


      //is object

      describe('is.object',function(){
        it("should return true if passed parameter is an object",function(){
          var arguments=new Object(4);
          expect(is.object(arguments)).to.be.true;
        });
        it("should return false if passed parameter is not an object",function(){
          var arguments=null;
          expect(is.object(arguments)).to.be.false;
        });
      });


      //is json

      describe('is.json',function(){
        it("should return true if passed parameter is a json",function(){
          var arguments={"employees":[
          {"firstName":"John", "lastName":"Doe"},
          {"firstName":"Anna", "lastName":"Smith"},
          {"firstName":"Peter", "lastName":"Jones"}
      ]};
          expect(is.json(arguments)).to.be.true;
        });
        it("should return false if passed parameter is not a json",function(){
          var arguments="hknl";
          expect(is.json(arguments)).to.be.false;
        });
      });


      //is regexp

      describe('is.regexp',function(){
        it("should return true if passed parameter is a regexp",function(){
          var arguments=new RegExp('/ab+c/', 'i');
          expect(is.regexp(arguments)).to.be.true;
        });
        it("should return false if passed parameter is not a regexp",function(){
          var arguments="hknl";
          expect(is.regexp(arguments)).to.be.false;
        });
      });

      //is sameType

      describe('is.sameType',function(){
        it("should return true if passed parameter is a regexp",function(){
          var arg1=2;
          var arg2=3;
          expect(is.sameType(arg1,arg2)).to.be.true;
        });
        it("should return false if passed parameter is not a regexp",function(){
          var arg1=2;
          var arg2=new Date();
          expect(is.sameType(arg1,arg2)).to.be.false;
        });
      });

      //is string

      describe('is.string',function(){
        it("should return true if passed parameter is a string",function(){
          var arguments="allo";
          expect(is.string(arguments)).to.be.true;
        });
        it("should return false if passed parameter is not a string",function(){
          var arguments=new Date();
          expect(is.string(arguments)).to.be.false;
        });
      });

      //is char

      describe('is.char',function(){
        it("should return true if passed parameter is a char",function(){
          var arguments='c';
          expect(is.char(arguments)).to.be.true;
        });
        it("should return false if passed parameter is not a char",function(){
          var arguments="hknl";
          expect(is.char(arguments)).to.be.false;
        });
      });

      //is undefined

      /*describe('is.undefined',function(){
        it("should return true if passed parameter is undefined",function(){
          var arguments;
          expect(is.undefined(arguments)).to.be.true;
        });
        it("should return false if passed parameter is defined",function(){
          var arguments="hknl";
          expect(is.undefined(arguments)).to.be.false;
        });
      });*/

      //is empty
      describe('is.empty',function(){
        it("should return true if passed parameter is empty",function(){
          var arguments="";
          expect(is.empty(arguments)).to.be.true;
        });
        it("should return false if passed parameter is not empty",function(){
          var arguments="hknl";
          expect(is.empty(arguments)).to.be.false;
        });
      });

      //is existy
      describe('is.existy',function(){
        it("should return true if passed parameter is existy",function(){
          var arguments="abc";
          expect(is.existy(arguments)).to.be.true;
        });
        it("should return false if passed parameter doesn't exist",function(){
          var arguments=null;
          expect(is.existy(arguments)).to.be.false;
        });
      });

      //is truty
      /*describe('is.truthy',function(){
        it("should return true if passed parameter is truthy",function(){
          var arguments="abc";
          expect(is.truthy(arguments)).to.be.true;
        });
        it("should return false if passed parameter isn't truthy",function(){
          var arguments=null;
          expect(is.truthy(arguments)).to.be.false;
        });
      });*/

      //is space
      describe('is.space',function(){
        it("should return true if passed parameter is space",function(){
          var arguments=' ';
          expect(is.space(arguments)).to.be.true;
        });
        it("should return false if passed parameter is not space",function(){
          var arguments='d';
          expect(is.space(arguments)).to.be.false;
        });
      });

      //is equal
      describe('is.equal',function(){
        it("should return true if passed parameters are equal",function(){
          var arg1=1;
          var arg2=1;
          expect(is.equal(arg1,arg2)).to.be.true;
        });
        it("should return false if passed parameters aren't equal",function(){
          var arg1=1;
          var arg2=2;
          expect(is.equal(arg1,arg2)).to.be.false;
        });
      });

      //is even
      describe('is.even',function(){
        it("should return true if passed parameter is even",function(){
          var arg=2;
          expect(is.even(arg)).to.be.true;
        });
        it("should return false if passed parameter is not even",function(){
          var arg=1;
          expect(is.even(arg)).to.be.false;
        });
      });

      //is odd
      describe('is.odd',function(){
        it("should return true if passed parameter is odd",function(){
          var arg=1;
          expect(is.odd(arg)).to.be.true;
        });
        it("should return false if passed parameter is not odd",function(){
          var arg=2;
          expect(is.odd(arg)).to.be.false;
        });
      });

      //is positive
      describe('is.positive',function(){
        it("should return true if passed parameter is positive",function(){
          var arg=1;
          expect(is.positive(arg)).to.be.true;
        });
        it("should return false if passed parameter is not positive",function(){
          var arg=-2;
          expect(is.positive(arg)).to.be.false;
        });
      });

      //is positive
      describe('is.negative',function(){
        it("should return true if passed parameter is negative",function(){
          var arg=-1;
          expect(is.negative(arg)).to.be.true;
        });
        it("should return false if passed parameter is not negative",function(){
          var arg=2;
          expect(is.negative(arg)).to.be.false;
        });
      });

      //is above
      describe('is.above',function(){
        it("should return true if passed parameter is above the min",function(){
          var arg=18;
          var min=2;
          expect(is.above(arg,min)).to.be.true;
        });
        it("should return false if passed parameter is not above the min",function(){
          var arg=1;
          var min=2;
          expect(is.above(arg,min)).to.be.false;
        });
      });

      //is under
      describe('is.under',function(){
        it("should return true if passed parameter is under the max",function(){
          var arg=2;
          var max=18;
          expect(is.under(arg,max)).to.be.true;
        });
        it("should return false if passed parameter is not under the max",function(){
          var arg=19;
          var max=18;
          expect(is.under(arg,max)).to.be.false;
        });
      });

      //is within
      describe('is.within',function(){
        it("should return true if passed parameter is within the range",function(){
          var arg=3;
          var min=2;
          var max=4;
          expect(is.within(arg,min,max)).to.be.true;
        });
        it("should return false if passed parameter is out of the range",function(){
          var arg=5;
          var min=2;
          var max=4;
          expect(is.within(arg,min)).to.be.false;
        });
      });

      //is decimal
      describe('is.decimal',function(){
        it("should return true if passed parameter is a decimal",function(){
          var arg=1.23;
          expect(is.decimal(arg)).to.be.true;
        });
        it("should return false if passed parameter is not a decimal",function(){
          var arg=1;
          expect(is.decimal(arg)).to.be.false;
        });
      });

      //is integer
      describe('is.integer',function(){
        it("should return true if passed parameter is an integer",function(){
          var arg=5;
          expect(is.integer(arg)).to.be.true;
        });
        it("should return false if passed parameter is not an integer",function(){
          var arg=1.33;
          expect(is.integer(arg)).to.be.false;
        });
      });

      //is upperCase
      describe('is.upperCase',function(){
        it("should return true if passed parameter is uppercase",function(){
          var arg="ABC";
          expect(is.upperCase(arg)).to.be.true;
        });
        it("should return false if passed parameter is not uppercase",function(){
          var arg="Abc";
          expect(is.upperCase(arg)).to.be.false;
        });
      });

      //is lowerCase
      describe('is.lowerCase',function(){
        it("should return true if passed parameter is lowerCase",function(){
          var arg="abc";
          expect(is.lowerCase(arg)).to.be.true;
        });
        it("should return false if passed parameter is not lowerCase",function(){
          var arg="Abc";
          expect(is.lowerCase(arg)).to.be.false;
        });
      });

      //is palindrome
      describe('is.lowerCase',function(){
        it("should return true if passed parameter is palindrome",function(){
          var arg="abcba";
          expect(is.palindrome(arg)).to.be.true;
        });
        it("should return false if passed parameter is not palindrome",function(){
          var arg="abc";
          expect(is.palindrome(arg)).to.be.false;
        });
      });
  });
});
