export const isValidName = (name)=> {

    const patters = /[0-9/\\|+*!@#$%^&*(){}]+/g

    if (name.match(patters)) {
        return false
    }else {
        return true
    }
}


export const isValidEmail = (message)=> {

    const patters = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (message.match(patters)) {
        return true
    }else {
        return false
    }
}

export const isValidMessage = (message)=> {

    const patters = /[\\]+/g

    if (message.match(patters)) {
        return false
    }else {
        return true
    }
}