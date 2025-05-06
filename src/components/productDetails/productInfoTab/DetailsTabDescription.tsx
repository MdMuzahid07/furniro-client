import Image from "next/image";
import React from "react";

const DetailsTabDescription = () => {
  return (
    <div>
      <div className="md:-px-[60px] px-[20px] sm:px-[40px] lg:px-[80px] xl:px-[207px]">
        <p className="text-[16px] text-accent-light">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo
          speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes
          the show on the road.
        </p>

        <p className="mt-[20px] text-[16px] text-accent-light sm:mt-[30px]">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
          engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a
          compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and
          extended highs for a sound that is both articulate and pronounced. The analogue knobs
          allow you to fine tune the controls to your personal preferences while the
          guitar-influenced leather strap enables easy and stylish travel.
        </p>
      </div>
      <div className="mt-[20px] flex flex-col items-center gap-[29px] px-[20px] sm:mt-[36px] sm:flex-row md:px-[40px] lg:px-[56px] xl:px-[100px]">
        <Image
          src="/images/details-page-image-sofa.png"
          width={700}
          height={400}
          alt="details-page-sofa-image"
          className="h-[348px] w-full rounded-[10px]"
        />
        <Image
          src="/images/details-page-img-sofa.png"
          width={700}
          height={400}
          alt="details-page-sofa-image"
          className="h-[348px] w-full rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default DetailsTabDescription;
