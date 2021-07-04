
var gender= prompt("what is your gender? with correct spilling (male or female)")
while( gender != 'female' && gender !='male'){
  gender= prompt("what is your gender? (male or female)");
}
if(gender == 'male'){

  var  calcIdealWight= confirm("do you want to calculate your ideal wight for free?");
      if(calcIdealWight == true){
       var hightMAN =parseInt( prompt('inter your hight to calculate your ideal wight '));

        function calcidealWightMAN(){
          var idealMAN = 48 +( 1.1*(hightMAN-150))
          return idealMAN;
        }
    
    alert(" Your ideal wight is "+ calcidealWightMAN() + ' and make sure tell your mom, wife and sister about us to become more shin' );

  }else{
      alert("WE ARE SOORY THIS IS JUST FOR LADY PLEASE TELL YOR MOM,WIFE AND SISTER TO BE MORE SHIN ");

  }

  }else{
    var wight = parseInt(prompt('inter your wight '))
        var hight =parseInt( prompt('inter your hight to calculate your ideal wight '));
        function idealWight(){
          var ideal = 45 +( .9*(hight-150))
          return ideal;
        }
        var ideeal = idealWight();
        var diff =  wight - ideeal ;
        if(diff > 0){
          
          document.write('<p>'+'you must lose '+ diff +'Kg and this is suitable exersize '+'</p>' + '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIh2E_lbZ6Gnz0uVLgyqj7Lie_czADbwo8Tg&usqp=CAU">')
        }else{
          document.write('<p>'+'you must gian '+ diff +'Kg and this is suitable exersize '+'</p>' + '<img src="https://post.healthline.com/wp-content/uploads/2020/06/Female_Squatting_1200x628-facebook-1200x628.jpg">')
        }
        function range(){
          var max = ideeal+2 
          var min = ideeal-2
          var final =  'you should try to remain between ' 
          + max + ' Kg and ' + min + ' Kg'
          return final 
        }
        document.write('<h3>'+'this is your ideal wight '+ ideeal + ' you should try to remain in range of ' + range() +'</h3>')
        }
        
        /*
    var wight = prompt('inter your  (there is tow differnet cases >70 0r <70)');

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

      var numOfEx = prompt('how many hour do you have to work ? (please dont bit number >3 )')

      while(numOfEx>3){
        numOfEx = prompt('how many hour do you have to workout ? (please dont bit number >3 )')
      }
      var i 

      for(i=0 ; i<=numOfEx ; i++){
          document.write('<p>' + 'this is suitable exercise'+'</p>'+ '<img src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2013/09/inexpensiveExercise-1277759983-770x533-1-650x428.jpg">')

      }
    }
  }

*/