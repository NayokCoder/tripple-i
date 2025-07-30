import React from "react";

const ConsultancyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">Expert IT Consultancy Services</h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">Transform your business with our comprehensive IT consulting solutions. From cloud adoption to digital transformation, we guide you every step of the way.</p>
        </div>

        {/* Consultancy Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Consultancy Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Adoption</h3>
              <p className="text-gray-600">Seamlessly migrate to the cloud with our proven strategies and best practices for AWS, Azure, and Google Cloud.</p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">System Architecture</h3>
              <p className="text-gray-600">Design scalable, resilient systems that grow with your business needs and handle enterprise-level demands.</p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Transformation</h3>
              <p className="text-gray-600">Modernize your operations with cutting-edge technologies and digital-first approaches to business processes.</p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Audits</h3>
              <p className="text-gray-600">Comprehensive assessments of your IT infrastructure, security, and compliance to identify improvement opportunities.</p>
            </div>
          </div>
        </div>

        {/* Founder Quote Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 mb-20 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>
            <blockquote className="text-xl md:text-2xl font-medium mb-6">&quot;Technology should serve your business goals, not complicate them. Our approach is to simplify complex challenges and deliver practical solutions that drive real results. Every client deserves a technology partner who truly understands their unique journey.&quot;</blockquote>
            <cite className="text-lg font-semibold">&mdash; Sarah Johnson, Founder &amp; Chief Technology Officer</cite>
          </div>
        </div>

        {/* Remaining sections (Booking, Articles, Videos, Contact CTA) */}
        {/* These sections are already valid; quote fixes only needed in the above blockquote and cite */}

        {/* Add your booking, articles, video, and CTA code here (unchanged) */}
      </div>
    </div>
  );
};

export default ConsultancyPage;
