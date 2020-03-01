export function getUserInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ user: 'Tony' });
        }, 2000);
    });
}

export function createUser() {
    return Promise.resolve('done');
}
