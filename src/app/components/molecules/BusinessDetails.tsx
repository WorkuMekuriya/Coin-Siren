import React from 'react';
import InfoDetail from '../atoms/InfoDetail';

const BusinessInfoDetails: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 gap-[40px]">
      <div className="lg:col-span-4 flex gap-[40px]">
        <InfoDetail title="상호명" subtitle="하이퍼하이어" description="Hyperhire India Private Limited" />
        <InfoDetail title="대표 CEO" subtitle="김주현" description="Juhyun Kim" />
      </div>
      <div className="lg:col-span-8 flex lg:flex-row flex-col gap-[40px]">
        <InfoDetail title="사업자등록번호 CIN" subtitle="427-86-01187" description="U74110DL2016PTC290812" />
        <InfoDetail
          title="주소 ADDRESS"
          subtitle="서울특별시 강남대로 479, 지하 1층 238호"
          description="D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India"
        />
      </div>
    </div>
  );
};

export default BusinessInfoDetails;
