import { auth } from "@/firebase";
import { closeLoginModal, openLoginModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
 
  async function handleSignIn() {
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function handleGuestSignIn() {
    await signInWithEmailAndPassword(auth, "guest11110@gmail.com", "banana123456")
  }

  return (
    <>
      <button
        onClick={() => dispatch(openLoginModal())}
        className="bg-transparent border border-white text-white w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
      >
        Log In
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[600px] border border-gray-700 rounded-lg bg-black text-white md:w-[560px] md:h-[600px] flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className="mt-4 font-bold text-4xl">Sign in to your account</h1>
            <input
              className="mt-8 h-10 rounded-md bg-transparent border border-gray-700 p-6"
              placeholder="Email"
              type={"email"}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="mt-8 h-10 rounded-md bg-transparent border border-gray-700 p-6"
              placeholder="Password"
              type={"password"}
              onChange={e => setPassword(e.target.value)}
            />

            <button onClick={handleSignIn} className="mt-8 bg-white text-black w-full font-bold text-lg p-2 rounded-md">
              Sign In
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">Or</h1>
            <button onClick={handleGuestSignIn} className="mt-4 bg-white text-black w-full font-bold text-lg p-2 rounded-md">
              Sign In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;
