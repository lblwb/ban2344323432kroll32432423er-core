DCLib.defineDAppLogic("DCGame_ex_v1", function() {
  return {
    play: function(userBet, gameData, randoms) {
      const userNum = gameData[0]
      const randomNum = randoms[0]

      let profit = -userBet

      // if user win
      if (userNum * 1 === randomNum * 1) {
        profit = userBet * 2
      }

      // return player profit
      return profit
    }
  }
})
