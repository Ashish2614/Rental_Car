import React from 'react';
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

export default function Testimonial() {
  
  const testimonialOptions = {
    spaceBetween: 25,
    slidesPerView: 1, // 1 review on mobile
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2, // 2 reviews on tablets/desktops
      },
      1024: {
        slidesPerView: 3, // 3 reviews on larger screens if you have many
      }
    },
  };

  return (
    <div className="container pb-5">
      <div className="text-center mx-auto pb-5" style={{ maxWidth: "800px" }}>
        <h1 className="display-5 text-capitalize mb-3">What Our Clients <span className="text-primary">Say</span></h1>
        <p className="mb-0">Read reviews from our satisfied customers who rented cars for their business and leisure trips.</p>
      </div>

      <div className="testimonial-carousel">
        <Swiper modules={[Autoplay, Pagination]} {...testimonialOptions}>
          
          {/* --- REVIEW 1 --- */}
          <SwiperSlide>
            <div className="testimonial-item bg-light p-4 rounded">
              <div className="d-flex align-items-center mb-3">
                <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle" style={{ width: "60px", height: "60px" }} alt="Client" />
                <div className="ps-3">
                  <h5 className="mb-1">John Doe</h5>
                  <small className="text-muted">Business Traveler</small>
                </div>
              </div>
              <p className="mb-0 italic">"The booking process was seamless, and the Tesla Model S was in pristine condition. Will absolutely rent from them again!"</p>
            </div>
          </SwiperSlide>

          {/* --- REVIEW 2 --- */}
          <SwiperSlide>
            <div className="testimonial-item bg-light p-4 rounded">
              <div className="d-flex align-items-center mb-3">
                <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle" style={{ width: "60px", height: "60px" }} alt="Client" />
                <div className="ps-3">
                  <h5 className="mb-1">Sarah Jenkins</h5>
                  <small className="text-muted">Family Vacationer</small>
                </div>
              </div>
              <p className="mb-0 italic">"Excellent service! The Toyota Corolla Cross was perfect for our week-long road trip. Highly recommended."</p>
            </div>
          </SwiperSlide>

          {/* Add more <SwiperSlide> items as needed */}
          
        </Swiper>
      </div>
    </div>
  );
}






























// import React from 'react'
// import { SwiperSlide } from 'swiper/react'

// import { Swiper, SwiperSlide } from 'swiper/react';
// importf{ Autoplay }  from 'swiper/modules';

// import 'swiper/css'

// export default function Testimonial() {

//   breakpoints: {

//     640: {
//       slidesPerView: 1,
//         spaceBetween: 0,
//       },
//     768: {
//       slidesPerView: 2,
//         spaceBetween: 20,
//       },
//     1024: {
//       slidesPerView: 3,
//         spaceBetween: 20,
//       },
//     loop: true,
//       autoplay: {
//       delay: 2000,
//         disableOnInteraction: false,
//       },
//     modules: [Autoplay]
//   }
// }
  
//     }
//   }

// return (
//   <>
//     <div className="container-fluid testimonial pb-5">
//       <div className="container pb-5">
//         <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxwidth: "800px" }}>
//           <h1 className="display-5 text-capitalize mb-3">Our Clients<span className="text-primary"> Riviews</span></h1>
//           <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
//           </p>
//         </div>
//         <div className=" testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
//           <div className="testimonial-item">
//             <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i>
//             </div>
//             <Swiper {...sliderOptions} />
//             <SwiperSlide>
//               <div className="testimonial-inner p-4">
//                 <img src="img/testimonial-1.jpg" className="img-fluid" alt="" />
//                 <div className="ms-4">
//                   <h4>Person Name</h4>
//                   <p>Profession</p>
//                   <div className="d-flex text-primary">
//                     <i className="fas fa-star"></i>
//                     <i className="fas fa-star"></i>
//                     <i className="fas fa-star"></i>
//                     <i className="fas fa-star"></i>
//                     <i className="fas fa-star text-body"></i>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="border-top rounded-bottom p-4">
//                 <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
//               </div>
//             </SwiperSlide>
//           </div>
//           <div className="testimonial-item">
//             <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i>
//             </div>
//             <SwiperSlide>
//               <div className="testimonial-inner p-4">
//                 <img src="img/testimonial-2.jpg" className="img-fluid" alt="" />
//                 <div className="ms-4">
//                   <h4>Person Name</h4>
//                   <p>Profession</p>
//                   <div className="d-flex text-primary">
//                     <i className="fas fa-star"></i>
//                     <i className="fas fa-star"></i>
//                     <i className="fas fa-star"></i>
//                     <i className="fas fa-star text-body"></i>
//                     <i className="fas fa-star text-body"></i>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <div className="border-top rounded-bottom p-4">
//               <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
//             </div>
//           </div>
//           <div className="testimonial-item">
//             <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i>
//             </div>
//             <SwiperSlide>
//               <div className="testimonial-inner p-4">
//                 <img src="img/testimonial-3.jpg" className="img-fluid" alt="" />
//                 <div className="ms-4">
//                   <h4>Person Name</h4>
//                   <p>Profession</p>
//                   <div className="d-flex text-primary">
//                     <i className="fas fa-star"></i>
//                     <i className="fas fa-star"></i>
//                     <i className="fas fa-star text-body"></i>
//                     <i className="fas fa-star text-body"></i>
//                     <i className="fas fa-star text-body"></i>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide>
//               <div className="border-top rounded-bottom p-4">
//                 <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit.</p>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   </div >

//     </>
//   )
// }
