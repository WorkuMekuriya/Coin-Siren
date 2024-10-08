import React, { useRef } from 'react';
import CaretLeftIcon from '@/app/icons/CaretLeftIcon.svg';
import CaretRightIcon from '@/app/icons/CaretRightIcon.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import UserCard from '../molecules/UserCard';
import { Swiper as SwiperCore } from 'swiper/types'; // Import Swiper type from Swiper

interface User {
  avatar: string;
  name: string;
  experience: string;
  details: string;
}

interface UserCarouselProps {
  users: User[];
}

const UserCarousel: React.FC<UserCarouselProps> = ({ users }) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });

  const swiperRef = useRef<SwiperCore | null>(null); // Correct reference type

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Move to the next slide
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); // Move to the previous slide
    }
  };

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[EffectCards, Autoplay]}
        effect="cards"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        cardsEffect={{
          perSlideOffset: isSmallScreen ? 12 : 22,
          perSlideRotate: 0,
          rotate: false,
          slideShadows: false,
        }}
        style={{
          marginLeft: isSmallScreen ? 20 : 150,
          maxWidth: isSmallScreen ? 300 : 450,
        }}>
        {users &&
          users.map((user: User, i: number) => (
            <SwiperSlide key={i}>
              <UserCard
                avatar={user.avatar}
                name={user.name}
                experience={user.experience}
                details={Array.isArray(user.details) ? user.details : [user.details]}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <button
        className="absolute"
        style={{
          left: isSmallScreen ? '-28px' : '-8px',
          top: '50%',
          zIndex: 1,
        }}
        onClick={handlePrev}>
        <CaretLeftIcon />
      </button>
      <button
        className="absolute"
        style={{
          right: isSmallScreen ? '-28px' : '-8px',
          top: '50%',
          zIndex: 1,
        }}
        onClick={handleNext}>
        <CaretRightIcon />
      </button>
    </div>
  );
};

export default UserCarousel;
