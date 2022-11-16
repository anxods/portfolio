import React from 'react';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Languages from './components/Languages';

function App() {

  return (
	<div className="bg-sky-200 dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
		<div className="max-w-5xl w-11/12 mx-auto">
			<Intro />
			<Portfolio />
			<Timeline />
			<Languages />
			<Footer />
		</div>
	</div>
  )
}

export default App
