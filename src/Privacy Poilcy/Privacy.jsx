import React from 'react';
import Header from '../Home/header';
import Footer from '../Home/Footer';


export default function PrivacyPolicy() {
  return (
    <>
    <Header/>
    <div className="bg-gray-50 min-h-screen py-14 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12">

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-8">Effective Date: 01 January 2026</p>

        {/* Intro with company positioning */}
        <p className="text-gray-700 leading-relaxed mb-6">
          <span className="font-semibold">Secure Ledgers Solutions</span> is a
          digital asset infrastructure and blockchain security firm helping
          businesses move, manage, and protect crypto with confidence.  
          This Privacy Policy explains how we collect, use, and safeguard
          information while delivering secure transaction, liquidity, and
          asset protection services.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          Our operations are designed with strict compliance standards,
          institutional-grade processes, and a security-first mindset to ensure
          transparency, efficiency, and trust at every stage of engagement.
        </p>

        {/* Info Collection */}
        <SectionTitle title="1. Information We Collect" />
        <p className="text-gray-700 mb-4">
          We collect only the information necessary to communicate with you and
          deliver our services effectively.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Full name and contact details</li>
          <li>Company or business information</li>
          <li>Consultation or service-related information</li>
          <li>Technical data such as device, browser, and analytics</li>
        </ul>

        {/* Security Commitment */}
        <SectionTitle title="2. Our Security Commitment (What We Never Collect)" />

        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10">
          <p className="text-gray-800 mb-3 font-medium">
            Your digital asset security is our highest priority.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>We never request private keys</li>
            <li>We never ask for wallet seed or recovery phrases</li>
            <li>We never require direct access to personal wallets</li>
            <li>We never collect exchange, email, or wallet passwords</li>
          </ul>

          <p className="text-sm text-gray-600 mt-4">
            All services are structured so clients maintain full custody and
            control of their assets at all times.
          </p>
        </div>

        {/* Usage */}
        <SectionTitle title="3. How We Use Information" />
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-10">
          <li>Provide transaction and liquidity services</li>
          <li>Deliver security and consulting solutions</li>
          <li>Communicate regarding projects and inquiries</li>
          <li>Enhance operational security and performance</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>

        {/* Data Protection */}
        <SectionTitle title="4. Data Protection & Security Measures" />
        <p className="text-gray-700 mb-10 leading-relaxed">
          We implement industry-standard administrative, technical, and
          operational safeguards including secure infrastructure, monitoring
          systems, restricted access controls, and risk management procedures
          designed for high-value digital asset environments.
        </p>

        {/* Sharing */}
        <SectionTitle title="5. Information Sharing" />
        <p className="text-gray-700 mb-10 leading-relaxed">
          We do not sell or trade personal information. Data may be shared only
          with trusted service providers or regulatory authorities when legally
          required, under strict confidentiality obligations.
        </p>

        {/* Retention */}
        <SectionTitle title="6. Data Retention" />
        <p className="text-gray-700 mb-10 leading-relaxed">
          Information is retained only for as long as necessary to fulfill
          service obligations, maintain compliance, and support legitimate
          business operations, after which it is securely deleted or anonymized.
        </p>

        {/* Rights */}
        <SectionTitle title="7. Your Rights" />
        <p className="text-gray-700 mb-10 leading-relaxed">
          Depending on your jurisdiction, you may request access, correction, or
          deletion of your data and opt out of communications at any time.
        </p>

        {/* Cookies */}
        <SectionTitle title="8. Cookies & Website Analytics" />
        <p className="text-gray-700 mb-10 leading-relaxed">
          Our website may use cookies and analytics tools to improve user
          experience, monitor performance, and enhance security. You may manage
          cookies through your browser settings.
        </p>

        {/* Updates */}
        <SectionTitle title="9. Policy Updates" />
        <p className="text-gray-700 mb-10 leading-relaxed">
          We may update this Privacy Policy periodically to reflect operational,
          legal, or regulatory changes. The latest version will always be
          available on this page.
        </p>

        {/* Contact */}
        <SectionTitle title="10. Contact Information" />
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold">Secure Ledgers Solutions</span> <br />
          Email: support@secureledgerssolutions.com <br />
          Website: secureledgerssolutions.com
        </p>

      </div>
    </div>
    <Footer/>
    </>
  );
}

function SectionTitle({ title }) {
  return (
    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
      {title}
    </h2>
  );
}