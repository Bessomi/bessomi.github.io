import React from "react";
import SU from '../images/su_logo.png'
import KTH from '../images/kth_logo.png'
import POLIMI from '../images/polimi_logo.png'

class Home extends React.Component {

	constructor(props) {
		super(props)
	}



  render() {
    return (
      <div className="center-wrapper">
        <div className="edu-container">
          <div className="edu-title">
            Education
          </div>
          <div className="edu-logo-box edu-itemA1"> <a href="https://www.kth.se/en/studies/master/mathematics/msc-mathematics-1.8549" target="_blank"> <img src={KTH} className="edu-logo"/> </a> </div>
          <div className="edu-text edu-itemA2">
            <div className="edu-text-title-first">Master of Science (MSc)</div>
            <div className="edu-text-title-second">Mathematics</div>
            <div className="edu-text-title-third">Graduated February 2023</div>
          </div>
          <div className="edu-logo-box edu-itemB1"> <a href="https://www.polimi.it/en/international-prospective-students/laurea-magistrale-programmes-equivalent-to-master-of-science/programme-catalogue/mathematical-engineering" target="_blank"> <img src={POLIMI} className="edu-logo"/> </a> </div>
          <div className="edu-text edu-itemB2">
            <div className="edu-text-title-first">Exchange</div>
            <div className="edu-text-title-second">Quantitative Finance</div>
            <div className="edu-text-title-third">Autumn semester 2021</div>
          </div>
          <div className="edu-logo-box edu-itemC1"> <a href="https://www.su.se/english/search-courses-and-programmes/nmatk-1.412172" target="_blank"> <img src={SU} className="edu-logo"/> </a> </div>
          <div className="edu-text edu-itemC2">
          <div className="edu-text-title-first">Bachelor of Science (BSc)</div>
          <div className="edu-text-title-second">Mathematics</div>
            <div className="edu-text-title-third">Graduated June 2020</div>
          </div>
        </div>
      </div>
    )
  }
}













// GRID SYSTEM, I'LL TRY FLEX INSTEAD.

//   render() {
//     return (
//       <div className="edu-container">
//         <div className="edu-title">
//           Education
//         </div>
//         <div className="edu-logo-box edu-itemA1"> <img src={KTH} className="edu-logo"/> </div>
//         <div className="edu-text edu-itemA2">
//           asdasdasdasdasdasd
//         </div>
//         <div className="edu-logo-box edu-itemB1"> <img src={KTH} className="edu-logo"/> </div>
//         <div className="edu-text edu-itemB2">
//           worsdkap jdaspijd saoijd lkasdm said uasidj lkasj lasjd oasidj a0sud jasjd lkas d
//         </div>
//         <div className="edu-logo-box edu-itemC1"> <img src={KTH} className="edu-logo"/> </div>
//         <div className="edu-text edu-itemC2">
//           asdasdasdasdasdasd
//         </div>
//       </div>
//     )
//   }
// }

export default Home