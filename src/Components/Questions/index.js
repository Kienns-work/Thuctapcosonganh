import React from 'react';
import './styles.css'
import teemo from '../../Assets/teemo.png';
import video from '../../Assets/video.mp4'

const Questions = () => {
    return (
        <>
            <section className="questions" id="faq" data-scroll-section>
                <div className="questions__wrapper">
                    <div className="container">
                        <h2 className="section-heading color-black">Some frequently asked questions.</h2>
                        <div className="row align-items-lg-center">
                                <div className="col-lg-6 order-2 order-lg-1">
                                    <div id="accordion">
                                        <div className="card" id="card-1">
                                            <div className="card-header" id="heading-1">
                                                <h5 className="mb-0">
                                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                                    How does algorithms work?
                                                </button>
                                                </h5>
                                            </div>
            
                                            <div id="collapse-1" className="collapse show" aria-labelledby="heading-1" data-parent="#accordion">
                                                <div className="card-body">
                                                <p className="paragraph">With increasing calls for government accountability and cost savings, agencies
                                                    are contending with a mountain
                                                    of rule and policy changes affecting everything from pensions and benefits, to client eligibility
                                                    and oversight.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="card-2">
                                            <div className="card-header" id="heading-2">
                                                <h5 className="mb-0 hidden">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                                    What is a business rules engine?
                                                </button>
                                                </h5>
                                            </div>
                                            <div id="collapse-2" className="collapse" aria-labelledby="heading-2" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p className="paragraph">With increasing calls for government accountability and cost savings, agencies
                                                        are contending with a mountain
                                                        of rule and policy changes affecting everything from pensions and benefits, to client eligibility
                                                        and oversight.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="card-3">
                                            <div className="card-header" id="heading-3">
                                                <h5 className="mb-0 hidden">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                                                    How are datadirect drivers different?
                                                </button>
                                                </h5>
                                            </div>
                                            <div id="collapse-3" className="collapse" aria-labelledby="heading-3" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p className="paragraph">With increasing calls for government accountability and cost savings, agencies
                                                        are contending with a mountain
                                                        of rule and policy changes affecting everything from pensions and benefits, to client eligibility
                                                        and oversight.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="card-4">
                                        <div className="card-header" id="heading-4">
                                            <h5 className="mb-0 hidden">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                                                How do determine agencies compliance?
                                            </button>
                                            </h5>
                                        </div>
                                        <div id="collapse-4" className="collapse" aria-labelledby="heading-4" data-parent="#accordion">
                                            <div className="card-body">
                                            <p className="paragraph">With increasing calls for government accountability and cost savings, agencies
                                                are contending with a mountain
                                                of rule and policy changes affecting everything from pensions and benefits, to client eligibility
                                                and oversight.</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="card" id="card-5">
                                        <div className="card-header" id="heading-5">
                                            <h5 className="mb-0 hidden">
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                                                How are datadirect drivers different?
                                            </button>
                                            </h5>
                                        </div>
                                        <div id="collapse-5" className="collapse" aria-labelledby="heading-5" data-parent="#accordion">
                                            <div className="card-body">
                                                <p className="paragraph">With increasing calls for government accountability and cost savings, agencies are contending with a mountain of rule and policy changes affecting everything from pensions and benefits, to client eligibility and oversight.</p>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="card" id="card-6">
                                            <div className="card-header" id="heading-6">
                                                <h5 className="mb-0 hidden">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
                                                        What is a business rules engine?
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapse-6" className="collapse" aria-labelledby="heading-6" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p className="paragraph">With increasing calls for government accountability and cost savings, agencies are contending with a mountain of rule and policy changes affecting everything from pensions and benefits, to client eligibility and oversight.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" id="card-7">
                                            <div className="card-header" id="heading-7">
                                                <h5 className="mb-0 hidden">
                                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
                                                    What are the types of datadirect drivers?
                                                </button>
                                                </h5>
                                            </div>
                                            <div id="collapse-7" className="collapse" aria-labelledby="heading-7" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p className="paragraph">With increasing calls for government accountability and cost savings, agencies
                                                        are contending with a mountain
                                                        of rule and policy changes affecting everything from pensions and benefits, to client eligibility
                                                        and oversight.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <div className="questions-img">
                                        <img src={teemo} alt="image" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <video className='video' autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                </video>
            </section>
        </>
    );
}

export default Questions;
