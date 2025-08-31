# 📚 Book Shop API – IBM Backend Node.js & Express Final Project

This project is the final assignment for the **IBM Backend Development with Node.js & Express** course. **Book Shop API** is a comprehensive RESTful API built with Node.js and Express, featuring JWT authentication, session management, and both synchronous and asynchronous implementations for book catalog management and user review system.

## 🌐 API Base URL

```
http://localhost:5000
```

## 📸 API Testing Screenshots

_Screenshots will be taken during testing with Postman for peer review submission:_

- `1-getallbooks.png` - Task 1: Get all books
![Paradise Nursery Preview](/public/img/1-getallbooks.png)

- `2-gedetailsISBN.png` - Task 2: Get book details by ISBN
![Paradise Nursery Preview](/public/img/2-gedetailsISBN.png)

- `3-getbooksbyauthor.png` - Task 3: Get books by author
![Paradise Nursery Preview](/public/img/3-getbooksbyauthor.png)

- `4-getbooksbytitle.png` - Task 4: Get books by title
![Paradise Nursery Preview](/public/img/4-getbooksbytitle.png)

- `5-getbookreview.png` - Task 5: Get book reviews
![Paradise Nursery Preview](/public/img/5-getbookreview.png)

- `6-register.png` - Task 6: User registration
![Paradise Nursery Preview](/public/img/6-register.png)

- `7-login.png` - Task 7: User login
![Paradise Nursery Preview](/public/img/7-login.png)

- `8-reviewadded.png` - Task 8: Add/modify review
![Paradise Nursery Preview](/public/img/8-reviewadded.png)

- `9-deletereview.png` - Task 9: Delete review
![Paradise Nursery Preview](/public/img/9-deletereview.png)

- `task10.png` - Task 10: Async get all books
![Paradise Nursery Preview](/public/img/task10.png)

- `task11.png` - Task 11: Promise-based get by ISBN
![Paradise Nursery Preview](/public/img/task11.png)

- `task12.png` - Task 12: Async get by author
![Paradise Nursery Preview](/public/img/task12.png)

- `task13.png` - Task 13: Promise-based get by title
![Paradise Nursery Preview](/public/img/task13.png)

## ✨ Features

### Authentication & Security

- **JWT Authentication**: Secure token-based authentication system
- **Session Management**: Express-session with custom fingerprint
- **User Registration**: Secure user registration with validation
- **Protected Routes**: Middleware-based route protection

### Book Catalog Management

- **Complete Book Database**: Pre-loaded with classic literature
- **ISBN-based Lookup**: Fast book retrieval by ISBN
- **Author Search**: Filter books by author name
- **Title Search**: Find books by title
- **Review System**: User-generated book reviews

### Async Implementation

- **Promise Callbacks**: Modern JavaScript Promise patterns
- **Async/Await**: Clean asynchronous code implementation
- **Dual Implementation**: Both sync and async versions of core features
- **Error Handling**: Comprehensive error management

## 🔧 Technologies Used

- **Backend**: Node.js, Express.js
- **Authentication**: JSON Web Tokens (JWT), Express-Session
- **HTTP Client**: Axios for async operations
- **Development**: Nodemon for hot reloading
- **Package Manager**: npm

## 🚀 Getting Started

### Installation

1. **Clone the repository**

```bash
git clone <https://github.com/SkyJirayuDev/ibm-backend-express-book-reviews.git>
cd final_project
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm start
```

4. **Server will run on**

```
http://localhost:5000
```

## 🧪 Testing

### Automated Testing

```bash
# Run comprehensive endpoint tests
node test_endpoints.js
```

### Manual Testing with Postman

1. Import the API endpoints into Postman
2. Test each endpoint according to the task requirements
3. Take screenshots for peer review submission
4. Save screenshots with specified naming convention

### Testing with cURL

Use the provided cURL commands above for command-line testing

## 🎯 Learning Outcomes

Through this comprehensive final project, I demonstrated mastery of:

- **RESTful API Design** with proper HTTP methods and status codes
- **JWT Authentication** and session management implementation
- **Express.js Middleware** for authentication and request processing
- **Asynchronous JavaScript** with both Promises and async/await
- **Error Handling** and proper API response formatting
- **Node.js Backend Development** best practices
- **API Testing** with both automated scripts and manual tools
- **Code Organization** with modular router structure

## 🔒 Security Features

- **JWT Token Validation**: Secure authentication mechanism
- **Session-based Authorization**: Express-session integration
- **User Input Validation**: Proper request validation
- **Protected Routes**: Middleware-based access control
- **Password Security**: Secure user credential handling

## 🙏 Acknowledgments

- **IBM Skills Network** for comprehensive Node.js and Express training
- **Course Instructors** for detailed project requirements and guidance
- **Peer Reviewers** for collaborative learning experience
- **Open Source Community** for excellent documentation and resources

## 👨‍💻 About the Developer

Created by **SkyJirayuDev** for the IBM Frontend Development with React course.

- ➡️ [My LinkedIn Profile](https://www.linkedin.com/in/skyjirayu)

- ➡️ [My Portfolio Website](https://sky-personal-portfolio-website.netlify.app)

- ➡️ [My Certificate](https://coursera.org/share/649d197689c414f972f623f8d1a7e5bd)
