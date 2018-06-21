
        var letterSelection = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var wins = 0;
        var losses = 0;
        var lives = 20;
        var guessesSoFar = [];
        document.onkeydown = function (e) {
            var keyPress;
            if (typeof event !== 'undefined') {
                keyPress = event.keyCode;
            }
            else if (e) {
                keyPress = e.which;
            }
            guessesSoFar.push(String.fromCharCode(keyPress));
        };
        document.onkeyup = function (event) {
            var userGuess = event.key;
            var computerGuess = letterSelection[Math.floor(Math.random() * letterSelection.length)];
            if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c" || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z"))) {
                if (userGuess === computerGuess) {
                    wins++;
                }
                if (userGuess != computerGuess) {
                    losses++;
                    lives--;
                    if (lives === 0) {
                        alert("You lost! Click okay to try again");
                        lives = 20;
                        wins = 0;
                        losses = 0;
                        guessesSoFar = [];
                    }
                    if (wins === 5) {
                        alert("You won! Refresh the page to play again");
                        lives = 20;
                        wins = 0;
                        losses = 0;
                        guessesSoFar = [];
                    }
                }
                var html =
                    "<p>You guessed: " + userGuess + "</p>" +
                    "<p>The computer guessed: " + computerGuess + "</p>" +
                    "<p>Wins: " + wins + "</p>" +
                    "<p>Losses: " + losses + "</p>" +
                    "<p>Lives: " + lives + "</p>" +
                    "<p>Guesses so far: " + guessesSoFar + "</p>";
                document.querySelector("#psychic").innerHTML = html;
            }
        };
