import React from 'react';


const UserForm = (props) => {

    const {inputs, setInputs} = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        });
    };

    return(

        <form className="col-5 mx-auto my-5">
            <div>
            <div className="form-group">
                <label>First Name: </label> 
                <input 
                    type="text" 
                    className="form-control" 
                    name="firstName" 
                    onChange={onChange}
                />
            </div>

            <div className="form-group">
                <label>Last Name: </label> 
                <input 
                    type="text" 
                    className="form-control" 
                    name="lastName" 
                    onChange={onChange}
                />
            </div>

            <div className="form-group">
                <label>Email: </label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="email" 
                    onChange={onChange}
                />
            </div>

            <div className="form-group">
                <label>Password: </label>
                <input 
                    type="password" 
                    className="form-control" 
                    name="password" 
                    onChange={onChange}
                />
            </div>

            <div className="form-group">
                <label>Confirm Password: </label>
                <input 
                    type="password" 
                    className="form-control" 
                    name="confirmPassword" 
                    onChange={onChange} 
                />
            </div>

            {/* <input type="submit" value="Create User"/> */}
            </div>
        </form>

    );
};

export default UserForm;