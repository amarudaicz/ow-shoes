

const fetchInsertProduct = async (dataForm) =>{

   const urlFetch = ` http://localhost:3000/admin/insert-product`;
   

   const resServer = await fetch(urlFetch, {
      method: 'POST',
      headers:{
         'Content-Type': 'application/json'
      },
      
      body:JSON.stringify(dataForm)
      
   });
     
   return resServer.json();

}
 


const fetchDeleteProduct = async (idProduct) =>{

  const urlFetch = ` http://localhost:3000/admin/delete-product/${idProduct}`;


  const resServer = await fetch(urlFetch, {
     method: 'DELETE',
  });
    
   return resServer.json();
}



const fetchGetListProducts = async () =>{

   const urlFetch = `http://localhost:3000/admin/list-products `;
 
 
   const resServer = await fetch(urlFetch, {
      method: 'GET',
   });
     
   return resServer.json();
}



const fetchGetProduct = async () =>{

   const urlFetch = `http://localhost:3000/admin/list-products `;
 
 
   const resServer = await fetch(urlFetch, {
      method: 'GET',
   });
     
   return resServer.json();
}





 


 
 




