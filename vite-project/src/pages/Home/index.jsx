const HomePage = () => {
  const description1 = `My coding journey began in 2019 when I took the leap and registered for a Trilogy Coding Bootcamp in association with Georgia Tech. I decided to learn how to code because I wanted more power over my ecommerce business, Vintage4me2.  My history in the ecommerce game goes back much further to the late 1990s.  My original business was a sole eBay account that my mother began in 1996. Through my mother's experience as a costumer and my degree from UC Berkeley in history, we created Vintage4me2, a company that sells vintage sewing patterns and memorabilia from the 1890s to the 1960s. We have been going strong for almost 30 years. We have now expanded to a four platform ecommerce business and a leader in our niche industry.`
  const description2 = `As a business owner I have had first hand experience in every part of the online buying experience.  From designing business strategies and email campaigns to keeping our website fresh, I bring a perspective that is sensitive to the needs of many different stakeholders in the web development process.`
  const description3 = `As a senior instructional specialist for 2u Bootcamps I have been able to work one on one with students as they learn the MERN stack. This experience gives me a unique window into the many different ways that people approach both coding and learning. I had to tailor my teaching style to meet the needs of each individual student; providing some students with long explanations and other students with a more nuts and bolts approach. I strive to be simple and direct in how I teach javascript, using metaphors and analogies to illustrate complicated concepts.  This approach has worked well for me and received great feedback from my students.  They will often leave our meeting saying, 'Wow, that makes so much more sense now!'`
  const description4 = `As I have coached my students through the process of learning the mern stack, I have been exposed to a huge variety of technologies, apis and ways to break your code. Over the past 4 years, I have banked a huge number of solutions to problems throughout the software lifecycle.  A standard 50 minute session would involve asking the student about their issue, running their code, finding the error, addressing the error and then solve the misunderstanding behind the issue. In the beginning I could only solve one or two problems in that time frame, now I can knock out four or five problems before I run out of time.  I really couldn't ask for a better way to grow as a developer than to be relied upon by younger developers and randomly challenged with their current problem.`

  return (
    <div style={{border: "1px solid white", fontSize: "14pt", textAlign: "left"}}>
      <h4>How It All Started...</h4>
      <p>{description1}</p>
      <p>{description2}</p>
      <p>{description3}</p>
      <p>{description4}</p>
    </div>
  );
};

export default HomePage;
