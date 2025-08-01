import { fail, redirect } from '@sveltejs/kit';
import { pool } from '$lib/db';
import bcrypt from 'bcryptjs';

export async function load({ cookies }) {
  const user = cookies.get('user');
  if (user) {
    throw redirect(303, '/admin');
  }
  return {};
}

export const actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();

    const name = formData.get('name');
    const password = formData.get('password');
    const phone = formData.get('phone');

    if (!name || !password || !phone) {
      return fail(400, { error: 'Все поля обязательны' });
    }

    // Проверяем пользователя в базе
    const sql = 'SELECT * FROM user WHERE name = ? AND phone = ? LIMIT 1';
    const [rows] = await pool.execute(sql, [name, phone]);

    if (rows.length === 0) {
      return fail(401, { error: 'Пользователь не найден' });
    }

    const user = rows[0];

    // Проверяем пароль
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return fail(401, { error: 'Неверный пароль' });
    }

    // Устанавливаем куки для сессии
    cookies.set('user', user.name, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 1 день
    });

    // Успешный вход — редирект на /admin
    throw redirect(303, '/admin');
  }
};
