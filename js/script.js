const btns = document.querySelectorAll('.btn'),
    form = document.forms[0];

btns[0].addEventListener('click', (event) => {
    event.preventDefault;
    const newUser = {
        login: form.login.value,
        pass: form.pass.value,
    };
    fetch('https://example-31920-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "content-type": "application/json",
        }
    });
    form.reset()
})

btns[1].addEventListener('click', async () => {
    async function getData() {
        return fetch('https://example-31920-default-rtdb.europe-west1.firebasedatabase.app/users.json')
        .then(response => response.json())
        .then(data => Object.values(data))
    }
    
    let info = await getData()
        console.log(info)
});
