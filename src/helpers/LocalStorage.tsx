interface IUser {
    login: string;
    email: string;
    password: string;
}

export function addNewUser(login: string, email: string, password: string) {
    const stored = localStorage.getItem('users');
    const arr = JSON.parse(stored ?? '[]'); 

    const newArr = [
        ...arr,
        { login, email, password }
    ];

    localStorage.setItem('users', JSON.stringify(newArr));
    userLogIn(login);
}

export function checkLogin(login: string): boolean {
    const stored = localStorage.getItem('users');
    const users: IUser[] = JSON.parse(stored ?? '[]');

    return !users.some(user => user.login === login);
}

export function checkUserLogIn(login: string, password: string): boolean {
    const stored = localStorage.getItem('users');
    const users: IUser[] = JSON.parse(stored ?? '[]');

    return users.some(user =>
        user.login === login && user.password === password
    );
}

export function userLogIn(login: string) {
    localStorage.setItem('active-user', login);
}

export function userLogOut() {
    localStorage.removeItem("active-user");
}