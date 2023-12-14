const app = require("express")();

app.get("/", (req, res) => {
	res.send("Hello World!");
});

function startServer(port) {
	return app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
}

if (require.main === module) {
	const server = startServer(3000);
}

module.exports = app;
