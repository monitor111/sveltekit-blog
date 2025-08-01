import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
const user = cookies.get('user');

if (!user) {
    throw redirect(303, '/auth/login');
}

return {
    user
};
}
