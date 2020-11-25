function RandomInt(max){
  return function(){
    return Math.floor(Math.random()*max);
  }
}
export {
  RandomInt
}
