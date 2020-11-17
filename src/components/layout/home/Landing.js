import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Buy } from '../../Buy/Buy';
import Typer from '../../Typer';
import { API_URL as api_url,} from '../../../actions/types';
import axios from 'axios';
import { faSpider, faSpinner } from '@fortawesome/free-solid-svg-icons';
const Landing = () => {

   const [loading, setLoading] = useState(true);
   const [config, setConfig] = useState({
      price: 0,
      sold: 0
   })
   const config2 = {
     headers: {
       'Content-Type': 'application/json'
     }
   };


   useEffect(  ()  => {
     
      try {
        localStorage.setItem('unlocking', false);
        const res = axios.get(api_url+'/api/trade', null, config2);
        res.then((data =>{
          if(data.data.data.length > 0){
          
           setLoading(false);
            setConfig({...config, ['price']: parseFloat(data.data.data[0].price), ['sold']: parseFloat(data.data.data[0].sold)});
            
          
          };
        }));
       
      
      } catch (err) {
    
    
        
      }
  
  
      
    }, [
       
    ])
    const {price,  sold } = config;

    let slideP = (sold / 8000000 ) * 100;
    return (
        <div>
           {
              !loading ? (
           <div>
              
           <section style={{marginTop: "65px"}} className="custom_container">
<div style={{float: "left", width: "400px"}} className="theHax">
   
<div id="hex1" class="hexagon-wrapper">
    <div id="color1" class="hexagon"></div>
</div>
<div id="hex2" class="hexagon-wrapper">
    <div id="color2" class="hexagon"></div>
</div>
<div id="hex3" class="hexagon-wrapper">
    <div id="color3" class="hexagon"></div>
</div>
</div>



<a href="#" className="d-none" id="openstake" data-toggle="modal" data-target="#stakeCoin" data-backdrop="static" data-keyboard="false">Stake</a>
    <div className="">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="my-5">
                        <div className="row">
                            <div className="col-md-6 theHeaderText">
                                <div className="text-center my-4">
                                    <h3 className="future"><span className="text-ella typewriter"><Typer /><span className="typer">|</span></span>  your crypto assets with the most powerful Automated Liquidity platform for crypto assets</h3>
 
<div class="hero-btns">
<a href="https://app.ellaswap.com/" target="_blank" class="btn primary-btn">Launch App</a>
                <a href="https://docs.ella.finance" target="_blank" class="btn">Read the docs</a>
        
    <Buy price={price}/>
                    </div>
                             
                                </div>
                            </div>
                            <div className=" col-md-6  invest-progress-div" style={{marginTop: "-90px"}}>
              
                                <div className="invest-progress my-4">
                                <img src="/globe.png" className="rotate linear infinite imageSpin" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="count-down-and-progress">
                <div className="row">
                    <div className="col-md-4">
                    <h4>Presale Starts </h4>
                    Starts on NOV 24<sup>th</sup> ends DEC 2<sup>nd</sup>
                        <div id="demo">

                        </div>
                    </div>

                    <div className="col-md-8">
<h5>Total Sold  {parseFloat(sold).toFixed(2) - 6.65} / 8M ELLA</h5>

<div class="head-progress-wrapper">


                                    <div className="progress-background">
        <span className="first">
            <span className="first-inner-wrapper"><span className="first-inner">3k</span></span>
            
        </span>
        <span className="second">   <span className="first-inner-wrapper"><span className="first-inner">6k</span></span></span>
        <span className="third"><span className="first-inner-wrapper"><span className="first-inner">9k</span></span></span>
        <span className="last"></span>
    </div>

    <div class="head-progress-bar">
 
                                        <span style={{width: slideP+"%"}}></span>
                                    </div>
    </div>
</div>
                </div>
            </div>
        </div>
    </div>

  
</section>
<section className="about-container">
<div className="container">
<div className="row mt-6">
                <div className="col-md-4">
                    <div className="about-app">
                    <img src="/liquidity.svg" className="img-fluid" />
                    <h3>Liquidity Protocol
</h3>
                    <p> 
                    ELLA is a liquidity protocol powered by chain link decentralised price oracle.
</p>
                    </div>
                </div>

               

                <div className="col-md-4">
                    <div className="about-app">
                    <img src="/zero.svg" className="img-fluid" />
                    <h3>Zero Spillage

</h3>
                    <p>Buy or sell crypto-assets at a constant market price with zero spillage.

</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="about-app">
                    <img src="/offering.svg" className="img-fluid" />
                    <h3>Initial Ella Offering
</h3>
                    <p>
                    Instead of paying exorbitant listing fees to get listed on CEXs or other DEXs, it is literally free to offer assets on ELLA.
</p>
                    </div>
                </div>
            </div>
            </div>
</section>
<div className="container">

<div className="row">
<div className="col-md-4 token-writeup">
<div class="token__cont skew" data-v-074c60b6="">
   <div class="token__details" data-v-074c60b6="">
      <div class="u-flex section-title" data-v-603d447f="" data-v-074c60b6="">
         <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-603d447f="">
            <line y1="10" x2="40" y2="10" stroke="#ffffff" data-v-603d447f=""></line>
         </svg>
         <p data-v-603d447f="" style={{color:" rgb(255, 255, 255);"}}>TOKEN</p>
      </div>
      <h4 data-v-074c60b6="">Tokenization</h4>
      <p data-v-074c60b6=""> Ellaswap has a native token with a ticker (ELLA) built on the Ethereum blockchain. ELLA is the governance token that powers the Ellaswap. </p>
      <div class="row token-info" >
         <div className="col-md-6">
            <p>NAME</p>
            <p><small>ELLA  (ELLA)</small></p>
         </div>
         <div className="col-md-6">
            <p>MAXIMUM SUPPLY</p>
            <p><small>10M ELLA</small></p>
         </div>
         <div className="col-md-6">
            <p>CIRCULATING SUPPLY</p>
            <p><small>10M ELLA</small></p>
         </div>
         <div className="col-md-6">
            <p>LISTING PRICE</p>
            <p><small>1 ELLA = $0.6</small></p>
         </div>
      </div>
   </div>
</div>
</div>

<div className="col-md-8 token-chart">


<div class="token__pie-cont" data-v-074c60b6="">
   <svg id="pie-legend" viewBox="0 0 700 500" class="token__chart-legend" data-v-074c60b6="">
      <g class="legend legend__airgrab">
         <rect x="116.752" y="0.955566" width="134" height="31" rx="3.5" fill="#e83e8c" stroke="#e83e8c"></rect>
         <line x1="0.538574" y1="15.9556" x2="116.247" y2="15.9556" stroke="#e83e8c"></line>
         <text data-name="Airgrab" transform="translate(125 20)" fill="#fff" font-size="12" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="500">
            <tspan x="0" y="0">Farming (20%)</tspan>
         </text>
      </g>
      <g class="legend legend__founding-staff">
         <rect x="116.752" y="0.955566" width="134" height="31" rx="3.5" fill="#ffc107" stroke="#ffc107"></rect>
         <line x1="0.538574" y1="15.9556" x2="116.247" y2="15.9556" stroke="#ffc107"></line>
         <text data-name="Liquidity on other exchanges" transform="translate(125 20)" fill="#05386b" font-size="12" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="500">
            <tspan x="0" y="0">Exchange Liquidity(1.9%)</tspan>
         </text>
      </g>
      <g class="legend legend__charity">
         <rect x="116.752" y="0.955566" width="134" height="31" rx="3.5" fill="#6610f2" stroke="#6610f2"></rect>
         <line x1="0.538574" y1="15.9556" x2="116.247" y2="15.9556" stroke="#6610f2"></line>
         <text data-name="Airdrop" transform="translate(125 20)" fill="#fff" font-size="12" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="500">
            <tspan x="0" y="0">Airdrop (0.1%)</tspan>
         </text>
      </g>
      <g class="legend legend__reserve">
         <rect x="116.752" y="0.955566" width="134" height="31" rx="3.5" fill="#8EE4AF" stroke="#8EE4AF"></rect>
         <line x1="0.538574" y1="15.9556" x2="116.247" y2="15.9556" stroke="#8EE4AF"></line>
         <text data-name="Reserve" transform="translate(125 20)" fill="#05386b" font-size="12" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="500">
            <tspan x="0" y="0">Reserve (10%)</tspan>
         </text>
      </g>
      <g class="legend legend__core-investors">
         <rect x="116.752" y="0.955566" width="134" height="31" rx="3.5" fill="#FF9595" stroke="#FF9595"></rect>
         <line x1="0.538574" y1="15.9556" x2="116.247" y2="15.9556" stroke="#FF9595"></line>
         <text data-name="Liquidity on Ellaswap" transform="translate(125 20)" fill="#fff" font-size="12" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="500">
            <tspan x="0" y="0">Ellaswap Liquidity (5%)</tspan>
         </text>
      </g>
      <g class="legend legend__advisors">
         <rect x="116.752" y="0.955566" width="134" height="31" rx="3.5" fill="#F9F0FF" stroke="#F9F0FF"></rect>
         <line x1="0.538574" y1="15.9556" x2="116.247" y2="15.9556" stroke="#F9F0FF"></line>
         <text data-name="Team" transform="translate(125 20)" fill="#05386b" font-size="12" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="500">
            <tspan x="0" y="0">Team (2%)</tspan>
         </text>
      </g>
      <g class="legend legend__core-team">
         <rect x="116.752" y="0.955566" width="134" height="31" rx="3.5" fill="#95CAFF" stroke="#95CAFF"></rect>
         <line x1="0.538574" y1="15.9556" x2="116.247" y2="15.9556" stroke="#95CAFF"></line>
         <text data-name="Charity" transform="translate(125 20)" fill="#fff" font-size="12" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="500">
            <tspan x="0" y="0">Charity (1%)</tspan>
         </text>
      </g>
      <g class="legend legend__ico">
         <rect x="1.10864" y="45.2787" width="133" height="31" rx="3.5" fill="#bafc00" stroke="#bafc00"></rect>
         <line x1="132.255" y1="46.4251" x2="177.823" y2="0.857666" stroke="#bafc00"></line>
         <text data-name="Presale" transform="translate(10 65)" fill="#05386b" font-size="12" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="500">
            <tspan x="0" y="0">Presale (60%)</tspan>
         </text>
      </g>
   </svg>
   <svg id="pie-chart" class="token__chart" viewBox="0 0 500 500" data-v-074c60b6="">
      <circle fill="none" stroke="black" stoke-width="3" cx="250" opacity="0" cy="250" r="250"></circle>
      <circle fill="#05386b" cx="250" filter="url(#blurCircle)" opacity="0.2" cy="250" r="250"></circle>
      <g transform="rotate(0, 250, 250)">
         <path d="M 250 250,L 250 40,A 210 210, 0 0 1,373.4318 80.1041Z" fill="#e83e8c"></path>
      </g>
      <g transform="rotate(36, 250, 250)">
         <path d="M 250 250,L 250 40,A 210 210, 0 0 1,351.1766 65.9802Z" fill="#ffc107"></path>
      </g>
      <g transform="rotate(64.8, 250, 250)">
         <path d="M 250 250,L 250 40,A 210 210, 0 0 1,276.3275 41.6569Z" fill="#6610f2"></path>
      </g>
      <g transform="rotate(72, 250, 250)">
         <path d="M 250 250,L 250 40,A 210 210, 0 0 1,373.4318 80.1041Z" fill="#8EE4AF"></path>
      </g>
      <g transform="rotate(108, 250, 250)">
         <path d="M 250 250,L 250 40,A 210 210, 0 0 1,327.3079 54.7476Z" fill="#FF9595"></path>
      </g>
      <g transform="rotate(129.6, 250, 250)">
         <path d="M 250 250,L 250 40,A 210 210, 0 0 1,302.2193 46.5961Z" fill="#F9F0FF"></path>
      </g>
      <g transform="rotate(144, 250, 250)">
         <path d="M 250 250,L 250 40,A 210 210, 0 0 1,373.4318 80.1041Z" fill="#95CAFF"></path>
      </g>
      <g transform="rotate(180, 250, 250)">
         <path d="M 250 250,L 250 40,A 210 210, 0 1 1,249.9985 460.0000Z" fill="#bafc00"></path>
      </g>
      <circle fill="#379683" cx="250" cy="250" r="140"></circle>
      <circle fill="#8EE4AF" cx="250" cy="250" r="100"></circle>
   </svg>
</div>
</div>
</div>




{/* MAP AND DETAILS */}

</div>

<div className="container-fluid brand-bg">

        <div className="container">
           
        <div className="row">
        <div className="col-md-4">
        <div class="token__details" data-v-074c60b6="">
   <div class="u-flex section-title" data-v-603d447f="" data-v-074c60b6="">
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-603d447f="">
         <line y1="10" x2="40" y2="10" stroke="#ffffff" data-v-603d447f=""></line>
      </svg>
      <p data-v-603d447f="" style={{color: "rgb(255, 255, 255);"}}>ACHIEVEMENTS &amp; GOALS</p>
   </div>
   <h4 data-v-074c60b6="">Roadmap</h4>
   <p data-v-074c60b6=""> Ellaswap roadmap consists of well thought out milestones that would expand the growth of its' products and reach </p>
</div>
        </div>

        <div className="col-md-8">
        <div class="map" data-v-54b7ff09="" data-v-074c60b6="">
   <svg xmlns="http://www.w3.org/2000/svg" width="1629.355" height="1083" viewBox="0 0 1629.355 1083">
      <defs data-v-54b7ff09="">
         <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox" data-v-54b7ff09="">
            <stop offset="0" stop-color="#fff" stop-opacity="0" data-v-54b7ff09=""></stop>
            <stop offset="1" stop-color="#379683" data-v-54b7ff09=""></stop>
         </linearGradient>
         <linearGradient id="linear-gradient-2" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox" data-v-54b7ff09="">
            <stop offset="0" stop-color="#8EE4AF" data-v-54b7ff09=""></stop>
            <stop offset="1" stop-color="#5CDB95" data-v-54b7ff09=""></stop>
         </linearGradient>
         <linearGradient id="linear-gradient-4" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox" data-v-54b7ff09="">
            <stop offset="0" stop-color="#8EE4AF" data-v-54b7ff09=""></stop>
            <stop offset="1" stop-color="#5CDB95" data-v-54b7ff09=""></stop>
         </linearGradient>
         <linearGradient id="linear-gradient-9" x1="1" x2="0" data-v-54b7ff09=""></linearGradient>
         <linearGradient id="linear-gradient-13" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox" data-v-54b7ff09="">
            <stop offset="0" stop-color="#8EE4AF" data-v-54b7ff09=""></stop>
            <stop offset="1" stop-color="#5CDB95" data-v-54b7ff09=""></stop>
         </linearGradient>
      </defs>
      <g id="Group_1310" data-name="Group 1310" transform="translate(-188 -5038)" data-v-54b7ff09="">
         <path id="Path_1519" data-name="Path 1519" d="M2042.138,674.987V606.532s-1.821-21.768,21.986-21.768h108.51" transform="translate(-1285.888 4613.326)" fill="none" stroke="#bafc00" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" data-v-54b7ff09=""></path>
         <g id="Group_1309" data-name="Group 1309" data-v-54b7ff09="">
            <path id="Path_1521" data-name="Path 1521" d="M2247.008,584.764V730.2s2.86,46.247-34.522,46.247h-170.38" transform="translate(-431.762 4894.398)" fill="none" stroke="#bafc00" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" data-v-54b7ff09=""></path>
            <path id="Path_1520" data-name="Path 1520" d="M2324.133,995.866l-.069-369.512s3.936-41.59-47.5-41.59H2042.106" transform="translate(-508.837 4614.684)" fill="none" stroke="#bafc00" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" data-v-54b7ff09=""></path>
         </g>
         <g id="Group_1158" data-name="Group 1158" transform="translate(897 5176)" data-v-54b7ff09="">
            <ellipse id="Ellipse_227" data-name="Ellipse 227" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.295" data-v-54b7ff09=""></ellipse>
            <ellipse id="Ellipse_246" data-name="Ellipse 246" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.1" data-v-54b7ff09=""></ellipse>
            <g id="Ellipse_226" data-name="Ellipse 226" transform="translate(5 6)" fill="#bafc00" stroke="none" stroke-width="10" data-v-54b7ff09="">
               <circle cx="17.5" cy="17.5" r="17.5" stroke="none" data-v-54b7ff09=""></circle>
               <circle cx="17.5" cy="17.5" r="12.5" fill="none" data-v-54b7ff09=""></circle>
            </g>
         </g>
         <g id="Group_1184" data-name="Group 1184" transform="translate(743 5305)" data-v-54b7ff09="">
            <ellipse id="Ellipse_227-2" data-name="Ellipse 227" cx="13.5" cy="13" rx="13.5" ry="13" transform="translate(0 -9)" fill="#5CDB95" opacity="0.1" data-v-54b7ff09=""></ellipse>
            <g id="Ellipse_226-2" data-name="Ellipse 226" transform="translate(4 -6)" fill="#bafc00" stroke="none" stroke-width="5" data-v-54b7ff09="">
               <circle cx="10" cy="10" r="10" stroke="none" data-v-54b7ff09=""></circle>
               <circle cx="10" cy="10" r="7.5" fill="none" data-v-54b7ff09=""></circle>
            </g>
         </g>
         <rect id="Rectangle_1993" data-name="Rectangle 1993" width="80" height="2" transform="translate(920 5225) rotate(90)" fill="url(#linear-gradient)" data-v-54b7ff09=""></rect>
         <text id="JAN_2020" data-name="JAN 2020" transform="translate(952 5358)" fill="#fff" font-size="20" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="700" data-v-54b7ff09="">
            <tspan x="0" y="0" data-v-54b7ff09="">JAN 2020</tspan>
         </text>
         <text id="FEB_2020" data-name="FEB 2020" transform="translate(1255 5062)" fill="#fff" font-size="20" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="700" data-v-54b7ff09="">
            <tspan x="0" y="0" data-v-54b7ff09="">FEB 2020</tspan>
         </text>
         <text id="Project_Inception" data-name="Project Inception" transform="translate(952 5387)" fill="#fff" font-size="17" font-family="BasisGrotesquePro-Light, Basis Grotesque Pro" font-weight="300" data-v-54b7ff09="">
            <tspan x="0" y="0" data-v-54b7ff09="">Project Inception</tspan>
         </text>
         <g id="Group_1163" data-name="Group 1163" transform="translate(892 5334)" data-v-54b7ff09="">
            <ellipse id="Ellipse_228" data-name="Ellipse 228" cx="22" cy="21.5" rx="22" ry="21.5" transform="translate(1)" fill="#fff" opacity="0.1" data-v-54b7ff09=""></ellipse>
            <g id="rocket_launcher_launch" data-name="rocket launcher launch" transform="translate(0 0.999)" data-v-54b7ff09="">
               <rect id="Rectangle_1812" data-name="Rectangle 1812" width="43" height="42" opacity="0" data-v-54b7ff09=""></rect>
               <path id="Path_1456" data-name="Path 1456" d="M34.905,5.973a1.333,1.333,0,0,0-1.16-1.16c-.373,0-9.1-1.053-14.051,3.893a18.276,18.276,0,0,0-4.8,7.879l-4.266-.067h0A1.333,1.333,0,0,0,9.7,18.8L21,30.1a1.333,1.333,0,0,0,.946.4,1.453,1.453,0,0,0,.52-.107,1.333,1.333,0,0,0,.813-1.253l-.067-4.319a18.277,18.277,0,0,0,7.879-4.8A10.944,10.944,0,0,0,31.986,19a1.333,1.333,0,1,0-2.106-1.626c-.213.267-.44.52-.68.773a14.664,14.664,0,0,1-7.625,4.279,1.333,1.333,0,0,0-1.12,1.333v2.12l-6.665-6.665h2.12a1.333,1.333,0,0,0,1.333-1.12,14.064,14.064,0,0,1,3.466-6.665,1.4,1.4,0,0,0,.147-.093s.08-.133.133-.2.347-.387.533-.573C24.641,7.44,30,7.266,32.279,7.346a20.143,20.143,0,0,1-.84,6.665,1.368,1.368,0,1,0,2.586.893,23.449,23.449,0,0,0,.88-8.932ZM10.23,24.983A7.185,7.185,0,0,0,6.631,27c-2.066,2.053-2.48,6.665-2.52,7.239a1.328,1.328,0,0,0,1.32,1.44h.133c.533,0,5.186-.467,7.252-2.52a7.212,7.212,0,0,0,2-3.573,4,4,0,0,0-.933-3.653A4,4,0,0,0,10.23,24.983Zm1.973,4A4.519,4.519,0,0,1,10.87,31.2a8.438,8.438,0,0,1-3.906,1.52,8.438,8.438,0,0,1,1.52-3.906A4.626,4.626,0,0,1,10.7,27.476a3.586,3.586,0,0,1,.467,0,1.08,1.08,0,0,1,.8.28,1.453,1.453,0,0,1,.24,1.333Z" transform="translate(1.321 1.128)" fill="url(#linear-gradient-2)" data-v-54b7ff09=""></path>
               <path id="Path_1457" data-name="Path 1457" d="M20.221,11.388l-3.333,3.333a1.339,1.339,0,1,0,1.893,1.893l3.333-3.333a1.339,1.339,0,1,0-1.893-1.893Z" transform="translate(5.447 3.219)" fill="#e1d5ff" data-v-54b7ff09=""></path>
            </g>
         </g>
         <rect id="Rectangle_1991" data-name="Rectangle 1991" width="3" height="238" rx="1.5" transform="translate(946 5201) rotate(-90)" fill="#bafc00" data-v-54b7ff09=""></rect>
         <rect id="Rectangle_2000" data-name="Rectangle 2000" width="3" height="238" rx="1.5" transform="translate(1239 5201) rotate(-90)" fill="#bafc00" data-v-54b7ff09=""></rect>
         <rect id="Rectangle_2001" data-name="Rectangle 2001" width="3" height="348" rx="1.5" transform="translate(1205 5674) rotate(-90)" fill="#bafc00" data-v-54b7ff09=""></rect>
         <rect id="Rectangle_2005" data-name="Rectangle 2005" width="3" height="312" rx="1.5" transform="translate(826 5674) rotate(-90)" fill="#bafc00" data-v-54b7ff09=""></rect>
         <rect id="Rectangle_1996" data-name="Rectangle 1996" width="78" height="3" transform="translate(1213 5090) rotate(90)" fill="url(#linear-gradient)" data-v-54b7ff09=""></rect>
         <text id="Product_Design_Product_Development" data-name="Product Design
            Product Development" transform="translate(1255 5090)" fill="#fff" font-size="17" font-family="BasisGrotesquePro-Light, Basis Grotesque Pro" font-weight="300" data-v-54b7ff09="">
            <tspan x="0" y="0" data-v-54b7ff09="">Product Design</tspan>
          
         </text>
         <g id="Group_1166" data-name="Group 1166" transform="translate(1189 5038)" data-v-54b7ff09="">
            <ellipse id="Ellipse_228-2" data-name="Ellipse 228" cx="22" cy="21.5" rx="22" ry="21.5" fill="#fff" opacity="0.1" data-v-54b7ff09=""></ellipse>
            <path id="Path_1458" data-name="Path 1458" d="M2.707,11.874l12.744,7.363a1.277,1.277,0,0,0,.708.142,1.277,1.277,0,0,0,.708-.142L29.61,11.874a1.106,1.106,0,0,0,.566-.566,1.568,1.568,0,0,0-.566-1.982L16.867,1.962a1.286,1.286,0,0,0-1.416,0L2.707,9.326a1.106,1.106,0,0,0-.566.566A1.568,1.568,0,0,0,2.707,11.874Zm26.9,3.115-.283-.142L16.867,22.07a1.286,1.286,0,0,1-1.416,0L2.99,14.848l-.283.142a1.568,1.568,0,0,0-.566,1.982,1.106,1.106,0,0,0,.566.566L15.451,24.9a1.286,1.286,0,0,0,1.416,0L29.61,17.538a1.568,1.568,0,0,0,.566-1.982A1.106,1.106,0,0,0,29.61,14.99Zm0,5.664-.283-.142L16.867,27.734a1.286,1.286,0,0,1-1.416,0L2.99,20.512l-.283.142a1.568,1.568,0,0,0-.566,1.982,1.106,1.106,0,0,0,.566.566l12.744,7.363a1.286,1.286,0,0,0,1.416,0L29.61,23.2a1.568,1.568,0,0,0,.566-1.982A1.106,1.106,0,0,0,29.61,20.654Z" transform="translate(6.195 5.52)" fill="url(#linear-gradient-4)" data-v-54b7ff09=""></path>
         </g>
         <rect id="Rectangle_1994" data-name="Rectangle 1994" width="80" height="3" transform="translate(1507 5231) rotate(90)" fill="url(#linear-gradient)" data-v-54b7ff09=""></rect>
         <text id="JUL_2020_-_Beta_Test" data-name="JUL 2020 - Beta Test" transform="translate(1537 5351)" fill="#fff" font-size="20" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="700" data-v-54b7ff09="">
            <tspan x="0" y="0" data-v-54b7ff09="">OCT 2020 - Beta Test</tspan>
         </text>
         <text id="First_mobile_app_released" data-name="Exchange Released" transform="translate(1539 5378)" fill="#fff" font-size="17" font-family="BasisGrotesquePro-Light, Basis Grotesque Pro" font-weight="300" data-v-54b7ff09="">
            <tspan x="0" y="0" data-v-54b7ff09="">Exchange Released</tspan>
         </text>
         <g id="Group_1164" data-name="Group 1164" transform="translate(1483 5331.749)" data-v-54b7ff09="">
            <circle id="Ellipse_228-3" data-name="Ellipse 228" cx="21.5" cy="21.5" r="21.5" transform="translate(0 1.251)" fill="#fff" opacity="0.1" data-v-54b7ff09=""></circle>
            <g id="rocket_launcher_launch-2" data-name="rocket launcher launch" transform="translate(6 0)" data-v-54b7ff09="">
               <rect id="Rectangle_1812-2" data-name="Rectangle 1812" width="31" height="42" transform="translate(0 2.251)" opacity="0" data-v-54b7ff09=""></rect>
               <g id="Page-1" transform="translate(4.831)" data-v-54b7ff09="">
                  <g id="Dribbble-Light-Preview" data-v-54b7ff09="">
                     <g id="icons" data-v-54b7ff09="">
                        <path id="phone-_225_" data-name="phone-[#225]" d="M344.8,7004.04a1.681,1.681,0,0,0-1.68-1.681H333.04a1.681,1.681,0,0,0-1.68,1.681v23.521a1.679,1.679,0,0,0,1.68,1.679h10.081a1.679,1.679,0,0,0,1.68-1.679Zm3.36-1.681v26.881a3.361,3.361,0,0,1-3.36,3.361H331.36a3.361,3.361,0,0,1-3.36-3.361v-26.881a3.36,3.36,0,0,1,3.36-3.359H344.8A3.36,3.36,0,0,1,348.161,7002.359Z" transform="translate(-328 -6999)" fill-rule="evenodd" fill="url(#linear-gradient-2)" data-v-54b7ff09=""></path>
                        <circle id="Ellipse_229" data-name="Ellipse 229" cx="2" cy="2" r="2" transform="translate(8.169 23.251)" fill="#e1d5ff" data-v-54b7ff09=""></circle>
                     </g>
                  </g>
               </g>
            </g>
         </g>
         <rect id="Rectangle_1997" data-name="Rectangle 1997" width="78" height="2" transform="translate(1583 5700) rotate(90)" fill="url(#linear-gradient)" data-v-54b7ff09=""></rect>
         <rect id="Rectangle_2004" data-name="Rectangle 2004" width="78" height="3" transform="translate(796 5700) rotate(90)" fill="url(#linear-gradient)" data-v-54b7ff09=""></rect>
         <rect id="Rectangle_2010" data-name="Rectangle 2010" width="78" height="2" transform="translate(461 5937)" fill="url(#linear-gradient-9)" data-v-54b7ff09=""></rect>
         <text id="OCT_2020" data-name="OCT 2020" transform="translate(1618 5795)" fill="#fff" font-size="20" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="700" data-v-54b7ff09="">
            <tspan x="0" y="0" data-v-54b7ff09="">DEC 2020</tspan>
         </text>
         <text id="MAR_2021_-_2nd_Release_" data-name="Feb 2021 " transform="translate(831 5795)" fill="#fff" font-size="20" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="700" data-v-54b7ff09="">
            <tspan x="0" y="0" data-v-54b7ff09="">Feb 2021</tspan>
         </text>
         <text id="JUL_2021_-_3RD_RELEASE" data-name="April 2021" transform="translate(456 6001)" fill="#fff" font-size="20" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="700" data-v-54b7ff09="">
            <tspan x="-239.7" y="0" data-v-54b7ff09="">April 2021</tspan>
         </text>
         <text id="Beta_Test_2_Community_Growth_Brand_Awareness_Pre-sale_ICO" data-name="Beta Test 2
            Community Growth
            Brand Awareness
            Pre-sale ICO" transform="translate(1618 5818)" fill="#fff" font-size="18" font-family="BasisGrotesquePro-Light, Basis Grotesque Pro" font-weight="300" data-v-54b7ff09="">
            <tspan x="0" y="0" data-v-54b7ff09="">Defipulse Listing</tspan>
            <tspan x="0" y="22" data-v-54b7ff09="">Audit Report Released</tspan>
            <tspan x="0" y="44" data-v-54b7ff09="">More Exchange Listing</tspan>
            
         </text>
         <text id="Coin_swap_Buy_token_with_credit_card_Utility_payment_Airtime._Data_Flight_ticket_Decentralized_finance_DeFi_-_Lending_and_Staking_HAG_token_listing_on_exchange" data-name="Coin swap
            Buy token with credit card
            Utility payment (Airtime. Data, Flight ticket)
            Decentralized finance (DeFi) - Lending and Staking
            HAG token listing on exchange" transform="translate(831 5818)" fill="#fff" font-size="18" font-family="BasisGrotesquePro-Light, Basis Grotesque Pro" font-weight="300" data-v-54b7ff09="">
            <tspan x="0" y="0" data-v-54b7ff09="">Launch of Exchange V2</tspan>
            <tspan x="0" y="22" data-v-54b7ff09="">More Exchange Listings</tspan>
                    </text>
         <text id="Exchange_Future_Margin_trading_Crowd_Funding_Physical_and_virtual_card_issuing_Blockchain_node_Non-custodian_escrow" data-name="Exchange (Future/Margin trading)
            Crowd Funding
            Physical and virtual card issuing
            Blockchain node
            Non-custodian escrow" transform="translate(456 6028)" fill="#fff" font-size="18" font-family="BasisGrotesquePro-Light, Basis Grotesque Pro" font-weight="300" data-v-54b7ff09="">
            <tspan x="-267.372" y="0" data-v-54b7ff09="">Launch of erc721 Liquidity Platform</tspan>
           
         </text>
         <g id="Group_1167" data-name="Group 1167" transform="translate(1560 5789)" data-v-54b7ff09="">
            <ellipse id="Ellipse_228-4" data-name="Ellipse 228" cx="22" cy="21.5" rx="22" ry="21.5" fill="#fff" opacity="0.1" data-v-54b7ff09=""></ellipse>
            <path id="Path_1491" data-name="Path 1491" d="M35.535,7.044A1.709,1.709,0,0,0,33.987,6H25.57a1.683,1.683,0,1,0,0,3.367h4.36l-9.41,9.41-5.538-5.555a1.683,1.683,0,0,0-2.39,0l-10.1,10.1a1.69,1.69,0,1,0,2.39,2.39l8.9-8.921,5.538,5.555a1.683,1.683,0,0,0,2.39,0L32.3,11.74V16.1a1.683,1.683,0,0,0,3.367,0V7.683A1.683,1.683,0,0,0,35.535,7.044Z" transform="translate(3.603 2.044)" fill="url(#linear-gradient-2)" data-v-54b7ff09=""></path>
         </g>
         <g id="Group_1172" data-name="Group 1172" transform="translate(772 5785.222)" data-v-54b7ff09="">
            <ellipse id="Ellipse_228-5" data-name="Ellipse 228" cx="22" cy="21.5" rx="22" ry="21.5" transform="translate(0 3.778)" fill="#fff" opacity="0.1" data-v-54b7ff09=""></ellipse>
            <g id="Group_1181" data-name="Group 1181" transform="translate(4.61 0)" data-v-54b7ff09="">
               <path id="Path_1524" data-name="Path 1524" d="M29.461,38.687a3.635,3.635,0,0,1-1.714-.43l-7.321-3.941-7.319,3.94a3.684,3.684,0,0,1-3.766-.2,3.5,3.5,0,0,1-1.477-3.449L9.3,26.04,3.111,19.862a3.443,3.443,0,0,1-.839-3.582,3.546,3.546,0,0,1,2.851-2.348l8.416-1.251,3.655-7.589a3.6,3.6,0,0,1,6.463,0l3.656,7.589,8.415,1.251a3.547,3.547,0,0,1,2.851,2.346,3.448,3.448,0,0,1-.838,3.584L31.552,26.04l1.435,8.566a3.5,3.5,0,0,1-1.476,3.447,3.623,3.623,0,0,1-2.051.634Zm-9.035-6.681a1.089,1.089,0,0,1,.513.129l7.831,4.216a1.493,1.493,0,0,0,1.519-.081,1.313,1.313,0,0,0,.566-1.3l-1.527-9.117a1.083,1.083,0,0,1,.3-.944l6.584-6.572a1.3,1.3,0,0,0,.32-1.349,1.39,1.39,0,0,0-1.123-.91l-8.982-1.336a1.081,1.081,0,0,1-.816-.6L21.707,6.031a1.442,1.442,0,0,0-2.566,0l-3.9,8.1a1.081,1.081,0,0,1-.816.6L5.44,16.072a1.409,1.409,0,0,0-1.123.912,1.3,1.3,0,0,0,.321,1.346L11.221,24.9a1.083,1.083,0,0,1,.3.944L10,34.964a1.313,1.313,0,0,0,.569,1.307,1.494,1.494,0,0,0,1.519.078l7.828-4.215a1.085,1.085,0,0,1,.512-.129Z" transform="translate(-2.082 -3.084)" fill="url(#linear-gradient-2)" data-v-54b7ff09=""></path>
               <path id="Path_1525" data-name="Path 1525" d="M13.631,25.4a.541.541,0,0,1-.086-1.075l.359-.058a.541.541,0,0,1,.173,1.068l-.359.058A.525.525,0,0,1,13.631,25.4Zm1.986-.322a.541.541,0,0,1-.1-1.072l5.853-1.129,2.208-5.063a.541.541,0,0,1,.992.432L22.246,23.57a.541.541,0,0,1-.394.315L15.72,25.068a.512.512,0,0,1-.1.01Z" transform="translate(-7.14 -9.699)" fill="url(#linear-gradient-2)" data-v-54b7ff09=""></path>
            </g>
         </g>
         <g id="Group_1179" data-name="Group 1179" transform="translate(393 5915)" data-v-54b7ff09="">
            <ellipse id="Ellipse_228-6" data-name="Ellipse 228" cx="22" cy="21.5" rx="22" ry="21.5" fill="#fff" opacity="0.1" data-v-54b7ff09=""></ellipse>
            <path id="coin" d="M17.456,3C11.934,3,6,4.432,6,7.582V27.058c0,3.265,4.926,5.728,11.456,5.728s11.456-2.463,11.456-5.728V7.582C28.912,4.432,22.978,3,17.456,3Zm9.165,17.184c0,1.4-3.574,3.437-9.165,3.437s-9.165-2.039-9.165-3.437V16.816a17.1,17.1,0,0,0,9.165,2.222,17.1,17.1,0,0,0,9.165-2.223Zm0-6.874c0,1.4-3.574,3.437-9.165,3.437s-9.165-2.039-9.165-3.437V10.469a21.618,21.618,0,0,0,9.165,1.7,21.618,21.618,0,0,0,9.165-1.7ZM17.456,5.291c6.014,0,9.165,1.707,9.165,2.291s-3.15,2.291-9.165,2.291S8.291,8.167,8.291,7.582,11.442,5.291,17.456,5.291Zm0,25.2c-5.591,0-9.165-2.039-9.165-3.437V23.69a17.1,17.1,0,0,0,9.165,2.223,17.1,17.1,0,0,0,9.165-2.223v3.368C26.621,28.456,23.047,30.495,17.456,30.495Z" transform="translate(3.458 -2.964)" fill="url(#linear-gradient-13)" data-v-54b7ff09=""></path>
         </g>
         <rect id="Rectangle_1995" data-name="Rectangle 1995" width="80" height="2" transform="translate(1172 5560) rotate(90)" fill="url(#linear-gradient)" data-v-54b7ff09=""></rect>
         <text id="NOV_2020_Product_Launch_V.1_" data-name="NOV 2020 (Product Launch V.1)" transform="translate(1218 5524)" fill="#fff" font-size="20" font-family="BasisGrotesquePro-Bold, Basis Grotesque Pro" font-weight="700" data-v-54b7ff09="">
            <tspan x="0" y="0" data-v-54b7ff09="">NOV 2020</tspan>
            <tspan y="0" font-size="14" font-family="BasisGrotesquePro-Regular, Basis Grotesque Pro" font-weight="400" data-v-54b7ff09="">  </tspan>
         </text>
         <text id="" transform="translate(1218 5555)" fill="#fff" font-size="17" font-family="BasisGrotesquePro-Light, Basis Grotesque Pro" font-weight="300" data-v-54b7ff09="">
            <tspan x="0" y="0" data-v-54b7ff09="">Airdrop</tspan>
            <tspan x="0" y="23" data-v-54b7ff09="">Presale</tspan>
            <tspan x="0" y="46" data-v-54b7ff09="">Exchange Listing</tspan>
            
         </text>
         <g id="Group_1165" data-name="Group 1165" transform="translate(1149 5505)" data-v-54b7ff09="">
            <circle id="Ellipse_228-7" data-name="Ellipse 228" cx="21.5" cy="21.5" r="21.5" fill="#fff" opacity="0.1" data-v-54b7ff09=""></circle>
            <g id="wallet" transform="translate(7.659 4.192)" data-v-54b7ff09="">
               <path id="Path_1526" data-name="Path 1526" d="M27.676,9.307l-6.49-5.521A2.107,2.107,0,0,0,18.552,3.7L15.739,5.809l-1.77-1.77a2.107,2.107,0,0,0-2.971,0L5.729,9.36A3.161,3.161,0,0,0,3,12.468V27.219A3.161,3.161,0,0,0,6.161,30.38H27.234a3.161,3.161,0,0,0,3.161-3.161V12.468a3.161,3.161,0,0,0-2.718-3.161Zm.611,12.644H26.18a2.107,2.107,0,0,1,0-4.215h2.107ZM19.858,5.387l4.531,3.92H19.237L17.245,7.315Zm-7.376.137,3.783,3.783H8.7ZM27.234,28.273H6.161a1.054,1.054,0,0,1-1.054-1.054V12.468a1.054,1.054,0,0,1,1.054-1.054H27.234a1.054,1.054,0,0,1,1.054,1.054v3.161H26.18a4.215,4.215,0,0,0,0,8.429h2.107v3.161A1.054,1.054,0,0,1,27.234,28.273Z" transform="translate(-3 -3.28)" fill="url(#linear-gradient-2)" data-v-54b7ff09=""></path>
               <path id="Path_1527" data-name="Path 1527" d="M24.306,18.306a1.106,1.106,0,0,0-.306.748,1.054,1.054,0,1,0,.306-.748Z" transform="translate(-1.873 -2.491)" fill="url(#linear-gradient-2)" data-v-54b7ff09=""></path>
            </g>
         </g>
         <path id="Path_1522" data-name="Path 1522" d="M2042.106,822.788l.044-213.944s-2.529-24.08,30.522-24.08h150.635" transform="translate(-1462.09 5085.875)" fill="none" stroke="#bafc00" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" data-v-54b7ff09=""></path>
         <g id="Group_1185" data-name="Group 1185" transform="translate(1189 5177)" data-v-54b7ff09="">
            <ellipse id="Ellipse_227-3" data-name="Ellipse 227" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.295" data-v-54b7ff09=""></ellipse>
            <ellipse id="Ellipse_246-2" data-name="Ellipse 246" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.1" data-v-54b7ff09=""></ellipse>
            <g id="Ellipse_226-3" data-name="Ellipse 226" transform="translate(5 6)" fill="#bafc00" stroke="none" stroke-width="10" data-v-54b7ff09="">
               <circle cx="17.5" cy="17.5" r="17.5" stroke="none" data-v-54b7ff09=""></circle>
               <circle cx="17.5" cy="17.5" r="12.5" fill="none" data-v-54b7ff09=""></circle>
            </g>
         </g>
         <g id="Group_1186" data-name="Group 1186" transform="translate(1482 5175)" data-v-54b7ff09="">
            <ellipse id="Ellipse_227-4" data-name="Ellipse 227" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.295" data-v-54b7ff09=""></ellipse>
            <ellipse id="Ellipse_246-3" data-name="Ellipse 246" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.1" data-v-54b7ff09=""></ellipse>
            <g id="Ellipse_226-4" data-name="Ellipse 226" transform="translate(5 6)" fill="#bafc00" stroke="none" stroke-width="10" data-v-54b7ff09="">
               <circle cx="17.5" cy="17.5" r="17.5" stroke="none" data-v-54b7ff09=""></circle>
               <circle cx="17.5" cy="17.5" r="12.5" fill="none" data-v-54b7ff09=""></circle>
            </g>
         </g>
         <g id="Group_1187" data-name="Group 1187" transform="translate(1559 5650)" data-v-54b7ff09="">
            <ellipse id="Ellipse_227-5" data-name="Ellipse 227" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.295" data-v-54b7ff09=""></ellipse>
            <ellipse id="Ellipse_246-4" data-name="Ellipse 246" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.1" data-v-54b7ff09=""></ellipse>
            <g id="Ellipse_226-5" data-name="Ellipse 226" transform="translate(5 6)" fill="#bafc00" stroke="none" stroke-width="10" data-v-54b7ff09="">
               <circle cx="17.5" cy="17.5" r="17.5" stroke="none" data-v-54b7ff09=""></circle>
               <circle cx="17.5" cy="17.5" r="12.5" fill="none" data-v-54b7ff09=""></circle>
            </g>
         </g>
         <g id="Group_1188" data-name="Group 1188" transform="translate(1148 5652)" data-v-54b7ff09="">
            <ellipse id="Ellipse_227-6" data-name="Ellipse 227" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.295" data-v-54b7ff09=""></ellipse>
            <ellipse id="Ellipse_246-5" data-name="Ellipse 246" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.1" data-v-54b7ff09=""></ellipse>
            <g id="Ellipse_226-6" data-name="Ellipse 226" transform="translate(5 6)" fill="#bafc00" stroke="none" stroke-width="10" data-v-54b7ff09="">
               <circle cx="17.5" cy="17.5" r="17.5" stroke="none" data-v-54b7ff09=""></circle>
               <circle cx="17.5" cy="17.5" r="12.5" fill="none" data-v-54b7ff09=""></circle>
            </g>
         </g>
         <g id="Group_1189" data-name="Group 1189" transform="translate(772 5647)" data-v-54b7ff09="">
            <ellipse id="Ellipse_227-7" data-name="Ellipse 227" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.295" data-v-54b7ff09=""></ellipse>
            <ellipse id="Ellipse_246-6" data-name="Ellipse 246" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.1" data-v-54b7ff09=""></ellipse>
            <g id="Ellipse_226-7" data-name="Ellipse 226" transform="translate(5 6)" fill="#bafc00" stroke="none" stroke-width="10" data-v-54b7ff09="">
               <circle cx="17.5" cy="17.5" r="17.5" stroke="none" data-v-54b7ff09=""></circle>
               <circle cx="17.5" cy="17.5" r="12.5" fill="none" data-v-54b7ff09=""></circle>
            </g>
         </g>
         <g id="Group_1190" data-name="Group 1190" transform="translate(556 5916)" data-v-54b7ff09="">
            <ellipse id="Ellipse_227-8" data-name="Ellipse 227" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.295" data-v-54b7ff09=""></ellipse>
            <ellipse id="Ellipse_246-7" data-name="Ellipse 246" cx="22" cy="23" rx="22" ry="23" fill="#5CDB95" opacity="0.1" data-v-54b7ff09=""></ellipse>
            <g id="Ellipse_226-8" data-name="Ellipse 226" transform="translate(5 6)" fill="#bafc00" stroke="none" stroke-width="10" data-v-54b7ff09="">
               <circle cx="17.5" cy="17.5" r="17.5" stroke="none" data-v-54b7ff09=""></circle>
               <circle cx="17.5" cy="17.5" r="12.5" fill="none" data-v-54b7ff09=""></circle>
            </g>
         </g>
      </g>
   </svg>
</div>
        </div>
</div>
        </div>
</div>

<div className="container mt-4">
<div class="u-flex section-title" data-v-603d447f="" data-v-4870ccd0="">
   <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-603d447f="">
      <line y1="10" x2="40" y2="10" stroke="#717171" data-v-603d447f=""></line>
   </svg>
   <p data-v-603d447f="" style={{color: "rgb(113, 113, 113);"}}>TEAM</p>

</div>
<h4 data-v-4870ccd0="">Meet the team</h4>
<div data-v-4870ccd0=""><p data-v-4870ccd0="">Ellaswap has a solid team with great experience in blockchain, cryptocurrency and traditional finance. The team have a track record of several blockchain projects </p></div>
    <div className="teams-contianer mt-2">
   
    <div className="teams">
   
    <div class="container">
  <div class="row">
     <div className="col-md-12">
         <div className=" ceos-founder">
            <div className="row">
            <div className="col-md-8">
                  <h1>SAI KIRAN REDDY MAYREDDY</h1>
                  <h2>CEO</h2>
               <p>I am a 35years old DevOps and Cloud engineer with over 8years experience that lives in Seattle, Washington U.S.A. I worked at Ripple for two years as a DevOps engineer and am currently the CEO of EllaSwap, a next-generation on-chain liquidity provider which leverages on chain link decentralized price oracle to provide pure on-chain liquidity for everyone at zero spillage.</p>
               <a href="https://twitter.com/MayMayreddy" target="_blank" aria-hidden="true"><img src="/socials/twitter.svg" class="img-fluid the-Image" /></a>
               </div>

         <div className="col-md-4">
               <img src="/teams/ikard.jpg" className="img-fluid"/>
         </div>
            </div>
         </div>
     </div>
   
     <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="/teams/team130.jpeg" />
        </div>
        <div class="team-content">
          <h3 class="name">&nbsp;</h3>
          <h4 class="title"> &nbsp;</h4>
        </div>
        <div class="team-content2">
          <h3 class="name">Izunna Isdore Ozuo</h3>
          <h4 class="title">Legal Counsel</h4>
        </div>
        <ul class="social">
        <li><img src="/socials/twitter.svg" /></li>
          <li><a href="https://www.linkedin.com/in/izunna-isdore-ozuo-8ab21980/" target="_blank" aria-hidden="true"><img src="/socials/linkedin.svg" className="img-fluid the-Image" /></a></li>
        </ul>
      </div>
    </div>

    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="/teams/team2.jpg" />
        </div>
        <div class="team-content">
          <h3 class="name">&nbsp;</h3>
          <h4 class="title"> &nbsp;</h4>
        </div>
        <div class="team-content2">
          <h3 class="name">Laicka Rodeo</h3>
          <h4 class="title">Community Development</h4>
        </div>
        <ul class="social">
        <li><img src="/socials/twitter.svg" /></li>
          <li><a href="https://www.linkedin.com/in/laicka-rodeo-82306815a" target="_blank" aria-hidden="true"><img src="/socials/linkedin.svg" className="img-fluid the-Image" /></a></li>
        </ul>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="/teams/team1.png" />
        </div>
        <div class="team-content">
          <h3 class="name">&nbsp;</h3>
          <h4 class="title"> &nbsp;</h4>
        </div>
        <div class="team-content2">
          <h3 class="name">Ugoji Harry</h3>
          <h4 class="title">Digital Strategy Manager
</h4>
        </div>
        <ul class="social">
        <li><img src="/socials/twitter.svg" /></li>
          <li><a href="https://www.linkedin.com/in/harryugojiofficial/" target="_blank" aria-hidden="true"><img src="/socials/linkedin.svg" className="img-fluid the-Image" /></a></li>
        </ul>
      </div>
    </div>
    {/* <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="/teams/team3.jpg" />
        </div>
        <div class="team-content">
          <h3 class="name">&nbsp;</h3>
          <h4 class="title"> &nbsp;</h4>
        </div>
        <div class="team-content2">
          <h3 class="name">Zhai Calingacion</h3>
          <h4 class="title">Ecosystem growth</h4>
        </div>
        <ul class="social">
        <li><img src="/socials/twitter.svg" /></li>
          <li><a href="https://web.facebook.com/zhai.calingacion" target="_blank" aria-hidden="true"><img src="/socials/facebook.svg" className="img-fluid the-Image" /></a></li>
        </ul>
      </div>
    </div> */}
    {/* <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="/teams/team4.jpg" />
        </div>
        <div class="team-content">
          <h3 class="name">&nbsp;</h3>
          <h4 class="title"> &nbsp;</h4>
        </div>
        <div class="team-content2">
          <h3 class="name">Mary A. Belmonte</h3>
          <h4 class="title">Ecosystem growth</h4>
        </div>
        <ul class="social">
        <li><img src="/socials/twitter.svg" /></li>
          <li><a href="https://web.facebook.com/maryann.agas.3?_rdc=1&_rdr" target="_blank" aria-hidden="true"><img src="/socials/facebook.svg" className="img-fluid the-Image" /></a></li>
        </ul>
      </div>
    </div> */}


    {/* <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="/teams/team5.jpg" />
        </div>
        <div class="team-content">
          <h3 class="name">&nbsp;</h3>
          <h4 class="title"> &nbsp;</h4>
        </div>
        <div class="team-content2">
          <h3 class="name">Phillip Villona</h3>
          <h4 class="title">Product</h4>
        </div>
        <ul class="social">
        <li><img src="/socials/twitter.svg" /></li>
          <li><a href="https://web.facebook.com/khim.kawanabe?_rdc=1&_rdr" target="_blank" aria-hidden="true"><img src="/socials/facebook.svg" className="img-fluid the-Image" /></a></li>
        </ul>
      </div>
    </div> */}


    

    {/* <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="/teams/team6.jpg" />
        </div>
        <div class="team-content">
          <h3 class="name">&nbsp;</h3>
          <h4 class="title"> &nbsp;</h4>
        </div>
        <div class="team-content2">
          <h3 class="name">Nhecias J. Sandoval</h3>
          <h4 class="title">Ecosystem growth</h4>
        </div>
        <ul class="social">
        <li><img src="/socials/twitter.svg" /></li>
          <li><a href="https://web.facebook.com/nheciasjhoy.sandoval.1?_rdc=1&_rdr" target="_blank" aria-hidden="true"><img src="/socials/facebook.svg" className="img-fluid the-Image" /></a></li>
        </ul>
      </div>
    </div> */}


    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="our-team">
        <div class="picture">
          <img class="img-fluid" src="/teams/team7.jpg" />
        </div>
        <div class="team-content">
          <h3 class="name">&nbsp;</h3>
          <h4 class="title"> &nbsp;</h4>
        </div>
        <div class="team-content2">
          <h3 class="name">Jeryleen Pimentel</h3>
          <h4 class="title">Business Development Associate</h4>
        </div>
        <ul class="social">
        <li><img src="/socials/twitter.svg" /></li>
          <li><a href="https://www.linkedin.com/in/jeryleen-pimentel-419730173/
" target="_blank" aria-hidden="true"><img src="/socials/linkedin.svg" className="img-fluid the-Image" /></a></li>
        </ul>
      </div>
    </div>


    

    <h2 class="mission-slogan text-center">
            On-Chain Liquidity Provider for Everyone
          </h2>
  </div>
</div>

 
  
    </div>
    </div>
  
</div>

<section className="footer-lsr">
<section className="container">
<div class="question-cell">
            <h3 className="got-a-q">Got a question?</h3>
            <div class="question-list">
              <div class="row">
                <div class="col-md-4">
                <div class="about-app"><h3>What is a ChainLink Price Oracle?</h3><p>Chainlink is a tokenized oracle network that provides price and events data collected from on-chain and real-world sources.</p></div>
                </div>
             
                <div class="col-md-4">
                <div class="about-app"><h3>Any impermanent loss?</h3><p>No. ELLA offers arbitrage trading opportunities to arbitrageurs to reward their role in helping to stabilize liquidity providers' portfolios.</p></div>
                </div>

                <div class="col-md-4">
                <div class="about-app"><h3>Do I have to deposit pair tokens?</h3><p>No. ELLA allows liquidity providers to deposit any amount of base or quote tokens. You deposit what you have, nothing more.</p></div>
                </div>
              </div>
            </div>
          </div>

          <div className="social-links">
            <h2>Contact Ellaswap</h2>
            <p>Learn more about Ellaswap, interact with the Ellaswap team, engage in community discussions, and have your say in shaping the future of decentralized finance.</p>
          
          <a href="https://twitter.com/ellafinance" target="_blank">
          <img src="/socials/twitter.svg" className="img-fluid" /><br />
          Twitter 
          </a>

          <a href="http://t.me/ellafinance" target="_blank">
           <img src="/socials/telegram.svg" className="img-fluid" /> <br />
           Telegram group
          </a>


          <a href="https://t.me/ella_finance" target="_blank">
          <img src="/socials/telegram.svg" className="img-fluid" /> <br />
          Telegram channel
          </a>


          <a href="http://facebook.com/ellafinance2" target="_blank">
          <img src="/socials/facebook.svg" className="img-fluid" /><br />
          Facebook 
          </a>


          <a href="https://github.com/Ella-Finance" target="_blank">
           <img src="/socials/github.svg" className="img-fluid" /><br />
           Github
          </a>
          </div>
</section>
</section>
</div>    ) : (
   <div>
      <h1 className="text-center" style={{marginTop: "20%", color: "#05386b"}}>
         <FontAwesomeIcon icon={faSpinner} spin /><br></br>
         <small>Loading...</small>
      </h1>
   </div>
) }
        </div>
    )
}

export default Landing;