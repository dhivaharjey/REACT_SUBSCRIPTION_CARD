import React from "react";
import "./style/PriceCard.css";

function PriceCard({ data }) {
  return (
    <>
      {data.map((item) => {
        return (
          <div className="col-lg-4 ">
            <div className="card p-3 mt-2 mb-2 mb-lg-5">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">
                  {item.title}
                </h5>
                <h1 className="card-price fw-bolder text-center text-dark">
                  ${item.price}
                  <span className="period">/month</span>
                </h1>
                <hr />
                <ul className="fa-ul">
                  <li className="fw-bolder">
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {item.user}
                  </li>
                  <li className="fw-bolder">
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    {item.storage}
                  </li>
                  <li className="fw-bolder">
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Unlimited Public Project
                  </li>
                  <li className="fw-bolder">
                    <span className="fa-li">
                      <i className="fas fa-check"></i>
                    </span>
                    Community Access
                  </li>
                  <li className={item.project}>
                    <span className="fa-li">
                      <i className={item.projectIcon}></i>
                    </span>
                    Unlimited Ptivate Projects
                  </li>
                  <li className={item.phone}>
                    <span className="fa-li">
                      <i className={item.phoneIcon}></i>
                    </span>
                    Dedicated Phone Support
                  </li>
                  <li className={item.subDomain}>
                    <span className="fa-li">
                      <i className={item.subDomainIcon}></i>
                    </span>
                    Free Subdomain
                  </li>
                  <li className={item.month}>
                    <span className="fa-li">
                      <i className={item.monthIcon}></i>
                    </span>
                    Monthly Status Reports
                  </li>
                </ul>
                <div className="d-grid">
                  <button className="btn   fw-bolder">BUTTON</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PriceCard;

// function PriceCard(props) {
//   return (
//     <div class="col-lg-4">
//       <div class="card mb-5 mb-lg-0">
//         <div class="card-body">
//           <h5 class="card-title text-muted text-uppercase text-center">
//             {props.cardData.title}
//           </h5>
//           <h2 class="card-price fw-bolder text-center text-dark">
//             {props.cardData.price}
//             <span class="period">$/month</span>
//           </h2>
//           <hr />
//           <ul class="fa-ul">
//             <li class="fw-bolder">
//               <span class="fa-li">
//                 <i class="fas fa-check"></i>
//               </span>
//               {props.cardData.user}
//             </li>
//             <li class="fw-bolder">
//               <span class="fa-li">
//                 <i class="fas fa-check"></i>
//               </span>
//               {props.cardData.storage}
//             </li>
//             <li class="fw-bolder">
//               <span class="fa-li">
//                 <i class="fas fa-check"></i>
//               </span>
//               Unlimited Public Project
//             </li>
//             <li class="fw-bolder">
//               <span class="fa-li">
//                 <i class="fas fa-check"></i>
//               </span>
//               Community Access
//             </li>
//             <li class={props.cardData.project}>
//               <span class="fa-li">
//                 <i class={props.cardData.projectIcon}></i>
//               </span>
//               Unlimited Ptivate Projects
//             </li>
//             <li class={props.cardData.phone}>
//               <span class="fa-li">
//                 <i class={props.cardData.phoneIcon}></i>
//               </span>
//               Phone Support
//             </li>
//             <li class={props.cardData.subDomain}>
//               <span class="fa-li">
//                 <i class={props.cardData.subDomainIcon}></i>
//               </span>
//               Free Subdomain
//             </li>
//             <li class={props.cardData.month}>
//               <span class="fa-li">
//                 <i class={props.cardData.monthIcon}></i>
//               </span>
//               Monthly Status Reports
//             </li>
//           </ul>
//           <div class="d-grid">
//             <button class="btn btn-primary fw-bolder">BUTTON</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PriceCard;
