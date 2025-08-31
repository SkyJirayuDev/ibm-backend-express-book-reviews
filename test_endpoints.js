const axios = require('axios');

const BASE_URL = 'http://localhost:5000';

async function testEndpoints() {
    console.log('Testing Book Shop API Endpoints...\n');

    try {
        // Task 1: Get all books
        console.log('Task 1: Testing GET /');
        const allBooks = await axios.get(`${BASE_URL}/`);
        console.log('✓ Get all books - Success');
        
        // Task 2: Get book by ISBN
        console.log('\nTask 2: Testing GET /isbn/1');
        const bookByISBN = await axios.get(`${BASE_URL}/isbn/1`);
        console.log('✓ Get book by ISBN - Success');
        
        // Task 3: Get books by author
        console.log('\nTask 3: Testing GET /author/Chinua Achebe');
        const booksByAuthor = await axios.get(`${BASE_URL}/author/Chinua Achebe`);
        console.log('✓ Get books by author - Success');
        
        // Task 4: Get books by title
        console.log('\nTask 4: Testing GET /title/Things Fall Apart');
        const booksByTitle = await axios.get(`${BASE_URL}/title/Things Fall Apart`);
        console.log('✓ Get books by title - Success');
        
        // Task 5: Get book reviews
        console.log('\nTask 5: Testing GET /review/1');
        const bookReviews = await axios.get(`${BASE_URL}/review/1`);
        console.log('✓ Get book reviews - Success');
        
        // Task 6: Register user
        console.log('\nTask 6: Testing POST /register');
        const registerUser = await axios.post(`${BASE_URL}/register`, {
            username: 'testuser',
            password: 'testpass'
        });
        console.log('✓ Register user - Success');
        
        // Task 7: Login user
        console.log('\nTask 7: Testing POST /customer/login');
        const loginUser = await axios.post(`${BASE_URL}/customer/login`, {
            username: 'testuser',
            password: 'testpass'
        });
        console.log('✓ Login user - Success');
        
        // Tasks 10-13: Async versions
        console.log('\nTask 10: Testing GET /async/ (Promise-based get all books)');
        const asyncAllBooks = await axios.get(`${BASE_URL}/async/`);
        console.log('✓ Async get all books - Success');
        
        console.log('\nTask 11: Testing GET /async/isbn/1 (Promise-based get by ISBN)');
        const asyncBookByISBN = await axios.get(`${BASE_URL}/async/isbn/1`);
        console.log('✓ Async get book by ISBN - Success');
        
        console.log('\nTask 12: Testing GET /async/author/Chinua Achebe (Async/await get by author)');
        const asyncBooksByAuthor = await axios.get(`${BASE_URL}/async/author/Chinua Achebe`);
        console.log('✓ Async get books by author - Success');
        
        console.log('\nTask 13: Testing GET /async/title/Things Fall Apart (Promise-based get by title)');
        const asyncBooksByTitle = await axios.get(`${BASE_URL}/async/title/Things Fall Apart`);
        console.log('✓ Async get books by title - Success');
        
        console.log('\n🎉 All endpoints tested successfully!');
        
    } catch (error) {
        console.error('❌ Error testing endpoints:', error.response?.data || error.message);
    }
}

// Run tests
testEndpoints();