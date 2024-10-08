import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import JobCard from '../atoms/JobCard';

import MarketingIcon from '@/app/icons/MarketingIcon.svg';
import ImageIcon from '@/app/icons/ImageIcon.svg';
import BoxIcon from '@/app/icons/BoxIcon.svg';
import TargetIcon from '@/app/icons/TargetIcon.svg';
import CallIcon from '@/app/icons/CallIcon.svg';

// Icon mapping based on names returned by the API
const iconMapping: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  marketing: MarketingIcon,
  image: ImageIcon,
  box: BoxIcon,
  target: TargetIcon,
  call: CallIcon,
};

interface JobItem {
  icon: string;
  title: string;
}

interface JobCarouselProps {
  jobItems: JobItem[];
}

const JobCarousel: React.FC<JobCarouselProps> = ({ jobItems }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4.5}
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      style={{ padding: '0 82px', marginTop: '60px' }}>
      {jobItems &&
        jobItems.map((item: JobItem, index: number) => {
          const IconComponent = iconMapping[item.icon.toLowerCase()];
          return (
            <SwiperSlide key={index}>
              <JobCard Icon={IconComponent} title={item.title} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default JobCarousel;
