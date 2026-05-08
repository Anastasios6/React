import axios from 'axios';
import api from './../config/Properties';
export const getUsers = async () => {
    try {
        const result = await fetch(`${api.root}/users`);
        const json = await result.json();
        return await Promise.resolve(json);

    } catch (error) {
        return await Promise.reject(error);
    }
};

export const deleteUsers = async (userId) => {
    try {
        const result = await fetch(`${api.root}/users/${userId}`, { method: 'DELETE' });
        const json = await result.json();

        return await Promise.resolve(userId);
    }
    catch (err) {
        return await Promise.reject(err);
    }
};