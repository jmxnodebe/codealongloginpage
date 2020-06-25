var username = "jmxnodi"
var password = "codealong"
var attempt = 3




function login() {
    var getUsername = document.getElementById('uname').value
    console.log(getUsername)
    var getPassword = document.getElementById('pword').value
    console.log(getPassword)
    if(getUsername == username && getPassword == password) {
        window.location = "welcome.html"
        return true
    }
    else {
        attempt--
        alert("Wrong Username and Password. You have "+attempt+" attempts left")
        if(attempt == 0) {
            document.getElementById('uname').disabled = true
            document.getElementById('pword').disabled = true
            document.getElementById('loginButton').disabled = true
            return false
        }
    }
}


    document.getElementById('usernameHolder').innerHTML = username
    document.getElementById('passwordHolder').innerHTML = password
    document.getElementById('timeHolder').innerHTML = Date()
