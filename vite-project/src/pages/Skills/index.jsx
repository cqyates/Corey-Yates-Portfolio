import './style.css';
import EdCard from '../../components/EdCard/index.jsx';
import SkillsCard from '../../components/SkillsCard/index.jsx';

//screenshots
import CodeQuizPic from "../../images/screenshots/codeQuiz2.png";
import ValidatedFormPic from "../../images/screenshots/formValidatorFailedEmail.png"
import ExchangeRateCalculatorPic from "../../images/screenshots/exchangeRateCalculator.png"
import MovieTheaterAppPic from "../../images/screenshots/movieTheaterApp.png"

const SkillsPage = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelors of Arts',
      school: 'University of California at Berkeley',
      year: '2006',
      subject: 'History',
    },
    {
      id: 2,
      degree: 'Full Stack Flex Certificate',
      school: 'Georgia Tech',
      year: '2019',
      subject: 'MERN Stack',
    },
  ];
  const miniProjects = [
    {
      id: 1,
      title: 'So You Think You Can Code',
      description: 'This application uses solid javascript based logic to move through a quiz game about Javascript. It adds time when you are correct and deducts time when you are wrong. If you lose by running out of time or fail to answer a question correctly, the high score form is hidden from the page. Buttons and redirects take you from start screen to quiz screen to end game screen with or without a form.',
      imgsrc: CodeQuizPic,
      tech: ["HTML", "CSS", "Javascript"],
      repository: 'https://github.com/cqyates/SoYouThinkYouCanCode',
    },
    {
      id: 2,
      title: 'Basic Validated Form',
      description: 'This is a basic form that uses validation on email and matching passwords',
      imgsrc: ValidatedFormPic,
      tech: ["HTML", "CSS", "Javascript"],
      repository: 'https://github.com/cqyates/form-validator',
    },
    {
      id: 3,
      title: 'Exchange Rate Calculator',
      description: 'This application uses fetch requests to retrieve current currency prices and display the current exchange rate between any two countries. A great example of my DOM manipulation skills and use of RESTful APIs.',
      imgsrc: ExchangeRateCalculatorPic,
      tech: ["HTML", "CSS", "Javascript", "RESTful APIs"],
      repository: 'https://github.com/cqyates/exchange-rate-fetch',
    },
    {
      id: 4,
      title: 'Movie Seat App',
      description: 'This application uses data attributes to claim seats in a javascript run movie theater reservation application and total up the price for the specific movie.',
      imgsrc: MovieTheaterAppPic,
      tech: ["HTML", "CSS", "Javascript"],
      repository: 'https://github.com/cqyates/movie-booking-app',
    }
  ];
  return (
    <>
      <section style={{width: "80%", margin: "0 auto"}} className="row">
        {education.map(({ id, school, degree, year, subject }) => (
          <EdCard
            className="col-lg-6"
            key={id}
            id={id}
            school={school}
            degree={degree}
            subject={subject}
            year={year}
          />
        ))}
      </section>
      <section style={{width: "80%", margin: "0 auto"}} className="row">
        {miniProjects.map(
          ({ id, title, description, imgsrc, tech, repository }) => (
            <SkillsCard
              key={id}
              title={title}
              description={description}
              imgsrc={imgsrc}
              tech={tech}
              repository={repository}
            />
          )
        )}
      </section>
    </>
  );
};

export default SkillsPage;
