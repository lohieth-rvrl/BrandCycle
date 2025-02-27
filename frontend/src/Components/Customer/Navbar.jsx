// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../../css/customer.css";

// const Navbar = () => {
//   return (
//     <div className="container-fluid py-2 p-0" id="nav1">
//       <div className="container px-5">
//         <nav className="navbar navbar-expand-lg">
//           <div className="container p-0">
//             <Link className="navbar-brand" to="/">
//               <h1>BRAND-C</h1>
//             </Link>

//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ms-auto gap-4">
//                 <li className="nav-item">
//                   <Link className="nav-link active" to="/   ">
//                     HOME
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/shop">
//                     ALL Products
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/about">
//                     ABOUT
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/contact">
//                     CONTACT
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/cart">
//                     <i className="bi bi-cart"></i> CART
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiUser, BiShoppingBag } from 'react-icons/bi';
import "../../css/customer.css"

const Navbar = () => {
  return (
    <div className="container-fluid py-2 p-0" id="nav1">
      <div className="container px-5">
        <nav className="navbar navbar-expand-lg">
          <div className="container p-0">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="d-flex align-items-center order-lg-2 gap-3">
              <BiSearch size={24} />

              <Link className="nav-link" to="/login">
                <i className="bi bi-cart"></i><BiUser size={24} />
              </Link>
              <BiShoppingBag size={24} />
            </div>

            <div className="collapse navbar-collapse order-lg-1" id="navbarNav">
              <ul className="navbar-nav ms-auto gap-4">
                <li className="nav-item">
                  <Link className="nav-link active" to="/   ">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    ALL Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    CONTACT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <i className="bi bi-cart"></i> CART
                  </Link>
                </li>
              </ul>
            </div>

            <Link className="navbar-brand mx-auto d-lg-block d-none text-center" to="/">
              <h1 className="m-0" style={{ fontWeight: 'bold', fontSize: '2rem' }}>BRAND-C</h1>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
