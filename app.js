const userOne = {
    role: 'admin',
    firstname: 'Настя',
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

if (checkAccess(userOne, 'admin')) {
    showSuccessMessage (userOne);
}