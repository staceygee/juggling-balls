const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/juggling-balls-answer', function (req, res) {
  //make a variable and give it value fron 'juggling-balls'
  var jugglingBalls = req.session.data['juggling-balls']
  //check whether the variable matches a condition
  if (jugglingBalls == "3 or more"){
    //Send user to next page
    res.redirect('juggling-trick')
  }
  else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }
})
module.exports = router
