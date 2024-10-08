'use client';

import DollarIcon from '@/app/icons/DollarIcon.svg';
import ArrowDownIcon from '@/app/icons/ArrowDownIcon.svg';
import CheckBoxIcon from '@/app/icons/CheckBoxIcon.svg';

import 'swiper/swiper-bundle.css';
import { motion } from 'framer-motion';

import JobCarousel from '../molecules/JobsCarousel';
import UserCarousel from '../organisms/UserCarousel';
import { useMediaQuery } from 'react-responsive';

const HomePage: React.FC = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <main className="bg-gradient lg:pt-[132px] pt-[86px] text-white lg:pb-[108px] pb-[60px] font-poppins">
      <div className="container px-4 grid lg:grid-cols-2 gap-4">
        <div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="text-[18px] relative lg:text-color-96 text-color-white lg:bg-color-ef bg-color-4ff lg:py-2 py-[6px] lg:px-4 px-3 rounded-lg mb-6 w-fit">
              풀타임, 파트타임
              <ArrowDownIcon className="lg:text-color-ef text-color-4ff absolute -bottom-2 left-2" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="lg:text-[48px] text-[36px] mb-4">
              최고의 실력을 가진
              <br />
              외국인 인재를 찾고 계신가요?
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-6 lg:text-[24px] text-[18px] lg:text-white/90 text-white/80">
              법률 및 인사관리 부담없이
              <br />
              1주일 이내에 원격으로 채용해보세요.
            </div>
            <div className="hidden lg:block text-[18px] underline">개발자가 필요하신가요?</div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="lg:grid hidden grid-cols-3 gap-[48px] mt-[60px] *:flex *:flex-col *:gap-2 *:border-t *:border-white *:pt-2">
              <div>
                <div className="font-[18px]">평균 월 120만원</div>
                <div className="font-[16px]">임금을 해당 국가를 기준으로 계산합니다.</div>
              </div>
              <div>
                <div className="font-[18px]">최대 3회 인력교체</div>
                <div className="font-[16px]">막상 채용해보니 맞지 않아도 걱정하지 마세요.</div>
              </div>
              <div>
                <div className="font-[18px]">평균 3일, 최대 10일</div>
                <div className="font-[16px]">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }} // Element starts with opacity 0 (invisible)
          animate={{ opacity: 1 }} // Change opacity to 1 (visible)
          transition={{ duration: 0.5 }} // Animation duration of 500ms
        >
          <div className="flex flex-col items-center gap-8">
            <div className="text-[18px] relative text-color-96 bg-color-ef py-2 px-4 rounded-lg inline-flex items-center gap-[10px] ">
              <DollarIcon />월 100만원
              <ArrowDownIcon className="text-color-ef absolute -bottom-2 left-1/2 transform -translate-x-1/2" />
            </div>

            <UserCarousel />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="flex lg:hidden flex-col gap-4 mt-6">
            <div className="text-[16px] flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <CheckBoxIcon />
                  한국어 능력
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <CheckBoxIcon />
                  업무 수행 능력
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <CheckBoxIcon />
                  겸업 여부
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <CheckBoxIcon />
                  평판 조회
                </div>
              </div>
            </div>
            <div className="block text-[18px] underline text-color-23">개발자가 필요하신가요?</div>
          </div>
        </motion.div>
      </div>

      {!isSmallScreen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <JobCarousel />
        </motion.div>
      )}
    </main>
  );
};

export default HomePage;
