import useModalStore from "@store/useModalStore";
import './styles/_modal.scss';

const ModalWindow = () => {
  const { message, setModal } = useModalStore();
  return (
    <div className="modal">
      <img
        src="https://img.icons8.com/?size=100&id=5342&format=png&color=737373"
        alt="alert"
        width="20px"
        height="20px"
      />
      <p>{message}</p>
      <img
        className="modal-close"
        src="https://img.icons8.com/?size=100&id=46&format=png&color=737373"
        alt="close"
        width="20px"
        height="20px"
        onClick={() => setModal("", false)}
      />
    </div>
  )
}

export default ModalWindow