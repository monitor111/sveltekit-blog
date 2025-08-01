// src/routes/admin/posts/+server.js
import { pool } from '$lib/db.js';
import { json } from '@sveltejs/kit';

export async function DELETE({ request }) {
	try {
		const { id } = await request.json();

		if (!id) {
			return json({ success: false, error: 'Missing post ID' }, { status: 400 });
		}

		const [result] = await pool.query('DELETE FROM posts WHERE id = ?', [id]);

		if (result.affectedRows === 0) {
			return json({ success: false, error: 'Post not found' }, { status: 404 });
		}

		return json({ success: true });
	} catch (error) {
		return json({ success: false, error: error.message }, { status: 500 });
	}
}
