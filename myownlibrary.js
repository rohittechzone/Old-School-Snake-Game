
function isTouching(object1,object2){
  if(object1.body.position.x - object2.body.position.x <= object1.width/2 + object2.width/2 &&
      object2.body.position.x - object1.body.position.x <= object1.width/2 + object2.width/2){

  // movingrect.velocityX = movingrect.velocityX * (-1);
  // staticrect.velocityX = staticrect.velocityX * (-1);
   return true;
}

else if(object1.body.position.y - object2.body.position.y <= object1.height/2 + object2.height/2 &&
  object2.body.position.y - object1.body.position.y <= object1.height/2 + object2.height/2){

   return true;

}

else{
  return false;
}

}
