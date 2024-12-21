import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <div>
    <ContentLoader
      className="border-2 border-[#F3F3F3] w-[210px] h-[260px] p-4 rounded-[40px] mx-auto"
      speed={2}
      width={150}
      height={210}
      viewBox="0 0 150 210"
      backgroundColor="#e8e8e8"
      foregroundColor="#dedede">
      <rect x="0" y="4" rx="10" ry="10" width="150" height="91" />
      <rect x="102" y="70" rx="0" ry="0" width="0" height="1" />
      <rect x="0" y="113" rx="3" ry="3" width="148" height="15" />
      <rect x="0" y="133" rx="3" ry="3" width="93" height="15" />
      <rect x="2" y="177" rx="3" ry="3" width="80" height="25" />
      <rect x="117" y="173" rx="3" ry="3" width="32" height="32" />
      <rect x="69" y="67" rx="0" ry="0" width="5" height="1" />
    </ContentLoader>
  </div>
);

export default Skeleton;
