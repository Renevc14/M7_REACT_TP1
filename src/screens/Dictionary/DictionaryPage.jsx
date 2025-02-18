import { useState } from "react";
import ModalAgregarPalabra from "./_components/ModalAgregarPalabra";
import ModalEliminarPalabra from "./_components/ModalEliminarPalabra";
import ModalTraducir from "./_components/ModalTraducir";
import './DisctionaryPage.css';

const DictionaryPage = () => {

    const [showModalAgregarPalabra, setShowModalAgregarPalabra] = useState(false);
    const [showModalEliminarPalabra, setShowModalEliminarPalabra] = useState(false);
    const [showModalTraducir, setShowModalTraducir] = useState(false);

    const handleCloseAgregarPalabra = () => setShowModalAgregarPalabra(false);
    const handleCloseEliminarPalabra = () => setShowModalEliminarPalabra(false);
    const handleCloseTraducir = () => setShowModalTraducir(false);

    const agregarPalabra = () => {
        setShowModalAgregarPalabra(true);
    }

    const eliminarPalabra = () => {
        setShowModalEliminarPalabra(true);
    }

    const traducir = () => {
        setShowModalTraducir(true);
    }


    return (
        <div className="App-header">
            <h1 className="text-3xl font-bold text-center mb-4">DICTIONARY USIP</h1>
            <ModalAgregarPalabra
                show={showModalAgregarPalabra}
                close={handleCloseAgregarPalabra}
            />
            <ModalEliminarPalabra
                show={showModalEliminarPalabra}
                close={handleCloseEliminarPalabra}
            />
            <ModalTraducir
                show={showModalTraducir}
                close={handleCloseTraducir}
            />
            <p>
                Este modulo (diccionario) correpsonde al recuperatorio del modulo 7 de React.
            </p>
            <p>
                URL: <a href="https://github.com/Renevc14/M7_REACT_TP1">https://github.com/Renevc14/M7_REACT_TP1</a>
            </p>

            <div className="row button-container">
                <div className="form-group col-md-12 d-flex justify-content-center">
                    <button className="btn black-btn" style={{marginRight: '10px'}} onClick={agregarPalabra}>Añadir
                        Palabra
                    </button>
                    <button className="btn black-btn" style={{marginLeft: '10px'}} onClick={eliminarPalabra}>Eliminar
                        Palabra
                    </button>
                    <button className="btn black-btn" style={{marginLeft: '10px'}} onClick={traducir}>Traducir Palabra
                    </button>
                </div>
            </div>

        </div>
    );
};

export default DictionaryPage;
