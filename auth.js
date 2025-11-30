let mode = "login"; // login or signup

function openAuth(m) {
    mode = m;
    document.getElementById("authTitle").innerText =
        m === "login" ? "Login" : "Create Account";

    document.getElementById("username").style.display =
        m === "signup" ? "block" : "none";

    document.getElementById("authBox").style.display = "block";
}

function closeAuth() {
    document.getElementById("authBox").style.display = "none";
}

// Show popup if not logged in
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function tryDownload() {
    let profile = localStorage.getItem("userProfile");

    if (!profile) {
        openPopup();
        return;
    }

    // If logged in → allow download
    window.location.href = "https://your-download-link.com/game.zip";
}

function submitAuth() {
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();
    let username = document.getElementById("username").value.trim();

    // Gmail validation
    if (!email.endsWith("@gmail.com")) {
        alert("Email must be a valid Gmail!");
        return;
    }

    if (pass.length < 4) {
        alert("Password must be at least 4 characters!");
        return;
    }

    if (mode === "signup") {
        if (username.length < 2) {
            alert("Username required!");
            return;
        }

        // Save profile
        let profile = {
            email: email,
            password: pass,
            username: username
        };

        localStorage.setItem("userProfile", JSON.stringify(profile));
        alert("Account created! You are now signed in.");
        closeAuth();
        return;
    }

    // LOGIN
    let saved = localStorage.getItem("userProfile");
    if (!saved) {
        alert("No account found. Please sign up first.");
        return;
    }

    let prof = JSON.parse(saved);

    if (email === prof.email && pass === prof.password) {
        alert("Login successful!");
        closeAuth();
    } else {
        alert("Incorrect email or password!");
    }
}
