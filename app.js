
var gender= prompt("what is your gender? with correct spilling (male or female)")
while( gender != 'female' && gender !='male'){
  gender= prompt("what is your gender? (male or female)");
}
if(gender == 'male'){
  alert("WE ARE SOORY THIS IS JUST FOR LADY PLEASE TELL YOR MOM,WIFE AND SISTER TO BE MORE SHIN ");
  }else{
    var wight = prompt('inter your weight (there is tow differnet cases >70 0r <70)');
    if(wight<70){
      var goal = prompt('do you want to make shape to your body or want to lose fat ? please write (shape or lose fat ) ')
      while (goal != 'shape' && goal != 'lose fat'){
         goal = prompt('do you want to make shape to your body or want to lose fat ? please write (shape or lose fat ) ')

      }
      if(goal == 'shape'){
        document.write('<p>' + 'this is suitable exercise '+'</p>'+'<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1134331724.jpg?crop=0.992xw:0.733xh;0.00816xw,0.195xh&resize=1200:*" alt="wight">')
      }else{
        document.write('<p>' + 'this is suitable exercise'+'</p>'+ '<img src="https://anamelacademy.com/wp-content/uploads/elementor/thumbs/Zoumba-3-scaled-p4nbk8b5exk1l0wuqgboxhlx3z47kwmthwt5qsmods.jpg">')
      }

    }else{
      var numOfEx = prompt('how many hour do you have to workout ? (please dont put number >3 )')
      while(numOfEx>3){
        numOfEx = prompt('how many hour do you have to workout ? (please dont bit number >3 )')
      }
      var i 
      for(i=1 ; i<=numOfEx ; i++){
          document.write('<p>' + 'this is suitable exercise'+'</p>'+ '<img src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2013/09/inexpensiveExercise-1277759983-770x533-1-650x428.jpg">')

      }
    }
  }

