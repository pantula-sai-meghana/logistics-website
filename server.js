const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/submit', (req, res) => {
	const formData = req.body;
	console.log("formData",formData)
	const filePath = path.join(__dirname, 'db.json');

	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to read file' });
		}

		const existingData = JSON.parse(data || '[]');
		existingData.push(formData);

		fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
			if (err) {
				return res.status(500).json({ error: 'Failed to write file' });
			}

			res.json({ message: 'Data saved successfully!' });
		});
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});



// const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const bodyParser = require('body-parser');

// // const app = express();
// // const PORT = process.env.PORT || 3000;
// const app = express();
// const PORT = 3000;
// app.use(bodyParser.json());
// app.use(express.static('public'));
// // Middleware to parse JSON bodies
// // app.use(express.json());

// // Serve static files from the frontend directory
// app.post('/submit', (req, res) => {
// 		const formData = req.body;
// 		const filePath = path.join(__dirname, 'db.json');
	
// 		fs.readFile(filePath, 'utf8', (err, data) => {
// 			if (err) {
// 				return res.status(500).json({ error: 'Failed to read file' });
// 			}
	
// 			const existingData = JSON.parse(data || '[]');
// 			existingData.push(formData);
	
// 			fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
// 				if (err) {
// 					return res.status(500).json({ error: 'Failed to write file' });
// 				}
	
// 				res.json({ message: 'Data saved successfully!' });
// 			});
// 		});
// 	});
	
// 	app.listen(PORT, () => {
// 		console.log(`Server is running on http://localhost:${PORT}`);
// 	});
	

// // Serve the contact.html file for the contact page
// // app.get('/contact', (req, res) => {
// //   res.sendFile(path.join(__dirname, '../frontend/contact.html'));
// // });

// // Serve the index.html file for the root
// app.get('/index', (req, res) => {
//   res.sendFile(path.join(__dirname, '../new_log/index.html'));
// });
// app.get('/services', (req, res) => {
// 	res.sendFile(path.join(__dirname, '../new_log/services.html'));
//   });

// // Other routes for additional HTML files
// app.get('/about', (req, res) => {
//   res.sendFile(path.join(__dirname, '../new_log/aboutus.html'));
// });

// app.get('/services', (req, res) => {
//   res.sendFile(path.join(__dirname, '../new_log/whyus.html'));
// });
// app.get('/services', (req, res) => {
// 	res.sendFile(path.join(__dirname, '../new_log/test.html'));
//   });




// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

