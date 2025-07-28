import React from "react";

const Service = () => {
  return (
    <div>
      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Comprehensive IT solutions designed to meet your unique business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web & App Development */}
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Web & App Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Custom web applications and mobile apps built with modern technologies to enhance user experience and drive business growth.</p>
            </div>

            {/* Cloud Solutions */}
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">Scalable cloud infrastructure and migration services to optimize performance, reduce costs, and ensure reliable data management.</p>
            </div>

            {/* Cybersecurity */}
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-600 dark:text-gray-300">Advanced security solutions to protect your digital assets, ensure compliance, and safeguard against evolving cyber threats.</p>
            </div>

            {/* IT Consulting */}
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">IT Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300">Strategic technology consulting to optimize your IT infrastructure, streamline operations, and align technology with business goals.</p>
            </div>

            {/* Data Analytics */}
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Data Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">Turn your data into actionable insights with advanced analytics solutions that drive informed decision-making and business intelligence.</p>
            </div>

            {/* Digital Transformation */}
            <div className="bg-white dark:bg-neutral-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-600 dark:text-gray-300">Comprehensive digital transformation strategies to modernize your business processes and stay competitive in the digital era.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
