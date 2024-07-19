import PropTypes from 'prop-types';

function QuestionAnswers({ question, answer }) {
  // Split the question into two parts
  const questionParts = question.split('\\n');

  return (
    <div className="flex flex-col sm:flex-row sm:w-[90%] sm:ml-0 mx-10 mt-5 sm:mt-2 justify-center">
      <p className="Boldy flex-1  text-[#FFCA00]  sm:mr-5 text-[24px] sm:text-center lg:text-right 2xl:text-right  sm:max-w-[304px] uppercase Boldy sm:text-3xl leading-normal break-normal whitespace-normal">
        {questionParts.map((part, index) => (
          <span>
            {part}
            {index !== questionParts.length - 1 && <br />}
          </span>
        ))}
      </p>
      <p className="Courier Prime flex-[3] text-[#D8CAB1] Courier Prime  sm:max-w-[985px] 2xl:text-[20px] text-[16px] leading-normal">
        {answer}
      </p>
    </div> 
  );
}

QuestionAnswers.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default QuestionAnswers;

// import PropTypes from 'prop-types';

// function QuestionAnswers({ question, answer }) {
//   // Split the question into two parts
//   const questionParts = question.split('\\n');

//   return (
//     <div className="flex flex-col sm:flex-row sm:w-[90%] sm:ml-0 mx-10 mt-5">
//       <p className="Boldy flex-1 text-[#FFCA00] text-left sm:text-right sm:mr-5 text-[24px] uppercase Boldy sm:text-3xl leading-normal break-all">
//         {questionParts.map((part, index) => (
//           <span key={index}>
//             {part}
//             {index !== questionParts.length - 1 && <br />}
//           </span>
//         ))}
//       </p>
//       <p className="Courier Prime flex-[3] text-[#D8CAB1] Courier sm:max-w-[60%] text-[16px] leading-normal break-all">
//         {answer}
//       </p>
//     </div>
//   );
// }

// QuestionAnswers.propTypes = {
//   question: PropTypes.string.isRequired,
//   answer: PropTypes.string.isRequired,
// };

// export default QuestionAnswers;

