import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginForm from '../components/Login/LoginForm';

/**
 * IndexPage serves as the main login page for the application.
 * As per the project requirements, this page displays a responsive login screen.
 * It utilizes MainAppLayout for the overall page structure (e.g., background, centering)
 * and the LoginForm component for the actual login form interface.
 * The LoginForm component itself is styled according to the 'mainContent' layout requirements,
 * including background, padding, shadow, and width constraints.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        The LoginForm component is responsible for rendering all login elements
        and adheres to the main content layout requirements specified in the project.
        Its styling (bg-card, p-6, shadow-md, rounded-lg, w-full max-w-xs)
        matches the 'mainContent' definition from Layout Requirements.
      */}
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
