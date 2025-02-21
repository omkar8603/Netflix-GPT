import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-5">
            <img 
                src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-3100332-2588407.png" 
                alt="Error Illustration" 
                className="w-80 mb-5"
            />
            <h1 className="text-4xl font-bold text-red-600">Oops! Something went wrong.</h1>
            <p className="text-gray-700 text-lg mt-2">
                {error.statusText || error.message || "An unexpected error occurred."}
            </p>
            <button
                onClick={() => navigate("/")}
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
                Go Home
            </button>
        </div>
    );
};

export default ErrorPage;
