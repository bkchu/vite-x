import { Navbar } from 'components';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="my-3 text-4xl font-bold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-8xl dark:text-gray-200">
            Vite
            <span className="text-transparent bg-gradient-to-br from-[#4dcaff] via-[#9480ff] to-[#bd34fe] bg-clip-text">
              X
            </span>
          </h1>
          <p className="max-w-screen-md mx-auto text-xl text-gray-600 dark:text-gray-400">
            A simple, DX-focused Vite + ReactJS + TailwindCSS template to hit
            the ground running
          </p>
          <a
            href="https://github.com/bkchu/vite-x/generate"
            rel="noopener noreferrer"
            className="text-xl inline-block px-12 py-4 mt-24 text-black rounded-full ring-expand bg-gradient-to-br from-[#4dcaff] via-[#9480ff] to-[#bd34fe]"
          >
            Use this Template
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
