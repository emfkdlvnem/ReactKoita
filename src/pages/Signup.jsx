import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import './pages.css';

// images
import logo from '../assets/logo.png';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    useEffect(() => {
        if (showPopup) {
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
        }
    }, [showPopup]);
    const handleSignup = async (e) => {
        e.preventDefault();

        const passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordValidation.test(password)) {
            setPopupMessage(
                "비밀번호는 최소 6자 이상이어야 하며, 숫자와 알파벳을 각각 하나 이상 포함해야 합니다."
            );
            setShowPopup(true);
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setError('');
            setPopupMessage('회원가입에 성공하였습니다. 메인 페이지로 이동합니다.'); 
            setShowPopup(true);
            setTimeout(() => {
                window.location.href = '/';
            }, 2000);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('이미 사용중인 이메일입니다.');
                setShowPopup(true);
            } else {
                setError('회원가입에 실패했습니다.');
                setShowPopup(true);
            }
        }
    };

    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            if (result.user) {
                setPopupMessage('구글 회원가입에 성공하였습니다. 메인 페이지로 이동합니다.'); 
                setShowPopup(true);
                setTimeout(() => {
                    window.location.href = '/';
                }, 2000);
            } else {
                setError('Google 회원가입에 실패했습니다.');
            }
        } catch (error) {
            if (error.code === 'auth/account-exists-with-different-credential') {
                setError('이미 가입된 이메일입니다.');
            } else {
                setError('Google 회원가입에 실패했습니다.');
            }
            setShowPopup(true);
        }
    };
    

    return (
        <section className="signup-area relative max-w-set mt-37.5 mx-auto pt-4 px-6 pb-25">
            <h2 className="section-title flex flex-col justify-center items-center">
                <span className="block text-40 mb-1">회원가입</span>
                <img src={logo} alt="logo" className="w-30"/>
            </h2>
            <div className="signup-box relative w-112.5 h-125 px-12 py-7 mx-auto my-12 rounded-lg shadow-custom">
                <p className="title text-lg font-bold mb-7">가입 정보 입력</p>
                <form className="signup-form w-87.5 mt-5 mx-auto mb-10" onSubmit={handleSignup}>
                    <div className="email flex items-center justify-between mb-7">
                        <span className="block font-bold leading-10">이메일 주소</span>
                        <input 
                            className="w-65  h-12 rounded-md p-2.5"
                            type="email" 
                            id="email-signup" 
                            placeholder="이메일" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="password flex items-center justify-between mb-7">
                        <span className="block font-bold leading-10">비밀번호</span>
                        <input 
                            className="w-65  h-12 rounded-md p-2.5"
                            type="password" 
                            id="password-signup" 
                            placeholder="비밀번호" 
                            value={password}  
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" id="btn-signup" className="w-87.5 h-12.5 font-bold bg-set-brown text-white mt-2.5">회원가입 하기</button>
                </form>
                <div className="social-signup w-87.5 mt-5 mx-auto mb-10">
                    <p className="social-title relative text-center mb-7">소셜로 가입하기</p>
                    <button className="relative w-87.5 h-12.5 bg-white" id="btn-google-signup" onClick={handleGoogleSignup}>구글 가입하기</button>
                </div>

                <Link to="/login" id="btn-login" className="btn btn-login-move items-center absolute left-14 bottom-2 px-3 py-2 rounded-md">
                    <i className="fa-solid fa-arrow-left-long"></i>
                    <span>로그인으로 이동하기</span>
                </Link>
            </div>
            {showPopup && (
                <div className="popup">
                    {popupMessage || error}
                    <button onClick={() => setShowPopup(false)}>닫기</button>
                </div>
            )}
        </section>
    )
}

export default Signup;
