import Membership from "../components/organs/Membership";
import Offers from "../components/organs/Offers";

export const ServicesPage = () => {
  return (
    <div className="pt-28 pb-10 px-16">
      <Offers />
      <div className="md:mt-32">
        <Membership/>
      </div>
    </div>
  );
};
