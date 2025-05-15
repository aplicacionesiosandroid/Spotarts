import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/'); // Redirige al dashboard si se autentica correctamente
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-500 to-green-800">
      <div className="bg-white shadow-xl p-8 rounded-xl text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-700">Accede a Spotarts Admin</h1>
        <button
          onClick={handleLogin}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition duration-300"
        >
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
};

export default Login;


