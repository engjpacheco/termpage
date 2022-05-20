// Search something on google, if no arguments are provided => www.google.com

g = google;
function google(args) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://www.google.com/search?q=" + search);
    } else {
        window.open("https://www.google.com");
    }
}

// YouTube, online video sharing platform
yt = youtube
function youtube(args) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://www.youtube.com/results?search_query=" + search);
    } else {
        window.open("https://www.youtube.com/");
    }
}

// GitHub, internet hosting of git repositories
gh = github
function github(args) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://github.com/search?q=" + search);
    } else {
        window.open("https://github.com/engjpacheco");
    }
}

// GitLab, open-source GitHub alternative
gl = gitlab
function gitlab(args) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://gitlab.com/search?search=" + search);
    } else {
        window.open("https://gitlab.com/jpachecom4");
    }
}

// Wiktionary, dictionary owned by Wikimedia foundation
wikt = wiktionary
function wiktionary(cmd) {
    if (args != "") {
        search = args.replace(" ", "+")
        window.open("https://en.wiktionary.org/w/index.php?search=" + search);
    } else {
        window.open("https://en.wiktionary.org/");
    }
}

// Lingvo dictionary
li = lingvo
function lingvo(cmd) {
    if (args != "") {
        search = args.replace(" ", "")
        window.open("https://www.lingvolive.com/en-us/translate/en-es/" + search);
    } else {
        window.open("https://www.lingvolive.com/");
    }
}

// Telegram web
tg = telegram
function telegram(cmd) {
    window.open("https://web.telegram.org/z/");
}

pv = partview
function partview(cmd) {
    window.open("http://erp/cgi-bit/rpgle/cgipartvw3.pgm");
}

l2l = leading2lean
function leading2lean(cmd) {
    window.open("https://autoliv-mx.leading2lean.com/home/");
}

// Display time
time = clock;
function clock(args) {
    var today = new Date();
    block_log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

// Clear the terminal
cls = clear;
function clear(args) {
    document.getElementById('wrapper').innerHTML = "";
}

ls = help;
function help(args) {
    //block_log(\f121);
    block_log("[*] clear...................clear the screen..");
    block_log("[*] time....................print the time");
    block_log("[*] g how to be suckless....search in google 'how to be suckless'.");
    block_log("[*] gh dwm..................search in githunb 'dwm'");
    block_log("[*] gl dmwnu................search i gitlab 'dmenu'.");
    block_log("[*] li cat..................translate 'cat' to spanish");
    block_log("[*] tg......................open telegram in a new tab.");
    block_log("[*] pv......................open partviewer.");
    block_log("[*] l2l.....................open L2L in a new tab.");
}
