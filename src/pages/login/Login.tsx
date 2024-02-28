import { ThemeContext } from "@/context/ThemeContext";
import { ClerkLoaded, SignIn } from "@clerk/clerk-react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
export const Login = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(()=> {
    const htmlElement = document?.querySelector('html');
    if (htmlElement) {
      htmlElement.setAttribute('data-theme', theme || "light");
    }
  }, [theme])
  return (
    <div className="w-full h-[100dvh] text-dark">
      <ClerkLoaded>
        <div className="w-full h-full flex flex-col">
          <div className="flex flex-col items-center justify-center gap-4 h-full">
            <h1 className="text-[42px] font-bold font-tajawal">Shopping</h1>
            <p className="text-sm font-urbanist text-center">
              Ingresa a tu cuenta para disfrutar los beneficios de ser cliente
            </p>
            <Link className="btn btn-ghost" to="/">Ingresa como invitado </Link>
            <SignIn
              afterSignUpUrl="/"
              afterSignInUrl="/"
              redirectUrl="/"
              appearance={{
                layout: {
                  socialButtonsVariant: "blockButton",
                },
                elements: {
                  headerSubtitle: "hidden",
                  headerTitle: "hidden",
                  footer: "hidden",
                  formButtonPrimary: {
                    marginTop: "16px",
                    color: "white",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    borderRadius: "100px",
                    height: "51px",
                    textTransform: "Capitalize",
                  },
                  formField: {
                    display: "flex",
                    gap: "5px",
                  },
                },
              }}
            />
          </div>
        </div>
      </ClerkLoaded>
    </div>
  );
};

export default Login;
