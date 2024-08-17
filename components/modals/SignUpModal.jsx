import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUpModal, openSignUpModal } from "@/redux/modalSlice";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useEffect, useState } from "react";
import { setUser } from "@/redux/userSlice";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignUpModal() {
  const isOpen = useSelector((state) => state.modals.signUpModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleSignUp() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: `./assets/profilePictures/pfp${Math.ceil(
        Math.random() * 6
      )}.png`,
    });

    router.reload();
  }

  async function handleGuestSignIn() {
    await signInWithEmailAndPassword(
      auth,
      "guest11110@gmail.com",
      "banana123456"
    );
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      dispatch(
        setUser({
          username: currentUser.email.split("@")[0],
          name: currentUser.displayName,
          email: currentUser.email,
          uid: currentUser.uid,
          photoUrl: currentUser.photoURL,
        })
      );
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <button
        onClick={() => dispatch(openSignUpModal())}
        className="bg-white text-black w-[160px] rounded-full h-[40px] hover:bg-[#cbd2d7]"
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-[600px] border border-gray-700 rounded-lg bg-black text-white md:w-[560px] md:h-[600px] flex justify-center">
          <div className="w-[90%] mt-8 flex flex-col">
            <button
              onClick={handleGuestSignIn}
              className="bg-white text-black w-full font-bold text-lg p-2 rounded-md"
            >
              Sign In as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">Or</h1>
            <h1 className="mt-4 font-bold text-4xl">Create your account</h1>
            <input
              className="mt-8 h-10 rounded-md bg-transparent border border-gray-700 p-6"
              placeholder="Full Name"
              type={"text"}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="mt-8 h-10 rounded-md bg-transparent border border-gray-700 p-6"
              placeholder="Email"
              type={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="mt-8 h-10 rounded-md bg-transparent border border-gray-700 p-6"
              placeholder="Password"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleSignUp}
              className="mt-8 bg-white text-black w-full font-bold text-lg p-2 rounded-md"
            >
              Create account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SignUpModal;
