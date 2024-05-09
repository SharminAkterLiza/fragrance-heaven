import { FaMapLocation, FaMessage, FaPhone } from "react-icons/fa6";

const ContactUs = () => {
    const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.2126467706494!2d91.1704108736557!3d23.452792900139773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547edf969d8777%3A0x54f5fb86046b3f2f!2sFarid%20Group!5e0!3m2!1sen!2sbd!4v1691268323738!5m2!1sen!2sbd';

    return (
        <div className="flex">
            <div className="map m-14">
      <iframe
        src={url}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>

    <section id="contact-details" className="section-p1 mt-32 mr-20">
      <div className="details">
      <h3 className=" pb-8">GET IN TOUCH</h3>
        <h2 className="font-bold text-3xl pb-8">Visit one of our agency locations or contact us today</h2>
        <h3 className="font-bold pb-8">Head Office</h3>
        <ul>
          <li>
            <div>
               <div></div> 
            </div>
             <div className="flex">
                <div className="mt-4 me-4"><FaMapLocation className="py-auto text-orange-800"></FaMapLocation></div>
                <div>B-19, BSCIC Industrial Area,
              <br />
              Comilla-3500, Bangladesh.</div>
             </div>
             <div className="flex">
                <div className=" me-4"> <FaPhone className="text-purple-800"></FaPhone> </div>
                <div><p>
              {/* Phone numbers (replace with actual numbers) */}
              +8801717335758, +88-081-77246
            </p></div>
             </div>
             <div className="flex">
                <div className="mt-2 me-4"> <FaMessage className="text-blue-800"></FaMessage> </div>
                <div><p>
              {/* Email address (replace with actual email) */}
              info@faridgroupbd.com
            </p></div>
             </div>
          </li>
          <li>
            <i className="fa-solid fa-phone"></i>
            
          </li>
          <li>
            <i className="fa-solid fa-envelope"></i>
            
          </li>
        </ul>
      </div>
    </section>
    
    </div>
        
    );
};

export default ContactUs;