class UserAuth
{
    public name:string;
    public token:string;

    UserAuth(name: string,token: string){
        this.name = name;
        this.token = token;
    }
}



export default UserAuth;