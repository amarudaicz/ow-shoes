










function loaderList(container) {

  const temp = `
  
    <div class="wrapper-loader">
        <div class="circle-loader"></div>
        <div class="circle-loader"></div>
        <div class="circle-loader"></div>
        <div class="shadow-loader"></div>
        <div class="shadow-loader"></div>
        <div class="shadow-loader"></div>
    </div> 

 `;

  container.insertAdjacentHTML('beforeend', temp);
}

function removeLoader(container, nodeLoader) {
  container.removeChild(nodeLoader);
}
