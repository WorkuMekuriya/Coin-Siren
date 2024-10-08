import LogoDark from '../atoms/LogoDark';
import BusinessInfoDetails from '../molecules/BusinessDetails';
import ServiceDetails from '../molecules/ServiceDetails';

const Footer: React.FC = () => {
  return (
    <footer className="py-[80px] font-poppins bg-color-fb">
      <div className="container flex flex-col gap-12 px-4">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-[18px]">
          <div className="lg:col-span-4">
            <LogoDark />
            <div className="mb-[18px] text-[14px] text-color-1">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </div>
            <div className="flex flex-col gap-2 text-[13px] text-color-f">
              <div>010-0000-0000</div>
              <div>aaaaa@naver.com</div>
            </div>
          </div>
          <ServiceDetails />
        </div>
        <BusinessInfoDetails />
        <div className="text-[13px] text-color-f">ⓒ 2023 Hyperhire</div>
      </div>
    </footer>
  );
};

export default Footer;
