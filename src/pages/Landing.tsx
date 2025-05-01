
import { useAuth } from "@/components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import SubmissionForm from "@/components/SubmissionForm";

const Landing = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      setShowForm(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white border-b py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">LinkToLawyers</div>
          <div className="space-x-4">
            {user ? (
              <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
            ) : (
              <Button variant="outline" onClick={() => navigate("/auth")}>
                Sign In
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content - Either Hero or Form */}
      {!showForm ? (
        <>
          {/* Hero Section */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Connect With Legal Professionals
              </h1>
              <p className="text-xl mb-8 text-gray-600">
                Get expert legal advice and representation for your specific needs.
                Our platform connects you with experienced attorneys specialized in
                your case type.
              </p>
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="text-lg px-6 py-6"
              >
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Submit Your Case</h3>
                  <p className="text-gray-600">
                    Fill out our simple form with details about your legal needs.
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
                  <p className="text-gray-600">
                    Our system matches you with attorneys specialized in your case type.
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Connect & Resolve</h3>
                  <p className="text-gray-600">
                    Communicate securely and get the legal help you need.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-white border-t py-10 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-gray-600">© 2025 LinkToLawyers. All rights reserved.</p>
            </div>
          </footer>
        </>
      ) : (
        <section className="py-10 px-6 min-h-[calc(100vh-73px)] flex flex-col">
          <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
            <Button 
              variant="outline" 
              onClick={() => setShowForm(false)}
              className="mb-6 self-start"
            >
              Back to Homepage
            </Button>
            <div className="flex-1 flex items-center justify-center">
              <SubmissionForm />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Landing;
