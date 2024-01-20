import Background from "../../assets/img/arduino-fondo.jpg"
const ContactPage = () => {
    return (
        <>
            <section className="banner-contactanos" style={{backgroundImage: `url(${Background})`}}>
                <div className="container content">
                    <h1>Contactanos</h1>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="validationCustom01" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationCustom02" className="form-label">Apellidos</label>
                        <input type="text" className="form-control" id="validationCustom02" required/>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Correo</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="tucorreo@gmail.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Dejanos tu consulta</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">Enviar Información</button>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="row-mas col-lg-2 col-md-6 col-sm-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                             className="bi bi-cart3" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                        <p className="tittle-information">ENVÍOS A TODO EL PAIS</p>
                        <p className="txt-information">Envíos a todas la ciudades del Perú.</p>
                    </div>
                    <div className="row-mas col-lg-2 col-md-6 col-sm-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                             className="bi bi-credit-card" viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
                            <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                        </svg>
                        <p className="tittle-information">PAGO SEGURO</p>
                        <p className="txt-information">Ofrecemos garatía en todas las compras.</p>
                    </div>
                    <div className="row-mas col-lg-2 col-md-6 col-sm-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                             className="bi bi-wallet2" viewBox="0 0 16 16">
                            <path
                                d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
                        </svg>
                        <p className="tittle-information">100% SATISFACTORIO</p>
                        <p className="txt-information">03 días de garantía de devolucín del dinero.</p>
                    </div>
                    <div className="row-mas col-lg-2 col-md-6 col-sm-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                             className="bi bi-life-preserver" viewBox="0 0 16 16">
                            <path
                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m6.43-5.228a7.03 7.03 0 0 1-3.658 3.658l-1.115-2.788a4 4 0 0 0 1.985-1.985zM5.228 14.43a7.03 7.03 0 0 1-3.658-3.658l2.788-1.115a4 4 0 0 0 1.985 1.985zm9.202-9.202-2.788 1.115a4 4 0 0 0-1.985-1.985l1.115-2.788a7.03 7.03 0 0 1 3.658 3.658m-8.087-.87a4 4 0 0 0-1.985 1.985L1.57 5.228A7.03 7.03 0 0 1 5.228 1.57zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                        </svg>
                        <p className="tittle-information">SOPORTE ONLINE</p>
                        <p className="txt-information">Brindamos soporte las 24 horas del día</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;