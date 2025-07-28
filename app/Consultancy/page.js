import React from "react";

const ConsultancyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Expert IT Consultancy Services
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our comprehensive IT consulting solutions. 
            From cloud adoption to digital transformation, we guide you every step of the way.
          </p>
        </div>

        {/* Consultancy Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Consultancy Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Adoption</h3>
              <p className="text-gray-600">
                Seamlessly migrate to the cloud with our proven strategies and best practices for AWS, Azure, and Google Cloud.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">System Architecture</h3>
              <p className="text-gray-600">
                Design scalable, resilient systems that grow with your business needs and handle enterprise-level demands.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Transformation</h3>
              <p className="text-gray-600">
                Modernize your operations with cutting-edge technologies and digital-first approaches to business processes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Audits</h3>
              <p className="text-gray-600">
                Comprehensive assessments of your IT infrastructure, security, and compliance to identify improvement opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Quote Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 mb-20 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
            <blockquote className="text-xl md:text-2xl font-medium mb-6">
              "Technology should serve your business goals, not complicate them. Our approach is to simplify complex challenges 
              and deliver practical solutions that drive real results. Every client deserves a technology partner who truly 
              understands their unique journey."
            </blockquote>
            <cite className="text-lg font-semibold">
              — Sarah Johnson, Founder & Chief Technology Officer
            </cite>
          </div>
        </div>

        {/* Booking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Schedule Your Consultation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your business? Book a free 30-minute consultation to discuss your 
              specific needs and explore how we can help you achieve your technology goals.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Free 30-minute initial consultation</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Customized technology roadmap</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Expert recommendations</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Book Your Session
            </h3>
            {/* Calendly Embed Placeholder */}
            <div className="bg-gray-100 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center">
              <div>
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600 mb-4">Calendly Integration</p>
                <p className="text-sm text-gray-500">
                  Replace this section with your Calendly embed code:<br/>
                  &lt;div className="calendly-inline-widget" data-url="https://calendly.com/your-link"&gt;&lt;/div&gt;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Base Articles */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Knowledge Base & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  The Complete Guide to Cloud Migration
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn the essential steps, best practices, and common pitfalls to avoid when migrating your infrastructure to the cloud.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>12 min read</span>
                  <span className="mx-2">•</span>
                  <span>Cloud Strategy</span>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-green-600 h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Microservices vs Monolith: Making the Right Choice
                </h3>
                <p className="text-gray-600 mb-4">
                  Understand when to choose microservices architecture and when a monolithic approach might be better for your project.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>8 min read</span>
                  <span className="mx-2">•</span>
                  <span>Architecture</span>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 h-48 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Digital Transformation Roadmap for SMEs
                </h3>
                <p className="text-gray-600 mb-4">
                  A practical guide for small and medium enterprises to successfully navigate their digital transformation journey.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>15 min read</span>
                  <span className="mx-2">•</span>
                  <span>Strategy</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Video Explainers Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Video Explainers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-64 flex items-center justify-center relative">
                <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  12:45
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Cloud Security Best Practices
                </h3>
                <p className="text-gray-600 mb-4">
                  Essential security measures every organization should implement when moving to the cloud.
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Cloud Security
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 h-64 flex items-center justify-center relative">
                <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                  8:30
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  API Design Principles for Modern Applications
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to design scalable, maintainable APIs that power successful digital products.
                </p>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  API Development
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our consultancy services can help accelerate your business growth and technology objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Our Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultancyPage;