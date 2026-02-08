const api = require('../api/controllers');


test('Get all POSTs and check the length', async () => {
    const response = await api.getAllPosts();
    const posts = response.data;
    expect(posts).toHaveLength(100);
});

test('Get the first post and check userId, Id availability', async () => {
    const response = await api.getPostById(1);
    const post = response.data;
    expect(post).toHaveProperty("userId");
    expect(post).toHaveProperty("id");
});

test('Create first post', async () => {
    const payload = {
        title: "my first post",
        body: "Here I will tell my story about JS learning",
        userId: 999
    };
    const response = await api.createPost(payload);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(payload.title);
});

test('Update the first post title', async () => {
    const response = await api.updatePostField(1, 'title', 'My new title hehe');
    console.log(response.data);
    expect(response.status).toBe(200);
});

test('Delete the last post', async () => {
    const response = await api.deletePost(100);
    expect(response.status).toBe(200);
}); 