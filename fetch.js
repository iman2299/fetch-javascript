
///GET METHODS
let newFetch = fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors').then(response=>{
return response.json()
}
).then(data=> console.log(data));
let newFetch = fetch('https://fakerestapi.azurewebsites.net/api/v1/Books').then(response=>{
return response.json()
}
).then(data=> console.log(data));

////////////////////////////////////////////////////////////////////////POST METHODS

const headers= new Headers();
headers.append('Content-type','application/json');
const options={
method:'POST',
headers,
body:JSON.stringify({

 firstName:'Iman',
 id:600,
 idBook:200,
 lastName:'naser',
 
}
)
};

let newFetch = fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors',options).then(response=>{
return response.json()
}
).then(data=> console.log(data));
///////////////////////////////// PUT METHODS
const headers= new Headers();
headers.append('Content-type','application/json');
const options={
method:'put',
headers,
body:JSON.stringify({
firstName: "new",
  id: 11,
  idBook: 5,
  lastName: "put"

 
}
)
};

let newFetch = fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/11',options).then(response=>{
return response.json()
}
).then(data=> console.log(data));
////////////////////////////////////////////////////////////////PATCH METHODS
const headers= new Headers();
headers.append('Content-type','application/json');
const options={
method:'patch',
headers,
body:JSON.stringify({

 firstName:'new',
 id:600,
 idBook:200,
 lastName:'patch',
 
}
)
};

let newFetch = fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/600',options).then(response=>{
return response.json()
}
).then(data=> console.log(data));
////////////////////////////////////ANOTHER SYNTAX FOR FETCH

fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/6', {
method: 'PATCH',
body: JSON.stringify({
firstName:'new',
 id:600,
 idBook:200,
 lastName:'patch',
}),
headers: {
"Content-type": "application/json; charset=UTF-8"
}
})
.then(response => response.json())
.then(json => console.log(json))



///////////////////////////////DELETE METHODS
const options={
  method:'delete',
  };
  
  let newFetch = fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/3',options).then(response=>{
  return response.json()
  }
  ).then(data=> console.log(data));
/////////////////////ANOTHER SYNTAX FOR DELETE
  fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors/11' ,{
method: 'DELETE'
}) /////////////////////////////////////