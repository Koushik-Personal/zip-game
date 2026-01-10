import { Link, Outlet } from 'react-router-dom';

export default function Game() {
    return (
        <div className="min-h-[80vh] p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-semibold">Game Page</h1>
                <p className="mt-2">Welcome to the game! Choose a level to start.</p>

                <div className="mt-6 flex gap-3">
                    <Link
                        to="level/1"
                        className="bg-[#0b67ff] text-white px-4 py-2 rounded-lg"
                    >
                        Play Level 1
                    </Link>
                </div>

                <div className="mt-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}