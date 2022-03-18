
import UserProfile from '../components/UserProfile';

export const users = [
    { uid: 0, name: 'anna', admin: true },
    { uid: 1, name: 'berit', admin: false, path: "/images/berit.jpg", firstname: "Berit", lastname: "Bok", age: "50" },
    { uid: 2, name: 'bertil', admin: false },
    { uid: 3, name: 'christina', admin: false, path: "/images/christina.jpg", firstname: "Christina", lastname: "Tech", age: "40" },
    { uid: 4, name: 'nina', admin: false, path: "/images/Nina.jpg", firstname: "Nina", lastname: "Nice", age: "36" },
];

export function getUserFirstName(name) {
    const u = getUserInfo(name);
    return u.firstname;
}

export function getUserFullName(name) {
    const u = getUserInfo(name);
    return u.firstname + ' ' + u.lastname;
}

export function isUser(name) {
    if (!name) {
        new Error('Argument not provided');
    }
    for (let u of users) {
        if (u.name === name) {
            return true;
        }
    }
    return false;
}

export function isUserAdmin(name) {
    if (isUser(name)) {
        const u = getUserInfo(name);
        return (u.admin === true);
    } else {
        return false;
    }
}

export function getUserRank(name) {
    if (!name) {
        new Error('Argument not provided');
    }
    if (isUser(name)) {
        return (isUserAdmin(name) ? "organizer" : "user")
    } else {
        return "non-user"
    }
}

export function getUserInfo(name) {
    for (let u of users) {
        if (u.name === name) {
            return u;
        }
    }
    new Error('User not found');
}
