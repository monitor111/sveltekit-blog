// src/routes/admin/posts/+page.server.js
import { pool } from '$lib/db.js';

export async function load() {
const [rows] = await pool.query('SELECT id, title, category FROM posts');
return {
    posts: rows
};
}
