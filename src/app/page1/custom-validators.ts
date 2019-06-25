export class CustomValidators{
    static mustMatch(typedPassword, typedReturnedPassword){
        return (control)=>{
            let password = control.get(typedPassword).value;
            let repeatedPassword = control.get(typedReturnedPassword).value;
            return password == repeatedPassword ? null : {mustMatch:true};
        }
    }
}