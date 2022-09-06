import ReactDOM from 'react-dom';

function Modal({children, setOpenModal}) {
  const closeModal = (e) => {
    const target = e.target.className;
    if(target.includes('fixed')) {
      setOpenModal(false)
    }
  }
  return ReactDOM.createPortal(
    <div onClick={closeModal} className={`flex justify-center items-center flex-column fixed top-0 left-0 w-screen h-screen bg-gray-800 opacity-90`}>
      {children}
    </div>,
      document.getElementById('modal')
    )
}

export default Modal