import { error } from '@sveltejs/kit';
import { pool } from '$lib/db.js';

export async function load({ params }) {
	const slug = params.id;

	const [rows] = await pool.query('SELECT * FROM posts WHERE slug = ?', [slug]);

	if (rows.length === 0) {
		throw error(404, 'Пост не найден');
	}

	return {
		post: rows[0]
	};
}
