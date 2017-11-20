const recurringStrings = (phrases) =>{
  if(phrases.length > 0 && typeof phrases === 'string'){
    const splitWords = phrases.split(' ');
    let wordCount = {};
    for (let index in splitWords){
      if(wordCount==={}){
        wordCount[splitWords[index]]=1;
      }else{
        if (splitWords[index] in wordCount){
          wordCount[splitWords[index]]++;
        }else{
          wordCount[splitWords[index]]=1;
        }
        
      }
    }
    return wordCount;
  }else{
    return "You didn't enter in words";
  }
  
  
};

// console.log(recurringStrings("olly olly in come free"));

export default recurringStrings;