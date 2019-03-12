//jshint esversion:6

const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/rates", getRates);
  // console.log("Received request")
  // var emailAddress = "stanley@gmail.com";
  // var name = "Stanley";
  // var param = {username: name, email: emailAddress};

  // app.listen(3000, function() {
  //   console.log("Server started on 3000");
  // });

  function getRates(req, res){
    const operation = req.query.operation;

    computeRates(res, operation);

  }

  function computeRates(res, op) {
	op = op.toLowerCase();

	let result = 0;

	if (op == "letterss") {
		result = .55;
	} else if (op == "lettersm") {
		result = .5;
	} else if (op == "largeef") {
		result = 1;
	} else if (op == "fcp") {
		result = 3.66;
	} else {
		// It would be best here to redirect to an "unknown operation"
		// error page or something similar.
	}

	// Set up a JSON object of the values we want to pass along to the EJS result page
	const params = {operation: op, result: result};

  // var rates = {LettersS: .55, LettersM: .5, LargeEF: 1, FCP: 3.66};

  res.render("home", params);
  console.log("I made it this far");
}



// app.listen(3000, function() {
//   console.log("Server started on 3000");
// });
