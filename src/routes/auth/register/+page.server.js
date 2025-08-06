import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { pool } from '$lib/db';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const phone = formData.get('phone');

    if (!name || !email || !password || !phone) {
      return fail(400, { error: 'Все поля обязательны' });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const sql = 'INSERT INTO User (name, email, password, phone) VALUES (?, ?, ?, ?)';
      const [result] = await pool.execute(sql, [name, email, hashedPassword, phone]);
      
    } catch (error) {
      console.error('Ошибка при сохранении пользователя:', error);
      return fail(500, { error: 'Не удалось создать пользователя' });
    }

    throw redirect(303, '/admin');
  }
};




