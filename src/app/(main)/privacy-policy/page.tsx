const PrivacyPolicy = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-[20px] pt-[40px] pb-[40px] sm:px-[40px] sm:pt-[50px] md:px-[60px] lg:px-[52px] lg:pt-[63px] lg:pb-[52px] xl:px-[100px]">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
      <div className="space-y-4">
        <section>
          <h2 className="mb-2 text-xl font-semibold">Information We Collect</h2>
          <p>
            When you make a purchase on Furniro, we collect necessary information including your
            name, shipping address, email, and payment details to process your order.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">How We Use Your Information</h2>
          <p>
            We use your information to process orders, provide customer service, and improve your
            shopping experience. We never share your personal data with third parties except as
            required for order fulfillment.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Security</h2>
          <p>
            Your personal information is protected using industry-standard security measures. All
            payment transactions are encrypted and processed securely.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience and provide personalized service. You
            can adjust your browser settings to decline cookies if you prefer.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about our privacy policy, please contact our customer service
            team.
          </p>
        </section>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
