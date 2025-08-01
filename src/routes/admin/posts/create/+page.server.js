import { pool } from '$lib/db';
import fs from 'fs/promises';
import path from 'path';
import { randomUUID } from 'crypto';

/** Простой генератор slug из заголовка */
function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // убрать спецсимволы
    .replace(/\s+/g, '-')     // пробелы заменить на тире
    .replace(/-+/g, '-');     // двойные тире заменить на одно
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();

    const title = data.get('title');
    const content = data.get('content');
    const image = data.get('image');

    if (!title || !content || !image || typeof image.name !== 'string') {
      return { error: 'Заполните все поля и загрузите изображение.' };
    }

    const slug = generateSlug(title);

    // Сохраняем файл
    const fileName = `${randomUUID()}_${image.name}`;
    const uploadDir = path.resolve('static/uploads');
    const filePath = path.join(uploadDir, fileName);

    try {
      await fs.mkdir(uploadDir, { recursive: true });
      const arrayBuffer = await image.arrayBuffer();
      await fs.writeFile(filePath, Buffer.from(arrayBuffer));

      const imageUrl = `/uploads/${fileName}`;

      await pool.execute(
        `INSERT INTO posts 
          (title, slug, excerpt, content, category, image_url, published_at, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW(), NOW())`,
        [
          title,
          slug,
          title,    // excerpt = title
          content,
          '',       // пока категория не используется
          imageUrl
        ]
      );

      return { success: true };
    } catch (err) {
      console.error('Ошибка при добавлении поста:', err);
      return { error: 'Ошибка при сохранении поста или файла.' };
    }
  }
};
