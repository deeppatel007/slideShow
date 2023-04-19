
async function fetchData(){
    const response = await fetch('https://randomuser.me/api/');
    var data = await response.json();
    data = data.results[0];
    
    if(data!==undefined){
      
        let profile = document.getElementById('profile');
        let child = document.createElement('div')
        child.innerHTML = `
        <img src="${data.picture.large}">
        <h1> Name : ${data.name.title + ' ' + data.name.first + ' ' + data.name.last}</h1>
        <h3> Gender: ${data.gender}</h3>
        <h3> Address: ${data.location.street.number + ', ' +data.location.street.name +', ' + data.location.city + ', ' + data.location.state + ', ' + data.location.country }
        <h3>Email: ${data.email}</h3>
        <h3> Birth Date: ${data.dob.date}</h3>
        <h3> Phone No: ${data.phone}</h3>
        `;
        profile.appendChild(child);
    }
}

fetchData();