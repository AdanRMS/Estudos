axios.get('https://api.github.com/users/adanRMS')
    .then(function (response){
        console.log(response.data.avatar_url)
    })
    .cath(function (error){
        console.warn(error)
    });