import { useState } from 'react';
import submitContactRequest from '../services/submitContactRequest';

function GetInTouch() {
  const [formData, setFormData] = useState({
    mediaOption: '',
    name: '',
    email: '',
    phone: '',
    guestCount: '',
    details: '',
    location: '',
    eventDates: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await submitContactRequest(formData);

      if (result) {
        console.log('Form submitted successfully:', result);
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form.');
    }
  };

  return (
    <div className="w-full flex flex-col items-center text-center justify-center pt-20 tracking-normal">
      <form className="sm:w-1/2 w-full px-10 sm:p-0" onSubmit={handleSubmit}>
        <span className="Actonia text-[36px] sm:text-[36px] text-[#FFCA00] leading-[5px]">Hello!</span>
        <div className="w-full sm:w-3/4 mx-auto">
          <h1 className="sm:text-5xl text-4xl mb-2 uppercase Boldy text-black">
            tell us all we need
            <br />
            to know about you
          </h1>
          <p className="text-[#4A4A4A] Courier font-medium  text-[16px] mb-10 px-5 leading-normal tracking-normal ">
            Please fill in the form below and provide as many details as possible
            to help us create an accurate and fair quote for your special
            occasion.
            <br />
            <br />
            Please go through our {" "}
            <a href="/aboutus#questions" className="underline text-[#1C1C1C]">FAQ section</a>
            <br />
            to find answers to some common questions.
          </p>
        </div>

        <span className="text-[24px] sm:text-[30px] uppercase text-[#FFCA00] Boldy leading-[15px]">
          Get in touch with us
        </span>
        <br />
        <span className="text-[16px] Courier text-[#4A4A4A] ">required fields are marked*</span>

        <div className="Courier text-[16px] justify-start flex flex-col items-start mt-5 text-[#1C1C1C]">
          <span>What services are you looking for?</span>

          <div className="w-full justify-between flex sm:flex-row flex-wrap text-[14px] text-[#4A4A4A]">
            <div>
              <input
                type="radio"
                name="mediaOption"
                value="Photos"
                className="Courier rounded-full accent-black"                onChange={handleChange}
              /> Photos
            </div>

            <div>
              <input
                type="radio"
                name="mediaOption"
                value="Photos & Videos"
                className="Courier rounded-full accent-black"                onChange={handleChange}
              /> Photos & Videos
            </div>

            <div>
              <input
                type="radio"
                name="mediaOption"
                value="Couples Session"
                className="Courier rounded-full accent-black"
                onChange={handleChange}
              /> Couples Session
            </div>

            <div>
              <input
                type="radio"
                name="mediaOption"
                value="Question"
               className="Courier rounded-full accent-black"
                onChange={handleChange}
              /> Question
            </div>
          </div>

          <div className="w-full mt-5 text-[#A18E6A]">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              className="Courier w-full bg-[#EDECE7] border-none p-5 rounded mb-5 text-[#A18E6A]"
              onChange={handleChange}
            />

            <input
              type="text"
              name="email"
              placeholder="Your Email*"
              className="Courier w-full bg-[#EDECE7] border-none p-5 rounded mb-5 text-[#A18E6A]"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Your Phone*"
              className="Courier w-full bg-[#EDECE7]  border-none p-5 rounded mb-5 text-[#A18E6A]"
              onChange={handleChange}
            />

            <input
              type="text"
              name="guestCount"
              placeholder="Estimated Guest Count*"
              className="Courier w-full bg-[#EDECE7]  border-none p-5 rounded mb-5 text-[#A18E6A]"
              onChange={handleChange}
            />

            <textarea
              name="details"
              placeholder="Describe the details of the wedding- event schedule, venues.*"
              className="Courier w-full bg-[#EDECE7]  border-none p-5 rounded h-[200px]"
              onChange={handleChange}
            />

            <div className="Courier w-full flex justify-start text-[#A18E6A] ">
              <span className="text-[#4A4A4A]">
                Please describe in length the details of the wedding
              </span>
            </div>

            <input
              type="text"
              name="location"
              placeholder="Location of the wedding*"
              className="Courier w-full bg-[#EDECE7] border-none p-5 rounded mt-5 mb-5 text-[#A18E6A]"
              onChange={handleChange}
            />

            <input
              type="text"
              name="eventDates"
              placeholder="Event Dates*"
              className="Courier w-full bg-[#EDECE7] border-none p-5 rounded mb-5 text-[#A18E6A]"
              onChange={handleChange}
            />

            <button
              className="border-[1px] border-black text-black p-3 rounded uppercase text-[16px] sm:mb-20 mb-10 hover:text-black hover:bg-yellow-300 hover:border-yellow-300 transition-all ease-in duration-300"
              type="submit"
            >
              <img src="https://cdn.sanity.io/images/u8qx4arf/production/ba8d8f59622f4d3229f813b582c5f554356c3a75-85x17.svg" alt="Submit" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GetInTouch;
