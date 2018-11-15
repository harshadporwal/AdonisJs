const InvalidAccessException = use('App/Exceptions/InvalidAccessException');
const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException');

class AuthorizationService{
    verifyPermission(resource, user){
        if(!resource){
            throw new ResourceNotExistException();
        }
        if(resource.user_id !==user.id){
            console.log('invalid access');
            throw new InvalidAccessException(); //todo: invalidaccess error
        }
    }
}

module.exports = new AuthorizationService();