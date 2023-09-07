import "../../styles/about.scss";

const About = () => {
  return (
    <div className="page">
      <h1>You are on the About page!</h1>
      <p>
        process:
        <hr /> On this project, I started mapping out on paper my the first few
        steps I needed to take to get going. I started off by creating the
        different components that I needed for the pages that my site was going
        to need. Then, I created navigation functionality to navigate between
        the pages on the site. I then began to add to the components for the
        functionality on my pages, turning to styling when I ran into blockers
        and needed help.
      </p>
      <p>
        struggles: <hr /> I struggled quite a bit creating this app. Some of my
        struggles came where I didn’t know where to go or what to do next.
        Something I learned from doing this project is that you’re never going
        to know everything and looking things up for deeper understanding is a
        must. One thing in particular that I struggled with was getting my “add
        to cart” button working. After batting my head against a wall for a few
        hours, I came across the createContext hook which changed everything for
        me. I was able to access the information I needed on the cart page to
        make it functional and learn something in the process. It as beautiful.
      </p>
      <p>
        languages:
        <hr />
        My favorite language is for sure Javascript. When I started learning
        Javascript, the syntax was hard for me to grasp coming from python. In
        the moment it seemed as if it would never click. I can now say that it
        has clicked. Learning react has blown my mind in all that you can do.
        I’m sure I only know a small portion of the functionality involved in
        react but I’m excited and eager to learn more and more every day.
      </p>
    </div>
  );
};
export default About;
