import { useState } from 'react';


export default function PaymentGateway() {
    const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be considered a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // reset touchEnd to null
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1));
    if (isRightSwipe) setActiveIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };
  return (
    <div>
        <div
      className="flex overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className={`flex-shrink-0 w-full transition-transform duration-300`}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {/* Modal 1 */}
        <div className="flex-shrink-0 w-full h-full bg-white p-4">
          {/* Content of Modal 1 */}
        </div>
        {/* Modal 2 */}
        <div className="flex-shrink-0 w-full h-full bg-white p-4">
          {/* Content of Modal 2 */}
        </div>
        {/* Modal 3 */}
        <div className="flex-shrink-0 w-full h-full bg-white p-4">
          {/* Content of Modal 3 */}
        </div>
        {/* Modal 4 */}
        <div className="flex-shrink-0 w-full h-full bg-white p-4">
          {/* Content of Modal 4 */}
        </div>
      </div>
    </div>
    </div>
  )
}
