//Learning Assync AJAX
/*
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/romuloschiavon');
xhr.send(null);

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}
*/


//Learning Promises
/*
var myPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/romuloschiavon');
        xhr.send(null);
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject("Error!!")
                };
            };
        };
    });
};

myPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });

*/

//Learning AXIOS
axios.get('https://api.github.com/users/romuloschiavon')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });
