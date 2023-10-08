import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import './components.css'

//images
import logo from '../assets/logo.png'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			const menuElement = document.querySelector('.menu');
			const buttonElement = document.querySelector('.btn-menu');
		
			if (menuElement && !menuElement.contains(event.target) && !buttonElement.contains(event.target)) {
				setIsMenuOpen(false);
			}
		};
	
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);
	

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUserLoggedIn(true);
            } else {
                setIsUserLoggedIn(false);
            }
        });

        return unsubscribe;
    }, []);

    const handleLogOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

	return (
		//0.5 > 2px , 1 > 4px
		<div className="header-inn max-w-set h-25 mx-auto px-6 py-2.5">
			<div className="top-bar flex justify-end">
				<div className="login-section flex justify-between text-center">
                    {isUserLoggedIn === null ? (
                        <div>Loading...</div> 
                    ) : isUserLoggedIn ? (
                        <button onClick={handleLogOut} id="header-btn-login" className="btn btn-login-link">로그아웃</button>
                    ) : (
                        <>
                            <Link to="/login" id="header-btn-login" className="btn btn-login-link mr-5">로그인</Link>
                            <Link to="/signup" id="header-btn-signup" className="btn btn-signup-link">회원가입</Link>
                        </>
                    )}
                </div>
			</div>
		
			<div className="header-main-bar flex items-center justify-between text-center">
				<h1 className="logo">
					<Link to="/" className="w-30 h-12"><img src={logo} alt="logo_header" /></Link>
				</h1>
				<nav className="nav">
					<button type="button" className="btn btn-menu w-12.5 h-12.5 text-2xl ml-8 hover:bg-gray-300 px-2 py-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<strong className="blind">메뉴 오픈</strong>
						<span className="open">
							<i className="fa-solid fa-bars"></i>
						</span>
					</button>
					<ul className={`menu absolute  top-25 left-50 w-87.5 h-auto py-10 px-14 text-left shadow-md transition-all duration-500 rounded-b bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>
						<li>
							<p className="menu-title">쇼핑</p>
							<ul>
								<li><Link to="/festivalProduct">마쯔리 추천템</Link></li>
								<li><Link to="/oitaProduct">오이타 명물템</Link></li>
							</ul>
							</li>
						<li>
							<p className="menu-title">오이타 소식</p>
							<ul>
								<li><Link to="/speciality">오이타 명물</Link></li>
								<li><Link to="/tourist">오이타 명소</Link></li>
							</ul>
						</li>
						<li>
							<p className="menu-title">오이타 마쯔리</p>
							<ul>
								<li><Link to="/oitaMaturi">마쯔리 일정 및 안내</Link></li>
							</ul>
						</li>
						<li>
							<p className="menu-title">문의사항</p>
							<ul>
								<li><Link to="/contact">문의사항</Link></li>
							</ul>
						</li>
					</ul>
				</nav>
		
				<div className="search-area flex-1">
					<form action="../pages/search-results.html" method="GET" className="w-87.5 h-11 px-2 mx-auto border-2 border-set-orange rounded-lg">
						<div className="search-inn flex items-center justify-center">
							<input
								type="search"
								className="search-input w-75 h-10 bg-transparent focus:outline-none"
								id="search"
								name="q"
								title="검색어를 입력해 주세요."
								placeholder="검색어를 입력해 주세요."
								maxLength="255"
								autoComplete="off"
								data-atcmp-element=""
							/>
							<button type="submit" className="btn btn-search w-10 h-10 text-lg bg-transparant">
								<strong className="blind sr-only">검색</strong>
								<i className="fa-solid fa-magnifying-glass"></i>
							</button>					
						</div>
						
						<div className="search-suggestion"></div>
					</form>
				</div>

				<div className="cart mr-5">
					<Link to="/cart" id="cart-link" className="flex items-center pl-2">
						<span>장바구니</span>
						<i className="fa-solid fa-cart-shopping"></i>
						<em id="cart-count" className="inline-block relative -top-2 right-0 px-1 text-white text-sm font-semibold leading-4 rounded-full bg-set-orange">0</em>
					</Link>
				</div>
		
				<div className="my-page ml-5">
					<Link to="/wishList" id="wish-list-link" className="btn-wish-list flex items-center pl-2">
						<span>마이페이지</span>
						<i className="fa-solid fa-user"></i>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header;
