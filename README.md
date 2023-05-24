Sure, here's an example README file for this assignment:

## Technologies Used
- Node.js
- Express.js
- MongoDB

### Prerequisites
- Node.js
- MongoDB

### Installation
Install dependencies:

```bash
cd HTS_loginSignup
npm install
``` 
```bash
PORT=3000
# JWT_SECRET=your-jwt-secret
MONGODB_URI=mongodb://localhost:27017/hts
```

4. Start the server:
nodemon index.js

5. use postman 
http://localhost:3000/auth/sign-up

## Usage

### Sign-up a new user
{
    "first_name": "Sandesh",
    "last_name": "Sandesh",
    "email": "sbk19mail@gmail.com",
    "password": "123456"
}
### Log in as a user
Copy the token from the response and add it to the Authorization header of subsequent requests in all apis
{
    "email": "sbk19mail@gmail.com",
    "password": "123456"
}
