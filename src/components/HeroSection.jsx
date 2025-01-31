import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
      <p className="text-xl mb-8">No. 1 Job hunt website.</p>
        <h1 className="text-5xl font-bold mb-4">Search, Apply & Get Your Dream Job</h1>
        <p className="text-xl mb-8">Start your hunt for the best, life-changing career opportunities from here in your selected areas conveniently and get hired quickly.</p>
        <div>
          <Link to="/jobs" className="px-6 py-3 bg-purple-600 text-white rounded-lg mr-4">Browse Jobs</Link>
          <Link to="/post-job" className="px-6 py-3 bg-white text-purple-600 border border-white rounded-lg">Post a Job</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection