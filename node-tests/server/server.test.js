const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {
	describe('GET /', () => {
		it('should return a 404 error', (done) => {
			request(app)
				.get('/')
				.expect(404)
				.expect((res) => {
					expect(res.body).toInclude({
						error: 'Page not found'
					});
				})
				.end(done)
		});
	});

	describe('GET /users', () => {
		it('should return my user object', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						name: 'Mandy',
						age: 23
					});
				})
				.end(done);
		});
	});
});