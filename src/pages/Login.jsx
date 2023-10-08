import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import './pages.css';

//images
import logo from '../assets/logo.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate(); //네비게이트훅

    // 일반 로그인
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setSuccess('로그인에 성공하였습니다. 메인 페이지로 이동합니다.');
            setTimeout(() => {
                navigate('/'); // 로그인 성공 하면 메인페이지로
            }, 2000);
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setError('해당 계정을 찾을 수 없습니다. 회원가입 페이지로 이동합니다.');
                setTimeout(() => {
                    navigate('/signup'); // 계정이 없으면 회원가입 페이지로
                }, 2000);
            } else {
                setError('비밀번호가 틀립니다. 다시 시도해 주세요.');
            }
        }
    };

    // 구글 로그인
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            setSuccess('Google 로그인에 성공하였습니다. 메인 페이지로 이동합니다.');
            setTimeout(() => {
                navigate('/'); // 구글 로그인 성공 하면 메인페이지로
            }, 2000);
        } catch (error) {
            setError('Google 로그인에 실패했습니다.');
        }
    };

    return (
        <section className="login-area relative max-w-set mt-37.5 mx-auto pt-4 px-6 pb-25">
            <h2 className="section-title flex flex-col justify-center items-center">
                <span className="block text-40 mb-1">WELCOME!</span>
                <img src={logo} alt="logo image" className="w-30" />
            </h2>
            <div className="login-box relative w-112.5 h-125 px-12 py-7 mx-auto my-12 rounded-lg shadow-custom">
                <div className="social-area my-5 mx-auto text-center">
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="relative w-87.5 h-12.5 shadow-md bg-white "
                    >
                        <span>구글 로그인</span>
                    </button>
                </div>
                <p className="txt relative text-center my-12 mx-auto">또는</p>
                <form className="login-form w-87.5 mt-5 mx-auto mb-10" onSubmit={handleLogin}>
                    <div>
                        <input
                            type="email"
                            id="email-login"
                            placeholder="koita에 가입된 이메일 주소"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-87.5 h-12.5 p-4.5 mb-5 rounded-lg shadow-md "
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password-login"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-87.5 h-12.5 p-4.5 mb-5 rounded-lg shadow-md"
                        />
                    </div>
                    <button
                        type="submit"
                        id="btn-login"
                        className="w-87.5 h-12.5 p-4.5 mb-5 text-white font-bold rounded-lg shadow-md bg-set-brown"
                    >
                        로그인
                    </button>
                </form>
                {success && <p className="success">{success}</p>}
                {error && <p className="error">{error}</p>}
                <Link
                    to="/signup"
                    id="btn-signup"
                    className="btn btn-signup-move absolute right-14 bottom-8 py-2 px-3 rounded-lg"
                >
                    <span>회원가입</span>
                </Link>
            </div>
        </section>
    );
}

export default Login;
