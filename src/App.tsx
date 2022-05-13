import { DarkModeSwitcher } from 'components';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <DarkModeSwitcher />
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
            Start with
          </h2>
          <p className="my-3 text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-8xl dark:text-gray-100">
            ViteX
          </p>
          <p className="text-xl text-gray-400">Start building for free.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
