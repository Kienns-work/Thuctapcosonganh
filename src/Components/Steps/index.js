import React from 'react';
import './styles.css'

const Steps = () => {
    return (
        <>
            <section className="step" data-scroll-section>
  <div className="step__wrapper">
    <div className="container">
      <h2 className="section-heading color-black">Jumpstart your growth in just few clicks.</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="step__box">
            <div className="image">
              <img src="https://i.pinimg.com/favicons/02e0135f8c5f61043600e4bdc5ad9adfc6a86e2ae367dec9beae8732.png?1814a04b126f584550a3890da0cc6d08" alt="image" />
            </div>
            <div className="content">
              <h3>EASY TO<span>Register.</span></h3>
              <p className="paragraph dark">Join the app in 3 easy steps and get
                started with your progresso daily.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="step__box">
            <div className="image">
              <img src="https://cdn-onshop.cdn.vccloud.vn/images/figroom/w_2000,h_2000/2018-09-07-001047905yasuofront1-1.png" alt="image" />
            </div>
            <div className="content">
              <h3>SIMPLE TO<span>Create.</span></h3>
              <p className="paragraph dark">Once you’re signed up you can create
                as many polls you want to watch.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="step__box">
            <div className="image">
              <img src="https://www.pngmart.com/files/13/Tetris-Game-Transparent-PNG.png" alt="image" />
            </div>
            <div className="content">
              <h3>FUN TO<span>Measure.</span></h3>
              <p className="paragraph dark">Share your growth results with your
                friends and inspre others.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
}

export default Steps;
