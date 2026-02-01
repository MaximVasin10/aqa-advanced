const api = require('./axiosConfig');

class PostController {
    async getAllPosts() {
        const response = await api.get('/posts');
        return response; // Повертаємо весь response, щоб у тестах перевірити статус
    }

    async getPostById(id) {
        const response = await api.get(`/posts/${id}`);
        return response;
    }

    async createPost(data) {
        const response = await api.post('/posts', data);
        return response;
    }

    async deletePost(id) {
        const response = await api.delete(`/posts/${id}`);
        return response;
    }

    async updatePostField(id, fieldName, value) {
        const response = await api.patch(`/posts/${id}`, {
            [fieldName]: value
        });
        return response;
    }
}

module.exports = new PostController();