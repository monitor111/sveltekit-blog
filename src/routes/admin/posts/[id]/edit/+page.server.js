import { pool } from '$lib/db';
import fs from 'fs/promises';
import path from 'path';
import { error, fail } from '@sveltejs/kit';

/** Загрузка поста по ID */
export async function load({ params }) {
  const [rows] = await pool.execute('SELECT * FROM posts WHERE id = ?', [params.id]);

  if (rows.length === 0) {
    throw error(404, 'Пост не найден');
  }

  return {
    post: rows[0]
  };
}

/** Обработка формы редактирования */
export const actions = {
  default: async ({ request, params }) => {
    const data = await request.formData();
    const title = data.get('title');
    const content = data.get('content');
    const image = data.get('image');

    if (!title || !content) {
      return fail(400, { error: 'Заполните заголовок и контент.' });
    }

    try {
      let query = `
        UPDATE posts 
        SET title = ?, content = ?, updated_at = NOW()
        WHERE id = ?`;
      let values = [title, content, params.id];

      // если пришло новое изображение
      if (image && typeof image.name === 'string') {
        const fileName = `${Date.now()}_${image.name}`;
        const uploadDir = path.resolve('static/uploads');
        const filePath = path.join(uploadDir, fileName);
        await fs.mkdir(uploadDir, { recursive: true });
        const arrayBuffer = await image.arrayBuffer();
        await fs.writeFile(filePath, Buffer.from(arrayBuffer));
        const imageUrl = `/uploads/${fileName}`;

        query = `
          UPDATE posts 
          SET title = ?, content = ?, image_url = ?, updated_at = NOW()
          WHERE id = ?`;
        values = [title, content, imageUrl, params.id];
      }

      await pool.execute(query, values);
      return { success: true };
    } catch (err) {
      console.error('Ошибка при обновлении поста:', err);
      return fail(500, { error: 'Ошибка при обновлении.' });
    }
  }
};
