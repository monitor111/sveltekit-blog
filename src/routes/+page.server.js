import { pool } from '$lib/db';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
const [posts] = await pool.query(
    `SELECT id, title, slug, excerpt, image_url, created_at FROM posts ORDER BY created_at DESC LIMIT 6`
);

console.log('posts from DB:', posts);  // <-- добавьте это

return { posts };
}
