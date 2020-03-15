const friends = require('../data/friends.sj')

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        // returns all possible friends
    });
    app.post('api/friends', function (req, res) {

        const user = req.body
        let bestScore = 50;
        let bestMatch = friends[0]

        for (let i = 0; i < friends.length; i++) {
            let totalScore = 0
            const currentFriend = friends[i];

            for (let i = 0; i < currentFriend.scores.length; i++) {

                const friendScore = currentFriend.scores[i];
                const userScore = user.scores[i];

                totalScore += Math.abs(friendScore - userScore);

            }


            if (totalScore < bestScore) {
                bestScore = totalScore
                bestMatch = currentFriend
            }

        }
        res.json(bestMatch)
        //match maker 
    })
}