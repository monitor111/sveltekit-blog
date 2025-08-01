import { redirect } from '@sveltejs/kit';

export const POST = async ({ cookies }) => {
    cookies.delete('user', { path: '/' });
throw redirect(303, '/');
};
