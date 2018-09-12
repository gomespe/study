function checkUsersValid(goodUsers){
    return function allUsersValid(submittedUsers){
        return submittedUsers.every(function (item){
            return goodUsers.some(function belongs(element){
                return element.id === item.id
            })
        })
    }
}

module.exports = checkUsersValid