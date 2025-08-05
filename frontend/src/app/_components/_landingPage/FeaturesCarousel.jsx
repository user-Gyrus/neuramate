import { FaPlay, FaCaretLeft, FaCaretRight } from "react-icons/fa";

function FeaturesCarousel() {
  return (
    <div className="flex flex-row">
      <div>
        <FaCaretLeft className="text-3xl" />
      </div>
      <div></div>
      <div>
        <FaCaretRight className="text-3xl" />
      </div>
    </div>
  );
}

export default FeaturesCarousel;
