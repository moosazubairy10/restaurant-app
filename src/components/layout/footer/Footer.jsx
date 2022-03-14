import React from "react";
import "../../../styles/layout/footer.css";
import groomLogo from "../../../Images/logo.png";
import { Link } from "react-router-dom";
import googleplay from "../../../Images/icons/googleplay.png";
import appstore from "../../../Images/icons/appstore.png";
import * as FaIcons from "react-icons/fa";
import facebook from "../../../Images/icons/facebook.png";
import linkdin from "../../../Images/icons/linkdin.png";
import youtube from "../../../Images/icons/youtube.png";
import google from "../../../Images/icons/google.png";
import twitter from "../../../Images/icons/twitter.png";
import navlogo from "../../../Images/navlogo.png";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>

      <Container>
        <Row>
          <Column>
            <div>
              <div>
                <img src={navlogo} alt="" />
              </div>
              <div className="footerInnerContainerColOneParagraph">
                One is to focus on the quality of your meat. If you
                <br /> can call out organic beef, sustainable farming.
              </div>
              <div className="footerInnerContainerColOneInfo">
                <span className="footerInnerContainerColOneInfoLabel">
                  Phone:
                </span>

                <span className="footerInnerContainerColOneInfoValue">
                  {" "}
                  +33 6 23 23 00 00{" "}
                </span>
              </div>
              <div>
                <span className="footerInnerContainerColOneInfoLabel">
                  Email:
                </span>

                <span className="footerInnerContainerColOneInfoValue">
                  <b> groom@delivery.com</b>
                </span>
              </div>
              <div className="footerIcons">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
                <img src={google} alt="" />
                <img src={linkdin} alt="" />
              </div>
            </div>
          </Column>

          <Column>
            <div>
              <div className="footerLinkTitle">Découvrir GROOM</div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Investisseurs
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  À propos
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Vente à emporter
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Voir plus
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Espace presse
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Blog Foodscene
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Blog Tech
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Blog Design{" "}
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Nous rejoindre
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Inscription restaurant
                </Link>
              </div>
            </div>

          </Column>
          <Column>
            <div>
              <div className="footerLinkTitle">Découvrir GROOM</div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Investisseurs
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  À propos
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Vente à emporter
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Voir plus
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Espace presse
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Blog Foodscene
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Blog Tech
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Blog Design{" "}
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Nous rejoindre
                </Link>
              </div>
              <div className="footerLinkContainer">
                <Link to="#" className="footerLink">
                  Inscription restaurant
                </Link>
              </div>
            </div>
          </Column>
          <Column>
            <div>
              <div className="footerLinkTitle">
                Gardez GROOM dans
                <br /> votre poche
              </div>
              <div>
                <div className="footerLinkContainer">
                  <Link to="#">
                    <img src={appstore} alt="" />
                  </Link>
                </div>
                <div className="footerLinkContainer">
                  <Link to="#">
                    <img src={googleplay} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </Column>

        </Row>
        <div className="footer_copyright">
          &copy; GROOM {new Date().getFullYear()}
        </div>


      </Container >
    </Box >
  );
};
export default Footer;



// const Footer = () => {
//   return (
//     <div className="footer">

//       <div className="container footerContainer">

//         <div className="footerInnerContainer">


//           <div className="footerInnerContainerColOne" style={{ backgroundColor: "white", marginLeft: '-10px' }}>
//             <div>
//               <img src={navlogo} alt="" />
//             </div>
//             <div className="footerInnerContainerColOneParagraph">
//               One is to focus on the quality of your meat. If you
//               <br /> can call out organic beef, sustainable farming.
//             </div>
//             <div className="footerInnerContainerColOneInfo">
//               <span className="footerInnerContainerColOneInfoLabel">
//                 Phone:
//               </span>

//               <span className="footerInnerContainerColOneInfoValue">
//                 {" "}
//                 +33 6 23 23 00 00{" "}
//               </span>
//             </div>
//             <div>
//               <span className="footerInnerContainerColOneInfoLabel">
//                 Email:
//               </span>

//               <span className="footerInnerContainerColOneInfoValue">
//                 <b> groom@delivery.com</b>
//               </span>
//             </div>
//             <div className="footerIcons">
//               <img src={facebook} alt="" />
//               <img src={twitter} alt="" />
//               <img src={youtube} alt="" />
//               <img src={google} alt="" />
//               <img src={linkdin} alt="" />
//             </div>
//           </div>

//           <div>
//             <div className="footerLinkTitle">Découvrir GROOM</div>
//             <div className="footerLinkContainer">
//               <Link to="#" className="footerLink">
//                 Investisseurs
//               </Link>
//             </div>
//             <div className="footerLinkContainer">
//               <Link to="#" className="footerLink">
//                 À propos
//               </Link>
//             </div>
//             <div className="footerLinkContainer">
//               <Link to="#" className="footerLink">
//                 Vente à emporter
//               </Link>
//             </div>
//             <div className="footerLinkContainer">
//               <Link to="#" className="footerLink">
//                 Voir plus
//               </Link>
//             </div>
//             <div className="footerLinkContainer">
//               <Link to="#" className="footerLink">
//                 Espace presse
//               </Link>
//             </div>
//             <div className="footerLinkContainer">
//               <Link to="#" className="footerLink">
//                 Blog Foodscene
//               </Link>
//             </div>
//             <div className="footerLinkContainer">
//               <Link to="#" className="footerLink">
//                 Blog Tech
//               </Link>
//             </div>
//             <div className="footerLinkContainer">
//               <Link to="#" className="footerLink">
//                 Blog Design{" "}
//               </Link>
//             </div>
//             <div className="footerLinkContainer">
//               <Link to="#" className="footerLink">
//                 Nous rejoindre
//               </Link>
//             </div>
//             <div className="footerLinkContainer">
//               <Link to="#" className="footerLink">
//                 Inscription restaurant
//               </Link>
//             </div>
//           </div>



//           <div>
//             <div className="footerLinkTitle">Mentions légales</div>

//             <div className="footerLinkContainer">
//               <Link to="#" className="footerLink">
//                 Mentions légales{" "}
//               </Link>
//             </div>
//             <div className="footerLinkContainer">
//               <Link to="#" className="footerLink">
//                 Confidentialité{" "}
//               </Link>
//             </div>
//             <div className="footerLinkContainer">
//               <Link to="#" className="footerLink">
//                 Cookies
//               </Link>
//             </div>
//           </div>
//           <div>
//             <div className="footerLinkTitle">
//               Gardez GROOM dans
//               <br /> votre poche
//             </div>
//             <div>
//               <div className="footerLinkContainer">
//                 <Link to="#">
//                   <img src={appstore} alt="" />
//                 </Link>
//               </div>
//               <div className="footerLinkContainer">
//                 <Link to="#">
//                   <img src={googleplay} alt="" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="footer_copyright">
//         &copy; GROOM {new Date().getFullYear()}
//       </div>
//     </div>
//   );
// };

// export default Footer;
