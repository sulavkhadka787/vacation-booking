
const LoginRegForm=()=>{
    
    return(
        <div>
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" />
                </div>
            </form>
        </div>
    );
}

export default LoginRegForm;