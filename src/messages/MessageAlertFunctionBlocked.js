import { ToastContainer, toast } from "react-toastify";

export default function messageFunctionBlocked() {
  <ToastContainer />
  toast.error('Você não tem autorização para usar essa função...!', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    });

  }