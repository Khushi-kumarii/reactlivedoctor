const BlogDetail=()=>{
    return(<>
    <section className="blogd">
       <div className="blogd-cont">
           <div className="container-detail">
             <div className="blog-page">
               <h1>Blog Deatils</h1>
             </div>
           </div>
       </div>
    </section>

    <div className="blogd-sec">
       <div className="blogd-container">
         <div className="blogd-row">
            <div className="col-lg-8 col-lg-7 b-row">
              <img  className="bi" src="https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/d/1/3-hospitalist_patient-story.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg?itok=HL_cR-BT" alt="" />
              <p className="mt">
              This is required when, for example, the final text is not yet available.
               Dummy text is also known as 'fill text'. It is said that song composers
                of the past used dummy texts as lyrics when writing melodies in order 
                to have a 'ready-made' text to sing with the melody. Dummy texts have 
                been in use by typesetters since the 16th century.
              </p>
              <p className="mt">
              Due to its widespread use as filler text for layouts, non-readability is 
              of great importance:human perception is tuned to recognize certain patterns 
              and repetitions in texts.
              </p>
               <p className="mt">
               For this reason, dummy text usually consists of a more or less 
               random series of words or syllables.
               </p>
              <h5 className="blogd-title">Comments :</h5>
              <ul className="blogd-list">
                <li className="blogd-li">
                    <div className="blogd-comm">
                      <div className="blogd-item">
                        <a className="bd">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3TBvSRxgjNNMVjBIm5RlXsPpJwCXAvgw7T03soop1ZlH57X1s3_lExJ7uNtZHxXXTAI&usqp=CAU" alt="" />
                        </a>
                        <div>
                          <h6 className="blogd-commentor">
                            <a className="blogd-heading">
                              Lorenz Peterson
                            </a>
                          </h6>
                          <small className="smal">13th May 2023 at 2:45pm</small>
                        </div>
                      </div>
                      <a className="text-muted">
                        Reply
                      </a>
                    </div>
                    <div className="mt-3">
                      <p className="comment-p">
                      " There are many variations of passages of Lorem Ipsum 
                      available, but the majority have suffered alteration in 
                      some form, by injected humour "
                      </p>
                    </div>
                </li>

                <li className="blogd-li">
                    <div className="blogd-comm">
                      <div className="blogd-item">
                        <a className="bd">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZtzvtaolMXeygSYeLPFbabORVvByTemy-g8LxlE012GkHklC99Pw1va8rRpqeMTexQ4&usqp=CAU" alt="" />
                        </a>
                        <div>
                          <h6 className="blogd-commentor">
                            <a className="blogd-heading">
                              Marco john
                            </a>
                          </h6>
                          <small className="smal">13th May 2023 at 2:45pm</small>
                        </div>
                      </div>
                      <a className="text-muted">
                        Reply
                      </a>
                    </div>
                    <div className="mt-3">
                      <p className="comment-p">
                      " There are many variations of passages of Lorem 
                      Ipsum available, but the majority have suffered alteration
                       in some form, by injected humour "
                      </p>
                    </div>
                </li>


                <li className="blogd-li">
                    <div className="blogd-comm">
                      <div className="blogd-item">
                        <a className="bd">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKQAryt4mdcjEnnwv6WsMsFaoMzzziuFVWtQ&s" alt="" />
                        </a>
                        <div>
                          <h6 className="blogd-commentor">
                            <a className="blogd-heading">
                              Alice Roan
                            </a>
                          </h6>
                          <small className="smal">13th May 2023 at 2:45pm</small>
                        </div>
                      </div>
                      <a className="text-muted">
                        Reply
                      </a>
                    </div>
                    <div className="mt-3">
                      <p className="comment-p">
                      " There are many variations of passages of Lorem Ipsum available, 
                      but the majority have suffered alteration in some form, by injected humour "
                      </p>
                    </div>
                </li>


                <li className="blogd-li">
                    <div className="blogd-comm">
                      <div className="blogd-item">
                        <a className="bd">
                          <img src="https://hily.com/wp-content/uploads/2023/02/image-1-2.png" alt="" />
                        </a>
                        <div>
                          <h6 className="blogd-commentor">
                            <a className="blogd-heading">
                              Steffan smith
                            </a>
                          </h6>
                          <small className="smal">13th May 2023 at 2:45pm</small>
                        </div>
                      </div>
                      <a className="text-muted">
                        Reply
                      </a>
                    </div>
                    <div className="mt-3">
                      <p className="comment-p">
                      " There are many variations of passages of Lorem Ipsum 
                      available, but the majority have suffered alteration in some form, by injected humour "
                      </p>
                    </div>
                </li>

              </ul>
              
              <h5 className="blogd-card">Leave a Comment:</h5>
              <form action="blogd-form">
                <div className="row11">
                  <div className="col-md-12">
                    <div className="mb-3">
                       <label className="blogd-label">Your Comment</label>
                       <textarea name="message" id="message" placeholder="Your comment"
                       rows={5} className="form-control"></textarea>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="blogd-label">Name
                        <span className="text-danger">*</span>
                      </label>
                      <input type="text" placeholder="Name" className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="blogd-label">Your Email
                        <span className="text-danger">*</span>
                      </label>
                      <input type="text" placeholder="Email" className="form-control" />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="blogd-grid">
                       <button className="btn1" type="submit">Send Message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
           
            <div className="col-md-12 col-lg-5 col-xl-4 rt">
              <aside className="side-bar">
                <div className="widget">
                  <form className="search">
                    <div className="in-grup">
                      <input type="text" className="frm" placeholder="Enter your keywords" />
                      <div className="grup-btn">
                         <button className="btn2" type="submit">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         width="30px">
                         <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                         </button>
                      </div>
                    </div>
                  </form>  
                </div>
                <div className="widget-recent">
                   <h4 className="post-title">Recent Post</h4>
                   <div className="widget-post">
                     <div className="first1">
                       <div className="post-media">
                           <img src="data:image/jpeg;base64,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" alt="" />
                       </div>
                       <div className="post-info">
                         <div className="post-heading">
                            <h6 className="post-head">
                               <a>Precious tips to help you get better</a>
                            </h6>
                         </div>
                         <ul className="bd-ul">
                         <li className="bd-date">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                           height="1em"
                           width="20px"
                           >
                           <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                            19 July 2021
                           </li>
                         </ul>
                       </div>
                     </div>

                     <div className="first1">
                       <div className="post-media">
                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROm2qcAhmdafLKCfiset0sp5Zy9bjI9SO0g&s" alt="" />
                       </div>
                       <div className="post-info">
                         <div className="post-heading">
                            <h6 className="post-head">
                               <a>The 10 Steps Needed For Putting.</a>
                            </h6>
                         </div>
                         <ul className="bd-ul">
                         <li className="bd-date">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                           height="1em"
                           width="20px"
                           >
                           <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                            19 July 2021
                           </li>
                         </ul>
                       </div>
                     </div>

                     <div className="first1">
                       <div className="post-media">
                           <img src="	https://meditro.themetrades.com/react/static/media/pic1.ac173f78b519b3024706.jpg" alt="" />
                       </div>
                       <div className="post-info">
                         <div className="post-heading">
                            <h6 className="post-head">
                               <a>Ten Doubts You Should Clarify About.</a>
                            </h6>
                         </div>
                         <ul className="bd-ul">
                         <li className="bd-date">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                           height="1em"
                           width="20px"
                           >
                           <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
                            19 July 2021
                           </li>
                         </ul>
                       </div>
                     </div>
                   </div>
                </div>
                <div className="widget-gallery">
                  <h4 className="widget-title">
                   Our gallery
                  </h4>
                  <ul className="widget-image">
                    <li> <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdqedIEscEntyoV8Wd0aIIIDI5LuxdippIA&s" alt="" /></li>
                    <li> <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGb9LK8aLZHezSk_-pZzmeY3rHmUDHdefXg&s" alt="" /></li>
                    <li> <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo1pKiJUh9iFO1PUiQY33nf9UWqcU7VtjwPw&s" alt="" /></li>
                    <li> <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9GtNr7iJZU4P4silIIL5xzlSZ_oC5X7s3w&s" alt="" /></li>
                    <li> <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxXHtSQEMS75569fgmd2s5O0oLQisfRwmYA&s" alt="" /></li>
                    <li> <img src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpmFSfOM_GTnQVejG88tgEOkBIxdeveK0uA&s" alt="" /></li>
                  </ul>
                </div>
                <div className="widget-tag">
                  <h4 className="widget-title">Tags</h4>
                  <div className="tag">
                     <a>Improvements</a>
                     <a>Health</a>
                     <a>Life</a>
                     <a>Covid</a>
                     <a>Healthy</a>
                     <a>Growth</a>
                     <a>Education</a>
                     <a>Manage</a>
                     <a>General</a>
                  </div>
                </div>
              </aside>
            </div>
         </div>
       </div>
    </div>

    </>)
}
export default BlogDetail