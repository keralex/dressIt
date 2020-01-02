import React from 'react';
import './signPage.styles.scss';
import SignIn from '../../components/sign-in/signIn.component';
import SignUp from '../../components/sign-up/sign-up.components';


const SignPage = () => (
    <div className='sign-in-and-sign-up'>
<SignIn/>
<SignUp/>
    </div>


);
export default SignPage;