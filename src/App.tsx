import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/students/Index";
import Quizzes from "./pages/students/Quizzes";
import Notes from "./pages/students/Notes";
import Performance from "./pages/students/Performance";
import Flashcards from "./pages/students/Flashcards";
import Billing from "./pages/students/Billing";
import Profile from "./pages/students/Profile";
import NotFound from "./pages/students/NotFound";
import Dashboard from "./pages/teacher/Dashboard";
import Students from "./pages/teacher/Students";
import Schedule from "./pages/teacher/Schedule";
import Settings from "./pages/teacher/Settings";
import TeacherNotes from "./pages/teacher/TeacherNotes";
import LandingPage from "./pages/website/LandingPage";
import PricingPage from "./pages/website/PricingPage";

const queryClient = new QueryClient();

function AppRoutes() {
  const location = useLocation();

  // Routes where Navigation should be visible
  const showNavigationRoutes = [
    "/",
    "/quizzes",
    "/notes",
    "/performance",
    "/billing",
    "/profile",
    "/flashcards",
  ];

  const showNavigation = showNavigationRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-background">
      {showNavigation && <Navigation />}
      <Routes>
        {/* <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} /> */}
        <Route path="/" element={<Index />} />

        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/teacher" element={<Dashboard />} />
        <Route path="/teacher/students" element={<Students />} />
        <Route path="/teacher/notes" element={<TeacherNotes />} />
        <Route path="/teacher/schedule" element={<Schedule />} />
        <Route path="/teacher/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
