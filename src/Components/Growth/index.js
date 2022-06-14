
import React from 'react';
import './styles.css';
import gamer from '../../Assets/gamer.png';
import decisive from '../../Assets/decisive.png';
import brain from '../../Assets/brain.png';
import knowledge from '../../Assets/knowledge.png';
import stress from '../../Assets/stress.png';
import combination from '../../Assets/combination.png';


const Growth = () => {
    return (
        <>
           <section className="growth" id="feature" data-scroll-section>
                <div className="growth__wrapper">
                    <div className="container">
                        <h2 className="section-heading color-black">App that assists exponential growth.</h2>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="growth__box">
                                    <div className="icon">
                                        <img src={decisive} />
                                    </div>
                                    <div className="content">
                                        <h3>Start Easily</h3>
                                        <p className="paragraph dark">Auisque metus tortor ultricies ac ligula neced eleifend sodales felise.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="growth__box">
                                    <div className="icon">
                                    <img src={gamer} />
                                    </div>
                                    <div className="content">
                                        <h3>Improve Growth</h3>
                                        <p className="paragraph dark">Kuisque metus tortor ultricies ac ligula neced eleifend sodales felise.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="growth__box">
                                    <div className="icon">
                                        <img src={combination} />
                                    </div>
                                    <div className="content">
                                        <h3>Create Algorithms</h3>
                                        <p className="paragraph dark">Nuisque metus tortor ultricies ac ligula neced eleifend sodales felise.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="growth__box">
                                    <div className="icon">
                                        <img src={stress} />
                                    </div>
                                    <div className="content">
                                        <h3>Expand Portfolio</h3>
                                        <p className="paragraph dark">Euisque metus tortor ultricies ac ligula neced eleifend sodales felise.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="growth__box">
                                    <div className="icon">
                                        <img src={knowledge} />
                                    </div>
                                    <div className="content">
                                        <h3>Share Statistics</h3>
                                        <p className="paragraph dark">Buisque metus tortor ultricies ac ligula neced eleifend sodales felise.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="growth__box">
                                    <div className="icon">
                                        <img src={brain} />
                                    </div>
                                    <div className="content">
                                        <h3>Measure Results</h3>
                                        <p className="paragraph dark">Suisque metus tortor ultricies ac ligula neced eleifend sodales felise.</p>
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

export default Growth;
