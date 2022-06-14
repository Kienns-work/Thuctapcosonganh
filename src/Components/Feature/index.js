import React from 'react';
import './styles.css'
import frog from '../../Assets/frog.png';
import panda from '../../Assets/panda.png';
import whale from '../../Assets/whale.png';
import unicorn from '../../Assets/unicorn.png';


const Feature = () => {
    return (
        <>
            <section className="feature" id="intro" data-scroll-section >
                <div className="container">
                    <h2 className="section-heading" >Get surprised by amazing features.</h2>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="feature__box feature__box--1">
                                <div className="icon icon-1">
                                    <img src={frog}/>
                                </div>
                                <div className="feature__box__wrapper">
                                    <div className="feature__box--content feature__box--content-1">
                                        <h3>Join in Easy Steps</h3>
                                        <p className="paragraph dark">Suisque metus tortor ultricies ac ligula neced eleifend sodales felise morbi nec tempor isvelultricies ligula.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature__box feature__box--2">
                                <div className="icon icon-2">
                                    <img src={whale}/>
                                </div>
                                <div className="feature__box__wrapper">
                                    <div className="feature__box--content feature__box--content-2">
                                        <h3>Track Your Progress</h3>
                                        <p className="paragraph dark">Euisque metus tortor ultricies ac ligula neced eleifend sodales felise morbi nec tempor isvel ultricies ligula.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature__box feature__box--3">
                                <div className="icon icon-3">
                                    <img src={unicorn}/>
                                </div>
                                <div className="feature__box__wrapper">
                                    <div className="feature__box--content feature__box--content-3">
                                        <h3>Improve Your Growth</h3>
                                        <p className="paragraph dark">Auisque metus tortor ultricies ac ligula neced eleifend sodales felise morbi nec tempor isvel ultricies ligula.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature__box feature__box--4">
                                <div className="icon icon-4">
                                    <img src={panda}/>
                                </div>
                                <div className="feature__box__wrapper">
                                    <div className="feature__box--content feature__box--content-4">
                                        <h3>Become an Inspiration</h3>
                                        <p className="paragraph dark">Tuisque metus tortor ultricies ac ligula neced eleifend sodales felise morbi nec tempor isvel ultricies ligula.</p>
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
export default Feature;

