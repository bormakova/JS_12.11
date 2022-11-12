const userOne = {
    role: 'admin',
    firstname: 'Настя',
}

const userTwo = {
    role: 'manager',
    firstname: 'Саша',
}

function getDefaultRole() {
    //тут какие-то сложные асинхронные действия.
    return 'admin'
}

function checkAccess(user, role = getDefaultRole()) {
    return user.role === role; //может быть много сложной логики
}

function showSuccessMessage (user) {
    console.log('################');
    console.log(`# Доступ открыт ${user.firstname} #`);
    console.log('################');
}

function showErrorMessage (user) {
    console.log('!!!!!!!!!!!!!!!!!!!!!');
    console.log(`! Доступ закрыт ${user.firstname} !`);
    console.log('!!!!!!!!!!!!!!!!!!!!!');
}

if (checkAccess(userOne, 'admin')) {
    showSuccessMessage (userOne);
} else {
    showErrorMessage(userOne)
}

function checkAccessAndShowMessage(user, role) {
    if (checkAccess(user, role)) {
        showSuccessMessage(user);
    } else {
    showErrorMessage(user);
    }
}

checkAccessAndShowMessage(userOne, 'admin')
checkAccessAndShowMessage(userTwo, 'manager')

const repeatString = (text, repeatCount) => {
    for (let i0; i = 0; i < repeatCount; i++) {
        console.log();
    }
}

repeatString('Привет')

