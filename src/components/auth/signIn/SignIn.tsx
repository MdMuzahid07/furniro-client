import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  return (
    <section className="relative mx-auto min-h-[550px] w-full max-w-[1440px] sm:min-h-[80vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/home-top-hero-banner-green-tree.png"
          width={1440}
          height={716}
          alt="home-hero-section-image"
          className="h-full w-full object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-0 z-10 bg-dark/20"></div>

      <div className="absolute z-30 flex h-full w-full items-center justify-center px-[20px]">
        <form
          action=""
          className="w-full max-w-[400px] rounded-[10px] bg-background/40 p-[20px] backdrop-blur sm:p-[35px]"
        >
          <h5 className="mb-[15px] text-[20px] font-semibold text-primary sm:mb-[20px] sm:text-[30px]">
            Please LogIn
          </h5>
          <div className="space-y-[20px]">
            <div>
              <label className="text-[16px] font-medium text-dark" htmlFor="email">
                Email Address
              </label>
              <input
                className="mt-[10px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:px-[18px] sm:text-[20px]"
                placeholder="Your Email Address"
                type="text"
                id="email"
              />
            </div>

            <div>
              <label className="text-[16px] font-medium text-dark" htmlFor="password">
                Password
              </label>
              <input
                className="mt-[10px] h-[50px] w-full rounded-[10px] border border-accent-light px-[12px] text-[16px] focus:border-primary focus:outline-none sm:px-[18px] sm:text-[20px]"
                placeholder="Password"
                type="email"
                id="password"
              />
            </div>
          </div>
          <div className="mt-[15px] mb-[20px]">
            <p className="text-[14px] font-medium">
              {`Don't`} have an account? please{" "}
              <Link href="/signup" className="pl-[5px] text-[14px] font-semibold text-primary">
                SignUp
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="h-[50px] w-full cursor-pointer rounded-[10px] bg-quaternary text-[14px] font-medium transition hover:bg-primary hover:text-background sm:text-[16px]"
          >
            SingIn
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
