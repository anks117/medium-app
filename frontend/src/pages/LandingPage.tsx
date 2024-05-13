
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            {/* Navbar */}
            <nav className="bg-white p-6 shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <a className="font-bold text-xl text-gray-800" href="#">Medium App</a>
                    <div>
                        <Link to={'/signup'} className="text-gray-600 hover:text-gray-800 px-3 py-2">Signup</Link>
                        <Link to={'/signin'} className="text-gray-600 hover:text-gray-800 px-3 py-2">Login</Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="container mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">Welcome to Medium App</h1>
                    <p className="text-lg text-gray-600 mt-4">Your one-stop platform for reading and writing engaging articles.</p>
                    <div className="mt-8">
                        <Link to={'/signup'} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Get Started</Link>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex items-center">
                        <img src="https://via.placeholder.com/300" alt="Feature 1" className="mr-4" />
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">Feature 1</h2>
                            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src="https://via.placeholder.com/300" alt="Feature 2" className="mr-4" />
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">Feature 2</h2>
                            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-300 p-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Medium App. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
