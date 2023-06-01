import React from "react";
import "./../style/cards.css"
import "./../style/custom-colors.css"
import freund from "../images/freund.avif";
import sherwin from "../images/sherwin.avif";
import fosalud from "../images/fosalud.avif";
import pgr from "../images/PGR.webp";
import solaris from "../images/solaris.avif";
import cepa from "../images/cepa.avif";
import bancoLocal from "../images/banco.avif";
import centroAmericana from "../images/laCentroAmericana.webp";
import fisdl from "../images/fisdl.avif";
import ipsfa from "../images/ipsfa.avif";
import avianca from "../images/avianca.avif";
import omnisport from "../images/omni.avif";
import { Link } from "react-router-dom";


const Proyects = () => {
    return (
        <>
        <h1 class="text-center">PROYECTOS</h1>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <Link to="freund" style={{ textDecoration: 'none', color: 'black'}}>
                        <div class="card" style={{width: '18rem'}}>
                            <img src={freund} alt="..." class="card-img-center"/>
                                <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                    <p class="card-text" >FREUND</p>
                                </div>
                        </div>
                    </Link>  
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <Link to="sherwin" style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="card" style={{width: '18rem'}}>
                            <img src={sherwin} alt="..." class="card-img-center"/>
                                <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                    <p class="card-text">SHERWIN WILLIAMS</p>
                                </div>
                        </div>
                    </Link>     
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <Link to="fosalud" style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="card" style={{width: '18rem'}}>
                            <img src={fosalud} alt="..." class="card-img-center"/>
                                <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                    <p class="card-text">FOSALUD</p>
                                </div>
                        </div>     
                    </Link>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <Link to="pgr" style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="card" style={{width: '18rem'}}>
                            <img src={pgr} alt="..." class="card-img-center"/>
                                <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                    <p class="card-text">PGR</p>
                                </div>
                        </div> 
                    </Link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <Link to="solaris" style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="card" style={{width: '18rem'}}>
                            <img src={solaris} alt="..." class="card-img-center"/>
                                <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                    <p class="card-text">SOLARIS</p>
                                </div>
                        </div> 
                    </Link>   
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <Link to="cepa" style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="card" style={{width: '18rem'}}>
                            <img src={cepa} alt="..." class="card-img-center"/>
                                <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                    <p class="card-text">CEPA</p>
                                </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <Link to="bancoLocal" style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="card" style={{width: '18rem'}}>
                            <img src={bancoLocal} alt="..." class="card-img-center"/>
                                <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                    <p class="card-text">BANCO LOCAL</p>
                                </div>
                        </div>  
                    </Link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <Link to="laCentroAmericana" style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="card" style={{width: '18rem'}}>
                            <img src={centroAmericana} alt="..." class="card-img-center"/>
                                <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                    <p class="card-text">LA CENTRO AMERICANA</p>
                                </div>
                        </div>     
                    </Link>    
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <Link to="fisdl" style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="card" style={{width: '18rem'}}>
                            <img src="" alt="Vidri_card_image" class="card-img-center"/>
                                <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                    <p class="card-text">Vidri</p>
                                </div>
                        </div>  
                    </Link>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <Link to="ipsfa" style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="card" style={{width: '18rem'}}>
                            <img src={ipsfa} alt="..." class="card-img-center"/>
                                <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                    <p class="card-text">IPSFA</p>
                                </div>
                        </div>     
                    </Link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <Link to="avianca" style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="card" style={{width: '18rem'}}>
                            <img src={avianca} alt="..." class="card-img-center"/>
                                <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                    <p class="card-text">AVIANCA</p>
                                </div>
                        </div>  
                    </Link>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <Link to="omnisport" style={{ textDecoration: 'none', color: 'black' }}>
                        <div class="card" style={{width: '18rem'}}>
                            <img src={omnisport} alt="..." class="card-img-center"/>
                                <div class="card-body" style={{backgroundColor: 'var(--secondary-color)', borderEndStartRadius: '0.8rem',  borderEndEndRadius: '0.8rem'}}>
                                    <p class="card-text">OMNISPORT</p>
                                </div>
                        </div>     
                    </Link>
                </div>
            </div>
        </div>
        </>

    );
}
export default Proyects;