// // const express = require('express');
// // const fs = require('fs');
// // const path = require('path');
// // const bodyParser = require('body-parser');

// // const app = express();
// // const PORT = 3000;

// // app.use(bodyParser.json());
// // app.use(express.static('public'));

// // app.post('/submit', (req, res) => {
// // 	const formData = req.body;
// // 	console.log("formData",formData)
// // 	const filePath = path.join(__dirname, 'db1.json');

// // 	fs.readFile(filePath, 'utf8', (err, data) => {
// // 		if (err) {
// // 			return res.status(500).json({ error: 'Failed to read file' });
// // 		}

// // 		const existingData = JSON.parse(data || '[]');
// // 		existingData.push(formData);

// // 		fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (err) => {
// // 			if (err) {
// // 				return res.status(500).json({ error: 'Failed to write file' });
// // 			}

// // 			res.json({ message: 'Data saved successfully!' });
// // 		});
// // 	});
// // });

// // app.listen(PORT, () => {
// // 	console.log(`Server is running on http://localhost:${PORT}`);
// // });

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// // In-memory store for user data
// let users = [];

// // Route for registration
// app.post('/register', (req, res) => {
//     const { email, password } = req.body;
//     const existingUser = users.find(user => user.email === email);

//     if (existingUser) {
//         return res.status(400).send('User already exists.');
//     }

//     users.push({ email, password });
//     res.send('User registered successfully.');
// });

// // Route for login
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     const user = users.find(user => user.email === email && user.password === password);

//     if (user) {
//         res.send('Login successful.');
//     } else {
//         res.status(401).send('Invalid email or password.');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });













// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 8000;

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// // Endpoint for user registration
// app.post('/register', (req, res) => {
//     const { firstname, lastname, email, password, gender } = req.body;

//     if (!firstname || !lastname || !email || !password || !gender) {
//         return res.status(400).json({ message: 'All fields are required' });
//     }

//     let users = [];
//     try {
//         const data = fs.readFileSync('db1.json');
//         users = JSON.parse(data);
//     } catch (err) {
//         console.error(err);
//     }

//     const userExists = users.find(user => user.email === email);
//     if (userExists) {
//         return res.status(400).json({ message: 'User already exists' });
//     }

//     const newUser = { firstname, lastname, email, password, gender };
//     users.push(newUser);

//     fs.writeFileSync('db1.json', JSON.stringify(users, null, 2));

//     res.status(201).json({ message: 'Registration successful' });
// });

// // Endpoint for user login
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     }

//     let users = [];
//     try {
//         const data = fs.readFileSync('db1.json');
//         users = JSON.parse(data);
//     } catch (err) {
//         console.error(err);
//     }

//     const user = users.find(user => user.email === email && user.password === password);
//     if (!user) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     res.status(200).json({ message: 'Login successful' });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



// this is the final registration page details



const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for user registration
app.post('/register', (req, res) => {
    const { firstname, lastname, email, password, gender } = req.body;

    if (!firstname || !lastname || !email || !password || !gender) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    let users = [];
    try {
        const data = fs.readFileSync('db1.json');
        users = JSON.parse(data);
    } catch (err) {
        console.error(err);
    }

    

    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = { firstname, lastname, email, password, gender };
    users.push(newUser);

    fs.writeFileSync('db1.json', JSON.stringify(users, null, 2));

    res.status(201).json({ message: 'Registration successful' });
});



// end


// Endpoint for user login
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     }

//     let users = [];
//     try {
//         const data = fs.readFileSync('db1.json');
//         users = JSON.parse(data);
//     } catch (err) {
//         console.error(err);
//     }

//     const user = users.find(user => user.email === email && user.password === password);
//     if (!user) {
//         return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     let loginDetails = [];
//     try {
//         const data = fs.readFileSync('db1.json');
//         loginDetails = JSON.parse(data);
//     } catch (err) {
//         console.error(err);
//     }

//     const loginInfo = { email, timestamp: new Date() };
//     loginDetails.push(loginInfo);

//     fs.writeFileSync('db1.json', JSON.stringify(loginDetails, null, 2));

//     res.status(200).json({ message: 'Login successful' });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// this is the final login details
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }



    let users = [];
    try {
        const data = fs.readFileSync('db1.json');
        users = JSON.parse(data);
    } catch (err) {
        console.error(err);
    }



    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Log successful login attempt without modifying the user data
    console.log(`User ${email} logged in at ${new Date()}`);

    res.status(200).json({ message: 'Login successful' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






