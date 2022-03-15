export const users = [
    { uid: 0, name: 'anna', admin: true },
    { uid: 1, name: 'berit', admin: false },
    { uid: 2, name: 'bertil', admin: false }
];

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
        const u = getUserObject(name);
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

function getUserObject(name) {
    for (let u of users) {
        if (u.name === name) {
            return u;
        }
    }
    new Error('User not found');
}
