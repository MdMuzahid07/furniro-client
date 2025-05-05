import Image from "next/image";

const img1 = "/images/home/shareYourSetup/share-your-setup-1.png";
const img2 = "/images/home/shareYourSetup/share-your-setup-2.png";
const img3 = "/images/home/shareYourSetup/share-your-setup-3.png";
const img4 = "/images/home/shareYourSetup/share-your-setup-4.png";
const img5 = "/images/home/shareYourSetup/share-your-setup-5.png";
const img6 = "/images/home/shareYourSetup/share-your-setup-6.png";
const img7 = "/images/home/shareYourSetup/share-your-setup-7.png";
const img8 = "/images/home/shareYourSetup/share-your-setup-8.png";
const img9 = "/images/home/shareYourSetup/share-your-setup-9.png";

const ShareYourSetupWith = () => {
  return (
    <section className="mx-auto max-w-[1440px] overflow-hidden pt-[67px] pb-[50px]">
      <h4 className="mb-[8px] text-center text-[20px] leading-[150%] font-semibold text-muted-light">
        Share your setup with
      </h4>
      <h1 className="text-center text-[30px] leading-[120%] font-bold text-info md:text-[40px]">
        #FurniroFurniture
      </h1>

      <div className="mt-[43px] flex items-center gap-[16px] xl:-mt-[28px]">
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-baseline gap-[16px]">
            <Image
              src={img1}
              width={400}
              height={500}
              alt="galley-like-img-bedroom"
              className="h-[382px] w-[274px] object-cover object-right xl:w-[78px]"
            />
            <div>
              <Image
                src={img2}
                width={500}
                height={400}
                alt="galley-like-img-bedroom"
                className="h-[312px] w-[451px] object-cover object-center"
              />
            </div>
          </div>
          <div className="flex gap-[16px]">
            <Image
              src={img3}
              width={400}
              height={500}
              alt="galley-like-img-bedroom"
              className="h-[323px] w-[381px] object-cover object-right xl:w-[186px]"
            />
            <div>
              <Image
                src={img4}
                width={450}
                height={300}
                alt="galley-like-img-bedroom"
                className="h-[242px] w-[344px] object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="w-full xl:-mt-[14px] xl:max-w-[295px]">
          <Image
            src={img5}
            width={400}
            height={500}
            alt="galley-like-img-bedroom"
            className="h-[392px] w-[295px] object-cover object-center"
          />
        </div>
        <div className="flex w-full max-w-[570px] flex-col gap-[16px]">
          <div className="flex items-baseline gap-[16px]">
            <Image
              src={img6}
              width={400}
              height={500}
              alt="galley-like-img-bedroom"
              className="h-[348px] w-[290px] object-cover object-center"
            />
            <Image
              src={img8}
              width={450}
              height={500}
              alt="galley-like-img-drawing-room"
              className="h-[433px] w-[425px] object-cover object-center"
            />
          </div>

          <div className="flex gap-[16px]">
            <Image
              src={img7}
              width={200}
              height={300}
              alt="galley-like-img-bedroom"
              className="h-[242px] w-[178px] object-cover object-center"
            />
            <Image
              src={img9}
              width={400}
              height={300}
              alt="galley-like-img-drawing-room"
              className="h-[196px] w-[258px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareYourSetupWith;
