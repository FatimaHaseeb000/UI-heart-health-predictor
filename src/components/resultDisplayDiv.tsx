import React from 'react';
import results from '../../public/assets/providers/results.json';
import Image from 'next/image';

interface Props {
  name: string;
}

const ResultDisplayDiv: React.FC<Props> = ({ name }) => {
  const hasDisease = results.heartDisease;

  return (
    <div className="p-6 bg-white rounded shadow-md transition-all duration-500 ease-in-out transform hover:scale-105">
      {name && (
        <>
          <h2 className="text-3xl font-bold text-center mb-4">Results</h2>
          <p className="mt-2 text-lg text-center">Hello, {name}. Here are your results:</p>
          <br />
        </>
      )}
      {/* Add the result display logic here */}
      {hasDisease ? (
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-red-600">You are predicted to have a heart disease.</h3>
          <div className="mt-4">
            <Image
              src={require(`../../public/assets/images/download.png`)}
              alt="Heart Disease"
              className="w-24 h-24 mx-auto animate-pulse"
              width={96}
              height={96}
            />
          </div>
          <p className="mt-4 text-gray-600">Please consult with a healthcare professional for further guidance.</p>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-green-600">You are predicted to not have a heart disease.</h3>
          <div className="mt-4">
            <Image
               src={require(`../../public/assets/images/smiley.jpeg`)}
              alt="No Disease"
              className="w-24 h-24 mx-auto animate-bounce"
                width={96}
                height={96}
            />
          </div>
          <p className="mt-4 text-gray-600">Keep up the good work and maintain a healthy lifestyle!</p>
        </div>
      )}
    </div>
  );
};

export default ResultDisplayDiv;


// import React from 'react';
// import results from '../../public/assets/providers/results.json'
// interface Props {
//     name: string;
//   }
  
//   const ResultDisplayDiv: React.FC<Props> =({ name }) => {

//   return (
//     <>
//     <div className="p-4 bg-white rounded shadow-md">
//       {(name!==null) &&
//       <>
//         <h2 className="text-2xl font-bold">Results</h2>
//         <p className="mt-2">Hello, {name}. Here are your results:</p>
//         <br /><br />
//       </>
//         }
//       {/* Add the result display logic here */}
//       {
//         (results.heartDisease===true) &&
//         <>
//         <div>
//             <h3>You are predicted to have a heart disease.</h3>
//             <br />
//         </div>
//         </>
//       }
//       {
//         (results.heartDisease===false) &&
//         <>
//             <div>
//             <h3>You are predicted to not have a heart disease.</h3>
//             <br />
//         </div>
//         </>
//       }

//     </div>
//     </>
//   );
// };

// export default ResultDisplayDiv;
