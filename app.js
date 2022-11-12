const userOne = {
    role: 'admin',
    firstname: 'Настя',
}

const userTwo = {
    role: 'manager',
    firstname: 'Саша',
}

function checkAccess(user, role) {
    if (user.role === role){
        return true;
    } 
    return false;
    //return user.role === role; может быть много сложной логики
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