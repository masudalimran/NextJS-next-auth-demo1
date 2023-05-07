import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import React, { useCallback, useEffect, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import { signIn } from "next-auth/react";

type Props = {};

const LoginModal = (props: Props) => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoading, loginModal, registerModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      // Todo Login
      await signIn("credentials", { email, password });
      loginModal.onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [email, loginModal, password]);

  useEffect(() => {
    let errorCount = 0;
    if (email === "") errorCount++;
    if (password === "") errorCount++;
    if (errorCount > 0) setIsInvalid(true);
    else setIsInvalid(false);
  }, [email, password]);

  const bodyContent = (
    <div className="flex flex-col gap-4 ">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Create new account?
        <span
          className="text-white cursor-pointer hover:underline ml-2"
          onClick={onToggle}
        >
          Register
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      invalid={isInvalid}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign In"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
