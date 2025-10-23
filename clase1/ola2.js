const userDatabase = [
    {
        username: "alice",
        password: "alice123",
    },
    {
        username: "bob",
        password: "bob123",
    },
    {
        username: "charlie",
        password: "charlie123"
    },
    {
        username: "david",
        password: "david123"
    }
];

const usersTimeLine = [
    {
        username: "alice",
        timeline: "Alice's first post"
    },
    {
        username: "bob",
        timeline: "Bob's first post"
    },
    {
        username: "charlie",
        timeline: "Charlie's first post"
    },
    {
        username: "david",
        timeline: "David's first post"
    }
];

const username = prompt("Cual es tu usuario?");
const password = prompt("Cual es tu contraseña?");

function usuarioExtiste(username, password) {
    for (let i = 0; i < userDatabase.length; i++) {
        if (userDatabase[i].username === username &&
             userDatabase[i].password === password) {
            return true;
        }
    }
    return false;
}
function signIn(username, password) {
    if (usuarioExtiste(username, password)) {
        console.log(usersTimeLine);
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

signIn(username, password);