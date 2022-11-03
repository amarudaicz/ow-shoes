


const selectHtml = (selector, all) => {
  
  if (all) {
    return document.querySelectorAll(selector); 
  }
    
  return document.querySelector(selector);
};