import './Slider.css';
import { urlFor } from '../../services/sanity';

const Slider = ({ items }) => {
  // items = [
//     {
//       "_type": "image",
//       "_key": "ea7bac4d965d",
//       "asset": {
//           "_ref": "image-e74e900ac6c9e11f20b44c0820438577c00b96b3-32x32-svg",
//           "_type": "reference"
//       }
//   },
//   {
//       "_type": "image",
//       "_key": "dc24829d9931",
//       "asset": {
//           "_ref": "image-9623434cd8a79c25d265409a361b9bbc0d869d22-100x32-svg",
//           "_type": "reference"
//       }
//   },
//   {
//       "_key": "10cb27447390",
//       "asset": {
//           "_ref": "image-1725ecaf458d83a3c983bdf162a3f4ec61e405cf-77x32-svg",
//           "_type": "reference"
//       },
//       "_type": "image"
//   }
// ]
  if (!items) return;
  return (
    <div className="slider bg-gray-500 text-white py-0 max-w-100%">
      <div className="slider-inner flex flex-row space-x-4">
        {/* //        {items.map((item, index) => (
          <div
            key={index}
            className="slider-item bg-gray-500 text-center px-4 py-2 rounded-md flex flex-row space-x-4"
          >
            {item.map((image, imageIndex) => (
              <img
                key={imageIndex}
                src={image}
                alt={`Image ${imageIndex + 1}`}
                className="w-16 h-16"
              />
            ))}
          </div>
        ))} */}

        {items.map((item, index) => (
          <div
            key={item._key}
            className="slider-item bg-gray-500 text-center px-4 py-2 rounded-md flex flex-row space-x-4"
          >
            <img
              src={urlFor(item).url()}
              alt={`Image ${index + 1}`}
              className="w-16 h-16"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Slider;
