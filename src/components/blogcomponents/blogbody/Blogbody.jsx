import "./blogbody.css";

export default function Blogbody() {
  return (
    <div className="BlogPage">
      <div className="body-blog container section">
        <div className="left-blog">
          <img className="f-photo" src="images/blogpage1.jpg" alt="" />
          <h3>WHY SHOULD WE CARE OUR SKIN</h3>
          <p className="left-p">
            A daily skincare routine is vital to keep your skin hydrated and
            protected from outside influences and looking younger. But its just
            as important to maintain your routine. So don’t go overboard with
            10-steps routines, just do what is necessary for your own skin.
            Tropy Beauty prepared a simple tailored 3-step routine for black
            skin: Cleanse, Moisturize and Protect, so you can achieve a more
            healthy and glowing skin!
          </p>
          <img className="s-photo" src="images/blog1.jpg" alt="" />
          <h3>GAME CHANGERS FOR EVERY DAY</h3>
          <p className="left-p">
            You may suspect you have dry, oily, or sensitive skin, but do you
            really know your skin type? Knowing your true skin type can help the
            next time you’re in the cosmetics aisle. In fact, using the wrong
            products — or even popularized Internet hacks — for your skin type
            could worsen acne, dryness, or other skin problems.
          </p>
          <img className="third-photo" src="images/blog2.jpg" alt="" />
          <h3>HOW IMPORTANT IS MOISTURE FOR WOMEN</h3>
          <p className="left-p">
            You may suspect you have dry, oily, or sensitive skin, but do you
            really know your skin type? Knowing your true skin type can help the
            next time you’re in the cosmetics aisle. In fact, using the wrong
            products — or even popularized Internet hacks — for your skin type
            could worsen acne, dryness, or other skin problems.
          </p>
        </div>

        <div className="right-blog">
          <img className="four-photo" src="images/blogpage2.jpg" alt="" />
          <div className="post">
            <h4>About author</h4>
            <p className="content">
              No one piece of makeup creates more of a statement than red
              lipstick.. Consider Revlon's Super Lustrous Love Is On Lipstick
              the LBD of the lipstick world—chic, bold, and always appropriate.
              The universally flattering color is your secret weapon to take on
              anything and everything like a boss. While it's practically
              goofproof, we asked makeup artist Vincent Oquendo to share his
              essentials, plus tips to ensure you get that red just right.
            </p>
          </div>
          <div className="none">
            <img className="fif-photo" src="images/blogpage1.jpg" alt="" />
            <div className="post">
              <h5>WHY SHOULD WE CARE OUR SKIN</h5>
              <p className="content">
                A daily skincare routine is vital to keep your skin hydrated and
                protected from outside influences and looking younger. But it’s
                just as important to maintain your routine. So don’t go
                overboard with 10-steps routines, just do what is necessary for
                your own skin. Tropy Beauty prepared a simple tailored 3-step
                routine for black skin: Cleanse, Moisturize and Protect, so you
                can achieve a more healthy and glowing skin!
              </p>
            </div>
            <img className="six-photo" src="images/blog1.jpg" alt="" />
            <div className="post">
              <h5>GAME CHANGERS FOR EVERY DAY</h5>
              <p className="content">
                You may suspect you have dry, oily, or sensitive skin, but do
                you really know your skin type?Knowing your true skin type can
                help the next time you’re in the cosmetics aisle. In fact, using
                the wrong products — or even popularized Internet hacks — for
                your skin type could worsen acne, dryness, or other skin
                problems.
              </p>
            </div>
          </div>

          <h3 className="cat">CATEGORIES</h3>
          <p className="cat-p">
            Cosmetic
            <br />
            Foundation
            <br />
            Lipstick
            <br />
            Skin solution
          </p>
        </div>
      </div>
      <div className="last-blog container section">
        <div className="b-col1">
          <img src="images/blogpage3.jpg" alt="" />
          <h4>The Cosmetic World</h4>
          <p>
            Cosmetics are care substances used to enhance the appearance or odor
            of the human body. They are generally mixtures of chemical
            compounds, some being derived from natural sources, many being
            synthetic.
          </p>
        </div>
        <div className="b-col2">
          <img src="images/blogpage4.jpg" alt="" />
          <h4>Did you know these lipstick fact</h4>
          <p>
            lipstick is a cosmetic that applies color, texture, and protection
            to the lips. many colors and types of lipstick exist. some lipsticks
            are also lip balms, to add both color and hydration.
          </p>
        </div>
        <div className="b-col3">
          <img src="images/blogpage5.jpg" alt="" />
          <h4>The Cosmetic World</h4>
          <p>
            As the body's largest organ, skin protects against germs, regulates
            body temperature and enables touch (tactile) sensations. The skin's
            main layers include the epidermis, dermis and hypodermis and is
            prone to many problems, including skin cancer, acne, wrinkles and
            rashes.
          </p>
        </div>
      </div>
    </div>
  );
}
