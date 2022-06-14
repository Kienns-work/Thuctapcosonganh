import React from 'react';
import './styles.css'

const Blog = () => {
    return (
        <>
          <section className="related-blog blog" data-scroll-section>
            <div className="related-blog__wrapper">
                <h2 className="section-heading color-black">Read latest news from our blog.</h2>
                <div className="blog__content">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4">
                        <a href="blog-single.html">
                        <div className="blog__single blog__single--1">
                            <div className="blog__single-image">
                            <img src="https://ggstorage.oxii.vn/images/oxii-2019-5-17/728/362065dc0115050ebf309642ba0e4bd4.jpg" alt="image" />
                            </div>
                            <div className="blog__single-info">
                            <h3>New features coming in 2020 to our app.</h3>
                            <h4>12 <i className="fad fa-comment"></i><span>|</span>Dec 17, 2020</h4>
                            <p className="paragraph dark">Suisque metus tortor ultricies ac ligula neced
                                eleifend dales felise morbi nec tempor isvel ultricies lideula. </p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-lg-8">
                        <a href="blog-single.html">
                        <div className="blog__single blog__single--2">
                            <div className="blog__single-image">
                            <img src="https://image.winudf.com/v2/image1/Y29tLmdhcmVuYS5nYW1lLmZvNG10aF9zY3JlZW5fMTBfMTYwOTkzMDIyOF8wMjM/screen-5.jpg?fakeurl=1&type=.webp" alt="image" />
                            </div>
                            <div className="blog__single-info">
                            <h3>New features coming in 2020 to our app.</h3>
                            <h4>12 <i className="fad fa-comment"></i><span>|</span>Dec 17, 2020</h4>
                            <p className="paragraph dark">Suisque metus tortor ultricies ac ligula neced
                                eleifend dales felise morbi nec tempor isvel ultricies lideula. </p>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <a href="https://image.thanhnien.vn/w1024/Uploaded/2022/ernccqxwp/2022_02_21/fifa-online-4-gioi-thieu-the-nang-cap-lai-01-7941.jpg" className="button">
                <span>GO TO BLOG <i className="fad fa-long-arrow-right"></i></span>
                </a>
            </div>
            </section>  
        </>
    );
}

export default Blog;
