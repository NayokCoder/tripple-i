import React from "react";

const Podcast = () => {
  return (
    <div>
      {/* Podcast Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Talk Podcast</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">Stay ahead of the curve with insights from industry leaders, technology trends, and innovative solutions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Featured Episode */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-blue-200 uppercase tracking-wide">Featured Episode</div>
                  <div className="text-xl font-semibold">Episode 47</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">The Future of AI in Business Operations</h3>
              <p className="text-blue-100 mb-6">Join us as we explore how artificial intelligence is revolutionizing business processes, from automation to predictive analytics, with guest expert Dr. Sarah Chen from TechForward Institute.</p>

              {/* Podcast Player Interface */}
              <div className="bg-black/30 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <button className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                    <div>
                      <div className="font-medium text-sm">Now Playing</div>
                      <div className="text-xs text-blue-200">42:15 / 58:30</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-200 hover:text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M6.343 6.343a9.013 9.013 0 000 12.728" />
                      </svg>
                    </button>
                    <button className="text-blue-200 hover:text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: "72%" }}></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full text-sm">AI & Machine Learning</span>
                <span className="bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-sm">Business Strategy</span>
                <span className="bg-green-500/30 text-green-200 px-3 py-1 rounded-full text-sm">Innovation</span>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">Listen Now</button>
            </div>

            {/* Podcast Stats & Subscribe */}
            <div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">50+</div>
                  <div className="text-sm text-blue-200">Episodes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">25K+</div>
                  <div className="text-sm text-blue-200">Monthly Listeners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">4.9⭐</div>
                  <div className="text-sm text-blue-200">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">Weekly</div>
                  <div className="text-sm text-blue-200">New Episodes</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Subscribe & Never Miss an Episode</h3>
                <p className="text-blue-100 mb-6">Get the latest insights delivered directly to your favorite podcast platform</p>

                <div className="grid grid-cols-2 gap-3">
                  <a href="#" className="bg-black/40 hover:bg-black/60 rounded-lg p-3 flex items-center transition-colors">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span className="text-sm">Apple Podcasts</span>
                  </a>

                  <a href="#" className="bg-black/40 hover:bg-black/60 rounded-lg p-3 flex items-center transition-colors">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,7V11.91L15.42,14.42L16.18,13.17L12.5,11.1V7H11Z" />
                    </svg>
                    <span className="text-sm">Spotify</span>
                  </a>

                  <a href="#" className="bg-black/40 hover:bg-black/60 rounded-lg p-3 flex items-center transition-colors">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.9 17.39C17.64 16.59 16.89 16 16 16H15V13A1 1 0 0 0 14 12H8V10H10A1 1 0 0 0 11 9V7H13A2 2 0 0 0 15 5V4.59C19.04 5.57 22 9.04 22 13.26C22 14.78 21.75 16.26 21.3 17.63L17.9 17.39M11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.78 4.21 10.21L9 15V16A2 2 0 0 0 11 18V19.93Z" />
                    </svg>
                    <span className="text-sm">Google Podcasts</span>
                  </a>

                  <a href="#" className="bg-black/40 hover:bg-black/60 rounded-lg p-3 flex items-center transition-colors">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.12 2.58-.08.55-.13 1.14-.13 1.25h2c.05-.92.18-1.76.44-2.13.43-.62 1.08-.88 1.83-.73.4.08.74.29.96.6.18.26.25.58.18.9-.14.57-.65.97-1.24 1.27-.83.42-1.33.94-1.52 1.71-.11.45-.13.97-.13 1.71h2c0-.3.01-.56.06-.78.08-.34.23-.55.43-.73.32-.29.72-.58 1.04-.89.45-.43.8-.95.8-1.65 0-.78-.34-1.47-.94-1.93-.6-.46-1.37-.67-2.17-.67z" />
                    </svg>
                    <span className="text-sm">More Platforms</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Episodes */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Recent Episodes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Episode 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">46</span>
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Episode 46</div>
                    <div className="text-xs text-blue-300">Dec 15, 2024</div>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Cybersecurity in 2025: What to Expect</h4>
                <p className="text-blue-100 text-sm mb-4">Exploring emerging threats and defense strategies with cybersecurity expert Mike Rodriguez.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-300">45 min</span>
                  <button className="text-blue-400 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Episode 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">45</span>
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Episode 45</div>
                    <div className="text-xs text-blue-300">Dec 8, 2024</div>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Cloud Migration Success Stories</h4>
                <p className="text-blue-100 text-sm mb-4">Real case studies from companies who successfully transitioned to cloud infrastructure.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-300">38 min</span>
                  <button className="text-blue-400 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Episode 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">44</span>
                  </div>
                  <div>
                    <div className="text-sm text-blue-200">Episode 44</div>
                    <div className="text-xs text-blue-300">Dec 1, 2024</div>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Building Scalable Web Applications</h4>
                <p className="text-blue-100 text-sm mb-4">Best practices for developing applications that grow with your business needs.</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-300">52 min</span>
                  <button className="text-blue-400 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg border border-white/30 transition-all duration-300">View All Episodes</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Podcast;
