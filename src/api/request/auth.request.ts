import { LOGIN_ROUTE } from '../routing/route';
import { UserLogin } from '../model/user.login';
import { FacebookLogin } from '../model/facebook.login';

export const login = async (userData: UserLogin | FacebookLogin) => {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(userData);
    const method = 'POST';
    try {
        const response = await fetch(LOGIN_ROUTE, { method, body, headers });
        return await response.json();
    } catch (err) {
        throw err;
    }
};
