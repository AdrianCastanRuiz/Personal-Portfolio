// Static 2D stand-in for a tech ball: same cream circle, icon in the middle.
const BallFallback = ({ icon, name = "" }) => (
  <div className="w-full h-full flex items-center justify-center rounded-full bg-[#fff8eb]">
    <img src={icon} alt={name} className="w-1/2 h-1/2 object-contain" />
  </div>
);

export default BallFallback;
