function submitData(name, email) {
    let url = "http://localhost:3000/users"
    let formData = {
        name: name,
        email: email
    }
    return fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => document.body.append(data.id))
    .catch(error => {
        document.body.append(error.message);
    });
}