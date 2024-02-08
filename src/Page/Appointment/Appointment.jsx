import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SubHeader from "../../components/SubHeader"
import { MdOutlineCollectionsBookmark } from "react-icons/md";

const Appointment = () => {
  return (
    <div className="w-full h-full px-4 pb-4 overflow-y-scroll">
        <SubHeader title="appointment" path="/Appointment" icon={<MdOutlineCollectionsBookmark className="flex-shrink-0 me-2" size={15} />} />
        <div className="w-full h-full flex gap-3 lg:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col">
            <SectionOne />
            <SectionTwo />
      </div>
    </div>
  )
}

export default Appointment
